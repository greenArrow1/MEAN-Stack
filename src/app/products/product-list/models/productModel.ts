export class Products {
    count: number;
    product: Array<MetaDataOfProducts>;
}

export class MetaDataOfProducts {
    request: string;
    url: string;
}

export class Product{
    id: string;
    price: number;
    name: string;
}
