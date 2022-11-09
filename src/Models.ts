import {fetchNews, fetchProducts, fetchProductsOnSearch, hideLoader, showLoader} from "./redux/actions";

export interface ProductModel {
    title: string,
    description: string,
    type: string,
    composition: string,
    producer: string,
    sales: number,
    rating: {
        rate: number,
        count: number,
    },
    colors: [
        {
            price: number,
            oldPrice: number,
            color_title: string,
            image: string,
            photos: {
                big: [string],
                small: [string],
            },
            sizes: [
                {
                    InternationalSize: string,
                    RussianSize: string,
                    Count: number,
                }
            ]
        },
    ],
    reviews?: [{content: string}]
}
export interface NewsModel {
    _id: number,
    title: string,
    content: string,
    date: string,
    image: string,
}

interface validationErrors {
    location: string,
    msg: string,
    param: string,
    value: string
}

export interface regModel {
    success: boolean,
    message: string | Array<validationErrors>
}

export interface StateModel {
    app: {
        loading: boolean,
        warnings_notifications: Array<string>,
        submits_notifications: Array<string>
    },
    news: {
        news: Array<NewsModel> | null
    },
    products: {
        fetchedProducts: Array<ProductModel> | null,
        SearchProducts: Array<ProductModel> | null,
    },
    authorization: {
        auth: object,
        reg: regModel
    }
}
