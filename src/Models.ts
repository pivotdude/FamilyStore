export interface ProductModel {
    id: number,
    price: number,
    type: string,
    oldPrice: number,
    producer: string,
    rating: {
        rate: number,
        count: number,
    },
    photo: string,
}