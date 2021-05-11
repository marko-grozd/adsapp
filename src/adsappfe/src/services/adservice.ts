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
}


class AdServiceImpl implements AdService {
    addNewAd = (body: any, token: any) => {
        return http.post(`${config.BASE_URL}${config.API_URLS.ad}`, body, token);
    }

    pageCount = () => http.get(`${config.BASE_URL}${config.API_URLS.ad}/all/pagecount`);

    getAll = (page: number) => http.get(`${config.BASE_URL}${config.API_URLS.ad}/all/${page}`);

    getById = (id: number) => http.get(`${config.BASE_URL}${config.API_URLS.ad}/${id}`);
}

export default new AdServiceImpl();