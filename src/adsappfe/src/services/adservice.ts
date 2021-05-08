import config from "../config/config";
import http from "./http";

interface AdDto {
    name: string,
    details: string,
    imageUrl: string,
    categoryId: string,
    ciry: string,
    userName: string
}

interface AdService {
    addNewAd(body: any, token: any): Promise<AdDto>;
}


class AdServiceImpl implements AdService {
    addNewAd = (body: any, token: any) => {
        return http.post(`${config.BASE_URL}${config.API_URLS.ad}`, body, token);
    }
}

export default new AdServiceImpl();