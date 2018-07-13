import * as axios from 'axios';

const BASE_URL = 'https://sm.ms/api';

function upload(formData) {
  const url = `${BASE_URL}/upload`;

  return axios.post(url, formData)
      // get data
      .then(x => x.data)
}

export { upload }
