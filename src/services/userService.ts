import { HttpService } from "./http-service"

export interface IUser{
    name: string
    village: string
}

class UserService extends HttpService<IUser>{
    constructor(){
        super("") // /user
    }
}
export const createUserService = () => new UserService()