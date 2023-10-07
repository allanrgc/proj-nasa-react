const API_BASE_URL = 'http://localhost:8080'

export async function get(endpoint) {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`);
    if (!response.ok) {
      throw new Error('Erro na solicitação GET');
    }
    return await response.json();
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function post(endpoint, data) {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error('Erro na solicitação POST');
    }
    return await response.json();
  } catch (error) {
    throw new Error(error.message);
  }
}