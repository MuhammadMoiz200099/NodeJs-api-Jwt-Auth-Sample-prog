import { Request, Response } from "express";
import l, { logger } from "../../../common/logger";
import { manageError } from "../../../helper/response.helper";
import AuthService from "../../../services/auth.service";
import { HelperService } from "../../../services/helper.service";
import { BaseController } from "../_base.controller";

export class Controller extends BaseController {

    /**
     * Login User
     * @param req 
     * @param res 
     */
    async login(req: Request, res: Response): Promise<void> {
        try {
            const response = await AuthService.login(req.body);
            res.cookie('token', response.accessToken);
            super.response(res, response, 200, "");
        }
        catch (error) {
            logger.error(error);
            const err = manageError(error);
            l.error(`Error in login, err code: ${400}`);
            l.error(err.message);
            super.response(res, '', err.code, err.message);
        }
    }


    /**
     * Login User
     * @param req 
     * @param res 
     */
    async getLoggedInUser(req: Request, res: Response): Promise<void> {
        try {
            const helperService = new HelperService();
            super.response(res, helperService.tranformMeData(req.user.toJSON()), 200, "");
        }
        catch (error) {
            logger.error(error);
            const err = manageError(error);
            l.error(`Error in login, err code: ${400}`);
            l.error(err.message);
            super.response(res, '', err.code, err.message);
        }
    }

}

export default new Controller();
