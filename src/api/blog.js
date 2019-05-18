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

  tempBlogs() {
    return axios.get(global.BaseUrl + "/admin/blogs/temp");
  },

  blogById(blogId) {
    return axios.get(global.BaseUrl + "/blogs/" + blogId);
  },

  tempBlogById(blogId) {
    return axios.get(global.BaseUrl + "/admin/blogs/temp/" + blogId);
  },


  addBlog(JSONObj) {
    var data = qs.stringify(JSONObj)
    return axios.post(global.BaseUrl + "/admin/blogs", data);
  },

  addTempBlog(JSONObj) {
    var data = qs.stringify(JSONObj)
    return axios.post(global.BaseUrl + "/admin/blogs/temp", data);
  },


  uploadImg(pos, $file) {
    var formdata = new FormData();
    formdata.append("image", $file);
    return axios({
      url: global.BaseUrl + "/images/uploadimage",
      method: 'post',
      data: formdata,
      headers: {
        'Content-Type': 'multipart/form-data'
      },
    });

  }

}

export default blog;
