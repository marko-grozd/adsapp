import config from "../config/config";

interface Http {
  get(path: string): Promise<Response>;
  post(path: string, body: any, headers: any): Promise<Response>;
}

class HttpImpl implements Http {
  private getHeaders = () => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    return headers;
  };

  private getRequest = async (method: string, path: string, body?: any) => {
    const url = `${config.BASE_URL}/${path}`;
    const options: RequestInit = {
      method,
      headers: this.getHeaders(),
    };

    if (body) {
      options.body = JSON.stringify(body);
    }
    const response = await fetch(url, options);
    return response.json();
  };

  get = (path: string): any => this.getRequest("GET", path);

  post = (path: string, body: any) => this.getRequest("POST", path, body);
}

export default new HttpImpl();
