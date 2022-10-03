import { message } from 'antd';
const axios = require("axios");

let instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 15000,
})

export const post = (url, data) => {
  return new Promise((resolve, reject) => {
    instance.post(url, data).then(({ data }) => {
      message.success(data.msg, 5)
      resolve(data)
    })
      .catch(({ response }) => {
        const res = response.data;
        if (res.error && res.msg) message.error(res.msg, 5);
        reject(response)
      })
  })
}

export const put = (url, data) => {
  return new Promise((resolve, reject) => {
    instance.put(url, data).then(({ data }) => {
      message.success(data.msg, 5)
      resolve(data)
    })
      .catch(({ response }) => {
        const res = response.data;
        if (res.error && res.msg) message.error(res.msg, 5);
        reject(response)
      })
  })
}

export const get = (url) => {
  return new Promise((resolve, reject) => {
    instance.get(url).then(({ data }) => {
      if (data.msg) message.success(data.msg, 5);
      resolve(data)
    }).catch(({ response }) => {
      const res = response.data;
      if (res.error && res.msg) message.error(res.msg, 5);
      reject(response)
    })
  })
}

export const remove = (url) => {
  return new Promise((resolve, reject) => {
    instance.delete(url).then(({ data }) => {
      if (data.msg) message.success(data.msg, 5);
      resolve(data)
    }).catch(({ response }) => {
      const res = response.data;
      if (res.error && res.msg) message.error(res.msg, 5);
      reject(response)
    })
  })
}

// export default {post, init};