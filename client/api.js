import request from 'superagent'

const serverURL = 'http://localhost:3000/api/v1'

// *** EXAMPLE ***
export function getWelcome() {
  return request.get(`${serverURL}/welcome`).then((response) => response.body)
}
// ***   ***   ***

// export function fetchPlayer() {
//   return request.get('/find-a-player').then((response) => response).then((response) => console.log(response))}