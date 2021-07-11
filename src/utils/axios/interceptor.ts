import axios from 'axios'

export const setTmdbInterceptor = (): void => {
  console.log(process.env)

  axios.interceptors.request.use((request) => {
    console.log(request)
    if (
      request.url?.startsWith(process.env.REACT_APP_TMDB_BASE_URL as string)
    ) {
      request.params = request.params ?? {}
      request.params['api_key'] = process.env.REACT_APP_TMDB_API_KEY
    }
    return request
  })
}
