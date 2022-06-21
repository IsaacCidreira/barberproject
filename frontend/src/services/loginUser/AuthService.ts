import { HttpClient } from './utils/HttpClient';

class AuthService {
  private httpClient: InstanceType<new (...args: []) => any>;
  constructor() {
    this.httpClient = new HttpClient(`http://localhost:3333`);
  }

  async authLogin(username: string, password: string) {
    return await this.httpClient.post(`/sessions`, { username, password });
  }
}

export default new AuthService();
