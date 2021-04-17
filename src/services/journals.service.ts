import Journal from '../models/journal.model';

export class JournalsService {
  private readonly apiPath = 'http://localhost:3000/journals';

  private readonly contentTypeHeader = { 'Content-Type': 'application/json' };

  private static async handleResponse(resp: Response) {
    // fetch does not automatically throw on error response
    if (!resp.ok) throw new Error(`Fetch Error: \n ${await resp.text()}`);
    return resp.json();
  }

  async getJournals(): Promise<Journal[]> {
    const uri = this.apiPath;

    const resp = await fetch(uri);

    return JournalsService.handleResponse(resp);
  }

  async makeJournalTransfer(journal: Journal): Promise<any> {
    const uri = this.apiPath;
    const method = 'POST';
    const body = JSON.stringify(journal);
    const headers = { ...this.contentTypeHeader };

    const resp = await fetch(uri, { method, body, headers });

    return JournalsService.handleResponse(resp);
  }

  async cardQuery(journal: Journal): Promise<any> {
    const uri = this.apiPath;
    const method = 'POST';
    const body = JSON.stringify(journal);
    const headers = { ...this.contentTypeHeader };

    const resp = await fetch(uri, { method, body, headers });

    return JournalsService.handleResponse(resp);
  }

  // async makeJournalTransfer(journal: Journal): Promise<any> {
  //   const uri = `${this.apiPath}/${journal.id}`;
  //   const method = 'PATCH';
  //   const body = JSON.stringify({ working: journal });
  //   const headers = { ...this.contentTypeHeader };

  //   const resp = await fetch(uri, { method, body, headers });

  //   return JournalsService.handleResponse(resp);
  // }

  async deleteJournal(id: number): Promise<any> {
    const uri = `${this.apiPath}/${id}`;
    const method = 'DELETE';

    const resp = await fetch(uri, { method });

    return JournalsService.handleResponse(resp);
  }
}

export default new JournalsService();
