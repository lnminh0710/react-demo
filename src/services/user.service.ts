import axios from 'axios';

export { getUser };

function getUser() {
  return axios.get('https://jsonplaceholder.typicode.com/users');
}
