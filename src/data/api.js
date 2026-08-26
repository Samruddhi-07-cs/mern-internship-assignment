const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:5000/api'

async function request(path, options = {}) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: { 'Content-Type': 'application/json', ...options.headers },
    ...options,
  })
  const payload = await response.json()
  if (!response.ok) throw new Error(payload.message || 'Request failed.')
  return payload
}

export function getMenuItems() {
  return request('/menu')
}

export function getReviews() {
  return request('/reviews')
}

export function sendContactMessage(formData) {
  return request('/contact', { method: 'POST', body: JSON.stringify(formData) })
}
