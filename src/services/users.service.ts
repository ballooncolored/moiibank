import User from '../models/user.model';

export class UsersService {
  private readonly apiPath = 'http://localhost:3000/users';

  private readonly contentTypeHeader = { 'Content-Type': 'application/json' };

  private static async handleResponse(resp: Response) {
    // fetch does not automatically throw on error response
    if (!resp.ok) throw new Error(`Fetch Error: \n ${await resp.text()}`);
    return resp.json();
  }

  async getUsers(): Promise<User[]> {
    const uri = this.apiPath;

    const resp = await fetch(uri);

    return UsersService.handleResponse(resp);
  }

  async changePassword(user: User): Promise<any> {
    const uri = `${this.apiPath}/1`;
    const method = 'PATCH';
    const body = JSON.stringify({ password: `${user.password}` });
    const headers = { ...this.contentTypeHeader };

    const resp = await fetch(uri, { method, body, headers });

    return UsersService.handleResponse(resp);
  }



}

export default new UsersService();
