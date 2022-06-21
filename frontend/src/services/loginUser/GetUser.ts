import { HttpClient } from './utils/HttpClient';

class GetUser {
  private httpClient: InstanceType<new (...args: []) => any>;
  constructor() {
    this.httpClient = new HttpClient(`http://localhost:3333`);
  }

  async getUser(token: string) {
    return await this.httpClient.get(`/users`, token);
  }
}

export default new GetUser();
