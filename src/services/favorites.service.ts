
import Favorite from '../models/favorite.model';

export class FavoritesService {
  private readonly apiPath = 'http://localhost:3000/favorites';

  private readonly contentTypeHeader = { 'Content-Type': 'application/json' };

  private static async handleResponse(resp: Response) {
    // fetch does not automatically throw on error response
    if (!resp.ok) throw new Error(`Fetch Error: \n ${await resp.text()}`);
    return resp.json();
  }

  async getFavorites(): Promise<Favorite[]> {
    const uri = this.apiPath;

    const resp = await fetch(uri);

    return FavoritesService.handleResponse(resp);
  }

  async makeFavoriteTransfer(favorite: Favorite): Promise<any> {
    const uri = this.apiPath;
    const method = 'POST';
    const body = JSON.stringify(favorite);
    const headers = { ...this.contentTypeHeader };

    const resp = await fetch(uri, { method, body, headers });

    return FavoritesService.handleResponse(resp);
  }

  async newFav(favorite: Favorite): Promise<any> {
    const uri = this.apiPath;
    const method = 'POST';
    const body = JSON.stringify(favorite);
    const headers = { ...this.contentTypeHeader };

    const resp = await fetch(uri, { method, body, headers });

    return FavoritesService.handleResponse(resp);
  }

  // async makeFavoriteTransfer(favorite: Favorite): Promise<any> {
  //   const uri = `${this.apiPath}/${favorite.id}`;
  //   const method = 'PATCH';
  //   const body = JSON.stringify({ working: favorite });
  //   const headers = { ...this.contentTypeHeader };

  //   const resp = await fetch(uri, { method, body, headers });

  //   return FavoritesService.handleResponse(resp);
  // }

  
}
export default new FavoritesService();
