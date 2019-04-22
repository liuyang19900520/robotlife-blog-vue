/**
 * article模块接口列表
 */

import global from '@/config/Global'; // 导入接口域名列表
import axios from '@/util/http'; // 导入http中创建的axios实例
import qs from 'qs'; // 根据需求是否导入qs模块


const admin = {
  adminIndex() {
    return axios.get(global.BaseUrl + "/admin/index");
  },
}

export default admin;
