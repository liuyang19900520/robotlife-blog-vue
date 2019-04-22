/**
 * article模块接口列表
 */
import global from '@/config/Global'
import axios from '@/util/http'; // 导入http中创建的axios实例
import qs from 'qs'; // 根据需求是否导入qs模块

const topic = {
  // 新闻列表    
  topics() {
    return axios.get(global.BaseUrl + "/topics");
  },

  getBlogsInTop(topicId) {
    return axios.post(global.BaseUrl + "/topics/" + topicId);
  }

}

export default topic;
