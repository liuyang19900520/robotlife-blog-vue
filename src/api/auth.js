/**
 * article模块接口列表
 */

import global_ from '@/config/Global'; // 导入接口域名列表
import axios from '@/util/http'; // 导入http中创建的axios实例
import qs from 'qs'; // 根据需求是否导入qs模块




const auth = {
  signIn(username, pwd) {

    var timeStamp = new Date().getTime().toString();
    var clientKey = username;
    var baseString = clientKey + timeStamp;

    var Signture = require('crypto')
      .createHmac('md5', global_.SecrectKey)
      .update(baseString)
      .digest()
      .toString('base64');

    console.log(baseString)
    console.log(timeStamp)
    console.log(Signture)
    console.log(require('crypto')
      .createHmac('md5', global_.SecrectKey)
      .update(baseString)
      .digest())

    return axios({
      method: "post",
      url: global_.BaseUrl + "/auth/signin",
      data: {
        'userName': username,
        'password': pwd
      },
      headers: {
        'content-type': 'application/json',
        'Authorization': Signture,
        'X-Date': timeStamp,
      }
    })
  },

}

export default auth;
