import { Request, Response } from "express";
import l, { logger } from "../../../common/logger";
import { manageError } from "../../../helper/response.helper";
import OrderService from "../../../services/order.service";
import { BaseController } from "../_base.controller";

export class Controller extends BaseController {

    /**
     * 
     * list all products
     * @param req
     * @param res
     * 
     */
    async createOrder(req: Request, res: Response): Promise<void> {
        try {
            const response = await OrderService.createOrder({userId: req.user._id, ...req.body});
            super.response(res, response, 200, "");
        }
        catch (error) {
            logger.error(error);
            const err = manageError(error);
            l.error(`Error in getting products, err code: ${400}`);
            l.error(err.message);
            super.response(res, '', err.code, err.message);
        }
    }


}

export default new Controller();
