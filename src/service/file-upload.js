import axios from 'axios';

function uploader(url, formData) {
  return axios.post(url, formData)
      .then(x => x.data)
}

export { uploader }
