<template>
  <div class="blogList" ref='blogRef'>
    <div class="blogCard" v-for="blog in blogs" :key="blog.blogId">
      <router-link :to="'/blogs/'+blog.blogId" replace:true exact>
        <h2>{{blog.blogTitle}}</h2>
      </router-link>
      <table style="width:100%">
        <td class="tag-left">
          <el-tag class="el-tag" v-for="(tag,index) in addTags(blog.tags)" :key="tag" v-bind:type="tagTypes[index]">{{tag}}</el-tag>
        </td>
        <td>
          <h6 class="tag-right">{{blog.updateAt}}</h6>
        </td>
      </table>
      <!-- <span v-html="blog.blogHtml"></span> -->
      <div class="content">
        <!-- {{blog.blogContent}} -->
        <vue-markdown v-highlight>{{blog.blogContent}}</vue-markdown>
      </div>


    </div>
    <el-pagination layout="prev, pager, next" :page-size="2" :page-count="pageTotal" @current-change=listBlogs>
    </el-pagination>

  </div>

</template>
<script>
  import VueMarkdown from 'vue-markdown'
  import global_ from '@/config/Global'
  import VueEventBus from '../model/VueEventBus.js';
  export default {
    name: 'BlogCard',
    components: {
      VueMarkdown
    },
    data() {
      return {
        pageNo: 1,
        rows: 6,
        tagTypes: ["", "success", "info", "warning", "danger"],
        blogs: [],
        pageTotal: ''

      }
    },
    methods: {
      handleSelect() {},
      listBlogs(currentPage, topicId) {
        var api = global_.BaseUrl + '/blogs/page';
        var data = new FormData()
        if (currentPage != null) {
          this.pageNo = currentPage;
        }
        if (topicId != null) {
          data.set('topicId', topicId);
        }
        data.set('pageNo', this.pageNo);
        data.set('rows', this.rows);
        this.$http.post(api, data).then((response) => {
          this.blogs = response.body.data
          this.pageTotal = response.body.pagesTotal
        }, function (err) {
          alert("加载博客列表失败")
        })
      },
      addTags(tagsString) {
        var tagsArray = tagsString.split(",");
        return tagsArray
      },
      getSummary(contentString) {
        var summary = contentString.substring(0, 100);
        return summary
      }

    },
    mounted: function () {
      this.listBlogs();
      //获取到该对象，否则在监听的方法内部无法调用this的方法
      var self = this
      VueEventBus.$on('topic-bolg-list', function (topicId) {
        self.listBlogs(1, topicId)
      })

    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .blogList {
    margin-bottom: 17%;
  }

  h2 {
    margin-top: 1%;
    margin-bottom: 0px;
    text-align: left;
    padding: 0px;

  }

  table {
    margin-top: 0%;
    margin-bottom: -2%;
    padding: 0%
  }

  .tag-left {
    text-align: left;
    text-decoration: none;
  }

  .tag-right {
    margin-right: 2%;
    text-align: right;
    text-decoration: none;
    color: black;
  }

  td {
    margin: 0%;
    padding: 0%;
    vertical-align: middle;
  }

  .el-tag {
    margin-right: 1%
  }

  .content {
    margin-top: 1%;
    text-align: left;
    margin-left: 1%;
    margin-right: 1%;
    margin-bottom: 6%;
  }

  .router-link-active {
    text-decoration: none;
  }

  a {
    text-decoration: none;
    color: blue
  }

  .content>>>img {
    width: 65%;
    height: auto;
    max-width: 65%;
  }

</style>
