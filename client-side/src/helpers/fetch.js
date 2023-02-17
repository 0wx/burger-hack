export class Api {
  constructor(baseURL) {
    this.baseURL = baseURL
  }

  get access_token() {
    return localStorage.getItem('access_token')
  }

  async get(path) {
    const config = {
      headers: {
        access_token: this.access_token,
      },
    }
    const response = await fetch(`${this.baseURL}${path}`, config)
    if (!response.ok) throw await response.json()
    
    const data = await response.json()
    return { response, data }
  }

  async post(path, data) {
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        access_token: this.access_token,
      },
      body: JSON.stringify(data),
    }
    const response = await fetch(`${this.baseURL}${path}`, config)
    if (!response.ok) throw await response.json()

    const _data = await response.json()
    return { response, data: _data }
  }

  async put(path, data) {
    const config = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        access_token: this.access_token,
      },
      body: JSON.stringify(data),
    }
    const response = await fetch(`${this.baseURL}${path}`, config)
    if (!response.ok) throw await response.json()

    const _data = await response.json()
    return { response, data: _data }
  }

  async delete(path) {
    const config = {
      method: 'DELETE',
      headers: {
        access_token: this.access_token,
      },
    }
    const response = await fetch(`${this.baseURL}${path}`, config)
    if (!response.ok) throw await response.json()

    const data = await response.json()
    return { response, data }
  }

  async patch(path, data) {
    const config = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        access_token: this.access_token,
      },
      body: JSON.stringify(data),
    }
    const response = await fetch(`${this.baseURL}${path}`, config)
    if (!response.ok) throw await response.json()

    const _data = await response.json()
    return { response, data: _data }
  }
}

export const api = new Api('http://localhost:3000')
