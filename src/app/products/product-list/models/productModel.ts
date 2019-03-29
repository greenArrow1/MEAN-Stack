export class Products {
    count: number;
    product: Array<MetaDataOfProducts>;
}

export class MetaDataOfProducts {
    request: string;
    url: string;
}

export class Product {
    id: string;
    price: number;
    name: string;
}
export class AddedProduct {
    createdProduct: Product;
    message: string;
}
// export interface Tile {
//     color: string;
//     cols: number;
//     rows: number;
//     text: string;
//   }
export interface ExampleTab {
    label: string;
    content: string;
    path?: string;
}
export interface DeletedData {
    id: string;
    message: string;
}
