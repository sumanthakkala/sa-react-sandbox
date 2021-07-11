import axios from 'axios'

const tmbdAxios = axios.create()

tmbdAxios.interceptors.request.use((request) => {
  request.params = request.params ?? {}
  request.params['api_key'] = process.env.REACT_APP_TMDB_API_KEY
  return request
})

export {tmbdAxios}