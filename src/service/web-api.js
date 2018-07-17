import axios from "axios";

/**
 * @typedef {Object} SmmsApiResponse
 * @property {String} code 上传文件状态。正常情况为 success。出现错误时为 error
 * @property {String} filename 上传文件时所用的文件名
 * @property {String} storename 上传后的文件名
 * @property {Int} size 文件大小
 * @property {Int} width 图片的宽度
 * @property {Int} height 图片的高度
 * @property {String} hash 随机字符串，用于删除文件
 * @property {String} delete 删除上传的图片文件专有链接
 * @property {String} url 图片服务器地址
 * @property {String} path 图片的相对地址
 * @property {String} msg 上传图片出错时将会出现
 * @property {number} timestamp
 */

/**
 * 向sm.ms API上传图片
 * https://sm.ms/doc/
 *
 * @async
 * @return {Promise<SmmsApiResponse>} A promise to the token.
 */
function uploadForm(file) {
  let formData = new FormData();
  formData.append("smfile", file);
  return axios.post("https://sm.ms/api/upload", formData)
      .then(x => x.data.data);
}

/**
 * @typedef {Object} HitokotoApiResponse
 * @property {Number} id 本条一言的id
 * @property {string} hitokoto 一言正文。编码方式unicode。使用utf-8
 * @property {string} type 类型
 * @property {string} from 一言的出处
 * @property {string} creator 添加者
 * @property {string} created_at 添加时间
 */

/**
 * 从一言API下载条目
 * https://hitokoto.cn/api
 *
 * @async
 * @return {Promise<HitokotoApiResponse>} A promise to the token.
 */
function getWordFromHitokotoApi() {
  return axios.get("https://v1.hitokoto.cn")
      .then(response => response.data); // https://github.com/axios/axios#response-schema
}

export { uploadForm, getWordFromHitokotoApi };
