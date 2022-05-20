import axios from 'axios'
export const createUser = async userData => {
  try {
    const response = await axios.post('/api/auth/signup', userData)
    console.log(response)
  } catch (error) {
    console.warn(error)
  }
}
export const loginUser = (email, password) => {
  return axios.post('/api/auth/login', { email, password })
}
