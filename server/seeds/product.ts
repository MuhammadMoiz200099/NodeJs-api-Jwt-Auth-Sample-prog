import { Product } from "../models";
import faker from 'faker';

// Number of records need to generate
const productCounts = 200;

export default async function seed(): Promise<void> {
    await Product.deleteMany();

    let products = [];
    for (var index = 0; index < productCounts; index++) {
        const product = { name: faker.commerce.productName(), price: faker.commerce.price() };
        products.push(product);
    }
    await Product.insertMany(products);
}