
interface Http {
  get(path: string): Promise<Response>;
  post(path: string, body: any, headers: any): Promise<Response>;
}

class HttpImpl implements Http {
  private getHeaders = (token?: any) => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    if (token) {
      headers.append("Authorization", `Bearer ${token}`);
    }
    return headers;
  };

  private getRequest = async (method: string, path: string, body?: any, token?: any) => {
    
    const url = `${path}`;
    const options: RequestInit = {
      method,
      headers: this.getHeaders(token),
    };

    if (body) {
      options.body = JSON.stringify(body);
    }
    const response = await fetch(url, options);
    return response.json();
  };

  get = (path: string, token?: any): any => this.getRequest("GET", path, undefined, token);

  post = (path: string, body: any, token?: any) => this.getRequest("POST", path, body, token);

}

export default new HttpImpl();
