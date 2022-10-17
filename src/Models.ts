export interface ProductModel {
    id: number,
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
    id: number,
    title: string,
    content: string,
    date: string,
    image: string,
}