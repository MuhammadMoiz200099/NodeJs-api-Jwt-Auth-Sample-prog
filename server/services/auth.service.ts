import { User } from "../models";
import jwt from "jsonwebtoken";
import { IloginResponse } from '../../types/auth';

export class AuthService {

    constructor() {}

    login(credentials): Promise<IloginResponse> {
        return new Promise(async (resolve, reject) => {
            const { email, password } = credentials;
            try {
                // TODO: Fix typing
                const user = await User.findOne({ email });

                if (!user) {
                    return reject({ message: 'User not exists', code: 401 });
                }

                const passwordIsValid = (user as any).authenticate(password);

                if (!passwordIsValid) {
                    return reject({ message: 'Email or Password invalid!', code: 401 });
                }

                const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
                    expiresIn: 604800, // 1 week hours
                    algorithm: 'HS256'
                });

                resolve({
                    id: user._id,
                    email: user.email,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    accessToken: token
                })

            }
            catch (err) {
                reject(err);
            }
        })

    }
}

export default new AuthService();
