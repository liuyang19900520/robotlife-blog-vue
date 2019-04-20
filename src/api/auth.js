/**
 * article模块接口列表
 */

import base from './base'; // 导入接口域名列表
import axios from '@/util/http'; // 导入http中创建的axios实例
import qs from 'qs'; // 根据需求是否导入qs模块




const auth = {
  signIn(username, pwd) {

    var timeStamp = new Date().getTime().toString();
    console.log(timeStamp)
    var clientKey = this.username;
    var baseString = clientKey + timeStamp;
    var x = require('crypto')

    var Signture = require('crypto')
      .createHmac('md5', global_.SecrectKey)
      .update(baseString)
      .digest()
      .toString('base64');

    console.log(Signture)

    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'Authorization': Signture,
        'X-Date': timeStamp,
      },
      data: qs.stringify({
        'username': username,
        'password': pwd
      }),
      url: base.bd + "/auth/signin"
    };

    return axios.post(options);
  },

}

export default auth;
