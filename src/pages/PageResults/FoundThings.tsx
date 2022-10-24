import React, {useEffect} from 'react';
import ProductList from "../../components/ProductList";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {fetchProductsOnSearch} from "./../../redux/actions";
import Loading from "../../components/Loading";

const FoundThings = () => {
    const dispatch = useDispatch()
    const productss = useSelector(state => state.products.SearchProducts)
    const loading = useSelector(state => state.app.loading)
    let {searchName} = useParams()

    useEffect(() => {
        dispatch(fetchProductsOnSearch(searchName))
    }, [searchName])

    if (loading) {
        return <Loading />
    }

    return(
        <div style={{marginTop: '20px'}}>
            <ProductList products={productss} />
        </div>
    );
};

export default FoundThings;