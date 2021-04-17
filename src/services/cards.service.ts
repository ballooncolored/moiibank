import Card from '../models/card.model';

export class CardsService {
  private readonly apiPath = 'https://run.mocky.io/v3/b3dff6e0-3e1d-41e0-ac38-03cba30b5449';

  private readonly contentTypeHeader = { 'Content-Type': 'application/json' };

  private static async handleResponse(resp: Response) {
    // fetch does not automatically throw on error response
    if (!resp.ok) throw new Error(`Fetch Error: \n ${await resp.text()}`);
    return resp.json();
  }

  async getCards(): Promise<Card[]> {
    const uri = this.apiPath;

    const resp = await fetch(uri);

    return CardsService.handleResponse(resp);
  }

  // async createCard(card: Card): Promise<any> {
  //   const uri = this.apiPath;
  //   const method = 'POST';
  //   const body = JSON.stringify(card);
  //   const headers = { ...this.contentTypeHeader };

  //   const resp = await fetch(uri, { method, body, headers });

  //   return CardsService.handleResponse(resp);
  // }

  async makeCardTransfer(card: Card): Promise<any> {
    const uri = `${this.apiPath}/${card.id}`;

    const method = 'PATCH';

    const body = JSON.stringify({ balance: card.balance - card.amount });
    const headers = { ...this.contentTypeHeader };

    const resp = await fetch(uri, { method, body, headers });

    return CardsService.handleResponse(resp);
  }

  async deleteCard(id: number): Promise<any> {
    const uri = `${this.apiPath}/${id}`;
    const method = 'DELETE';

    const resp = await fetch(uri, { method });

    return CardsService.handleResponse(resp);
  }

  async blockCard(card: Card): Promise<any> {
    const uri = `${this.apiPath}/${card.id}`;
    const method = 'PATCH';
    const body = JSON.stringify({ working: !card.working });
    
    const headers = { ...this.contentTypeHeader };

    const resp = await fetch(uri, { method, body, headers });

    return CardsService.handleResponse(resp);
  }
}

export default new CardsService();
