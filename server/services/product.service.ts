import { Product } from "../models";

const projection = {
    __v: false
}

interface IProductOption {
    name?: string;
    pageSize?: number;
    pageIndex?: number;
}

export class ProductService {

    constructor() { }

    getAllProducts(options: IProductOption = {}): Promise<any> {
        return new Promise(async (resolve, reject) => {
            try {

                let query = {};
                let paginateOptions = {
                    lean: true
                };

                if (options.name) {
                    Object.assign(query, { name: { $regex: options.name, $options: 'i' } });
                }
                if (options.pageIndex) {
                    Object.assign(paginateOptions, { page: options.pageIndex });
                }
                if (options.pageSize) {
                    Object.assign(paginateOptions, { limit: options.pageSize });
                }

                const product = await Product.paginate(query, paginateOptions);

                if (!product) {
                    return reject({ message: 'Product not found', code: 401 });
                }

                resolve(product);

            }
            catch (err) {
                reject(err)
            }
        })
    }

}

export default new ProductService();
