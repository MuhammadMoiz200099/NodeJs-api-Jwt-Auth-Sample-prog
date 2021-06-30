import { Request, Response } from "express";
import l, { logger } from "../../../common/logger";
import { manageError } from "../../../helper/response.helper";
import ProductService from "../../../services/product.service";
import { BaseController } from "../_base.controller";

export class Controller extends BaseController {

    /**
     * 
     * list all products
     * @param req
     * @param res
     * 
     */
    async getProducts(req: Request, res: Response): Promise<void> {
        try {
            const response = await ProductService.getAllProducts(req.query);
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
