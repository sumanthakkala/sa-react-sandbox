import {tmbdAxios} from 'utils/axios/interceptor'

test('interceptor works correctly for TMDB requests', () => {
  const result = tmbdAxios.interceptors.request.handlers[0].fulfilled({});
  expect(result.params).toHaveProperty('api_key');
})
