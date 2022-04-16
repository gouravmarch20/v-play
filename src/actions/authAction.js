import axios from 'axios'
export const createUser = async userData => {
  try {
    // console.log(userData)
    const response = await axios.post('/api/auth/signup', userData)
    console.log(response)
  } catch (error) {
    console.log(error)
  }
}
export const loginUser = async userData => {
  try {
    console.log(userData)
    const response = await axios.post('/api/auth/login', userData)
    console.log(response)
  } catch (error) {
    console.log(error)
  }
}
