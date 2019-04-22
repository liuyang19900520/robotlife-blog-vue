import axios from '@/util/http'; // 导入http中创建的axios实例
import qs from 'qs'; // 根据需求是否导入qs模块
import global from '@/config/Global'

const blog = {
  // 新闻列表    
  blogs(pageNo, rows, topicId) {

    if (topicId != null) {
      var data = qs.stringify({
        'pageNo': pageNo,
        'rows': rows,
        "topicId": topicId
      })
      return axios.post(global.BaseUrl + "/blogs/page", data);
    } else {
      var initData = qs.stringify({
        'pageNo': pageNo,
        'rows': rows
      })
      return axios.post(global.BaseUrl + "/blogs/page", initData);

    }




  },

  blogById(blogId) {
    return axios.get(global.BaseUrl + "/blogs/" + blogId);
  },

}

export default blog;
