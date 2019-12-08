export class Api {
  constructor(options) {
    this.options = options;  
  }

  getUserInfo() {
    return this.fetchInternal("/users/me", "GET");
  }

  getCards() {
    return this.fetchInternal("/cards", "GET");
  }

  editUserInfo(name, about) {
    const body = JSON.stringify({
      name: name,
      about: about
    });
    return this.fetchInternal("/users/me", "PATCH", body);
  }

  fetchInternal(url, method, body) {
    const promise = fetch(`${this.options.serverUrl}${url}`, {
      method: method,
      headers: this.options.headers,
      body: body
    });

    return promise
      .then(res => {
        if (res.ok) {
          return res.json();
        }

        // если ошибка, переходим в catch
        return Promise.reject(`Ошибка: ${res.status}`);
      })

      .catch(error => {
        console.error(error);
        alert(error);
      });
  }

}

