import config from "../config/config";
import http from "./http";

interface LoginService {
  loginUser(body: any): Promise<any>;
}

class LoginServiceImpl implements LoginService {
  loginUser = (body: any) => {
    return http.post(`${config.BASE_URL}${config.API_URLS.login}`, body);
  };
}

export default new LoginServiceImpl();
