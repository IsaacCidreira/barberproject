class HttpClient {
  constructor(private baseUrl: string) {}
  async post(path: string, body: string[]) {
    try {
      const response = await fetch(`${this.baseUrl}${path}`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const json = await response.json();
      return { json, response };
    } catch (err) {
      console.log(err);
    }
  }

  async get(path: string, token: string) {
    const response = await fetch(`${this.baseUrl}${path}`, {
      method: 'GET',
      headers: {
        Authorization: 'Beare ' + token,
      },
    });
    let body = null;
    const contentType = response.headers.get('Content-Type');
    if (contentType?.includes('application/json')) {
      body = await response.json();
    }
    if (response.ok) {
      return body;
    }
    throw new Error(response as any, body);
  }
}

export { HttpClient };
