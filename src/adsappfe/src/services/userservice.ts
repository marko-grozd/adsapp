

import config from "../config/config";
import { UserDTO } from "../dtos/userdto";
import http from "./http";

interface UserService {
    addUser(body: any): Promise<UserDTO>;
}

class UserServiceImpl implements UserService {

    addUser = (body: any) => { 
        console.log('debug: ==>', body);
       return  http.post(`${config.BASE_URL}${config.API_URLS.signup}`, body);
    }
}

export default new UserServiceImpl();