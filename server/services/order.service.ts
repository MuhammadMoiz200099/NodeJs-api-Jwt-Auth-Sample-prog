import { Order } from "../models";

export class OrderService {

    constructor() { }

    createOrder(reqPayload: any): Promise<any> {
        return new Promise(async (resolve, reject) => {
            try {

                reqPayload.timeStamp = new Date();

                const order = new Order(reqPayload).save();

                if(!order) {
                    return reject({ message: 'Invalid Order Details', code: 401 });
                }
 
                resolve(order);
            }
            catch (err) {
                reject(err)
            }
        })
    }

}

export default new OrderService();
