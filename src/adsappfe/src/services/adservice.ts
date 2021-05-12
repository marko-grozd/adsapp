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
    pageCount(): number;
    getAll(page: number): Promise<AdDto>;
    getById(id: number): Promise<AdDto>;
    getAllUsersAd(username: string, body: any): Promise<AdDto>;
}


class AdServiceImpl implements AdService {
    addNewAd = (body: any, token: any) => {
        return http.post(`${config.BASE_URL}${config.API_URLS.ad}`, body, token);
    }

    pageCount = () => http.get(`${config.BASE_URL}${config.API_URLS.ad}/all/pagecount`);

    getAll = (page: number) => http.get(`${config.BASE_URL}${config.API_URLS.ad}/all/${page}`);

    getById = (id: number) => http.get(`${config.BASE_URL}${config.API_URLS.ad}/${id}`);

    getAllUsersAd = (username: string, token: any) => {
        return http.get(`${config.BASE_URL}${config.API_URLS.user}/myads/${username}`, token);
    }
}

export default new AdServiceImpl();