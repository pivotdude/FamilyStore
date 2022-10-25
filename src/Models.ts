import {fetchNews, fetchProducts, fetchProductsOnSearch, hideLoader, showLoader} from "./redux/actions";

export interface ProductModel {
    _id: number,
    title: string,
    description: string,
    price: number,
    type: string,
    oldPrice: number,
    producer: string,
    rating: {
        rate: number,
        count: number,
    },
    photos: {
        big: Array<string>,
        small: Array<string>,
    }
}
export interface NewsModel {
    _id: number,
    title: string,
    content: string,
    date: string,
    image: string,
}

export interface StateModel {
    app: {
        loading: boolean
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
        reg: object,
    }
}
