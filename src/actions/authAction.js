import axios from 'axios'
export const signupUser = (firstName, lastName, email, password) => {
  return axios.post('/api/auth/signup', {
    firstName,
    lastName,
    email,
    password
  })
}

export const loginUser = (email, password) => {
  return axios.post('/api/auth/login', { email, password })
}
