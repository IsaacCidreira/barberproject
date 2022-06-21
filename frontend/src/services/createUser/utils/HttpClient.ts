class HttpClient {
  constructor(private baseUrl: string) {}
  async post(path: string, body: string[]) {
    console.log(body);
    try {
      const response = await fetch(`${this.baseUrl}${path}`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      return response;
    } catch (err) {
      console.log(err);
    }
  }
}

export { HttpClient };
