/**
 * article模块接口列表
 */
import global from '@/config/Global'
import axios from '@/util/http'; // 导入http中创建的axios实例
import qs from 'qs'; // 根据需求是否导入qs模块

const category = {
  // 新闻列表    
  categories() {
    return axios.get(global.BaseUrl + "/categories");
  },

  getTitlesInCate(categoryId) {
    return axios.get(global.BaseUrl + "/categories/" + categoryId);
  }

}

export default category;
