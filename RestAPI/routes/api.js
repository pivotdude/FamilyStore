let express = require('express');
let router = express.Router();
let bcrypt = require('bcrypt');
let {check, validationResult} = require('express-validator')
const jwt = require('jsonwebtoken')
let User = require('../models/User')
let Product = require('../models/Product')
const News = require("../models/News");
const SECRET_TOKEN = ')3=o_)4z5ybqu&@1lhz!oirjvn=ss=(te)3tbyf6_6llw1+dmn'

router.post(
    '/registration',
    [
        check('email', 'Некорректный email').isEmail(),
        check('password', "Пароль должен состоять минимум из 6 символов").isLength({min: 6}),
        check('login', "Логин должен состоять минимум из 4 букв").exists(),
    ],
    async function (req, res) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {

                return res.status(400).json({
                    success: false,
                    message: errors.array() //  //
                })
            }

            const {email, password, login} = req.body

            const candidate = await User.findOne({email})
            if (candidate) {
                return res.status(400).json({success: false, message: 'Пользователь уже зарегестрирован'})
            }

            const hasedPassword = await bcrypt.hash(password, 12)
            const user = new User({email, password: hasedPassword, login, cart: []}) // В место массива в последствии передавать value из localstorage
            await user.save()

            res.status(201).json({success: true, message: "Пользователь создан"})

        } catch (e) {
            res.status(500).json({"message": `${e}`})
        }

    })


router.post(
    '/login',
    // [
    //     check('email', 'Введён не корректный email').isEmail(),
    //     check('password', 'Пароль должен быть введён').exists()
    // ],
    async function (req, res) {
        try {
            console.log(req.body)
            // const errors = validationResult(req)
            // if (!errors.isEmpty()) {
            //     return res.status(400).json({success: false, message: errors.array()})} //.map(item => item.msg).join(' , ')}) // errors: errors.array()

            const {email, password} = req.body
            const user = await User.findOne({email})
            if (!user) {
                return res.status(400).json({success: false, message: 'Некорректные данные'})
            }
            const isMatch = await bcrypt.compare(password, user.password)
            if (!isMatch) {
                return res.status(400).json({success: false, message: 'Некорректные данные'})
            }
            const token = jwt.sign(
                {userId: user._id},
                SECRET_TOKEN,
                {expiresIn: '1h'}
            )
            res.json({
                success: true,
                message: '',
                token,
                UserId: user._id
            }) // Ответ на логин
        } catch (e) {
            res.status(500).json({"message": `${e}`})
        }
    })

// router.post(
//     '/logout',
//     async function (req, res) {
//         try {
//             const user = await User.findOne({token})
//             if (!user) {
//                 return res.status(400).json({success: false, message: 'Вы и так не войдены!'})
//             }
//             const isMatch = await bcrypt.compare(password, user.password)
//         } catch (e) {
//             res.status(500).json({success: false, "message": `Server error: ${e}`})
//         }
//     }
// )

router.get('/news',
    async function (req, res, next) {
        let params = req.query
        console.log(params)
        console.log(params.limit)
        let limit = 20

        // if (params.limit) {
        //     limit = params.limit
        // }

        let news = await News.find({}).sort({"_id": -1}).limit(limit)
        res.status(200).json(news)
    }
)

router.get( // ?limit=5                  //   ?filter={"type":"Jeans","price":1}
    '/products',
    async function (req,res, next) {
        try {
            let limit = 40
            let filter = {}
            let params = req.query
            let skip = 0

            if (params.filter) {
                filter = params.filter
                filter = JSON.parse(filter)
                console.log(filter)
            } else if (params.limit) {
                limit = params.limit
            } else if (params.skip) {
                skip += limit
            }

            let products = await Product.find(filter).limit(limit).skip(skip).sort({"price": 1})
            res.status(200).json(products)
        } catch (e) {
            res.status(500).json({success: false, "message": `Server error: ${e}`})
        }
    }
)
router.get('/products/:productId',
    async function (req, res, next) {
        let id = req.params["productId"]
        let products = await Product.findOne({id: id})
        res.status(200).json(products)
    }
)
router.get('/products/search/:searchName',
    async function (req, res, next) {
        let searchName = req.params["searchName"].toLowerCase()
        let products = await Product.find({})
        let results = products.filter(item => item.title.toLowerCase().includes(searchName));
        console.log(results.length)
        res.status(200).json(results)
    }
)

module.exports = router;
