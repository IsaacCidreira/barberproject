import { HttpClient } from './utils/HttpClient';

class CreateUserService {
  private httpClient: InstanceType<new (...args: []) => any>;
  constructor() {
    this.httpClient = new HttpClient(`http://localhost:3333`);
  }

  async createUser(
    name: string,
    email: string,
    username: string,
    password: string,
  ) {
    return await this.httpClient.post(`/users`, {
      name,
      email,
      username,
      password,
    });
  }
}

export default new CreateUserService();
