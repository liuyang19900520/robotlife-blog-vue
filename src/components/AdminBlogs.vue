<template>
  <div class="blogList">
    <table style="width:100%" v-for="blog in blogs" :key="blog.blogId">
      <td style="width:30%">
        <router-link :to="'/admin/blogs/'+blog.blogId" replace:true exact>
          <h6>{{blog.blogTitle}}</h6>
        </router-link>
      </td>
      <td>
        <h6>{{blog.updateAt}}</h6>
      </td>
      <td>
        <h6>delete</h6>
      </td>
    </table>

    <el-pagination
      layout="prev, pager, next"
      :page-size="2"
      :page-count="pageTotal"
      @current-change="listBlogs"
    ></el-pagination>
  </div>
</template>

<script>
import VueMarkdown from "vue-markdown";
import global_ from "@/config/Global";
import VueEventBus from "../model/VueEventBus.js";
export default {
  name: "BlogCard",
  components: {
    VueMarkdown
  },
  data() {
    return {
      pageNo: 1,
      rows: 25,
      tagTypes: ["", "success", "info", "warning", "danger"],
      blogs: [],
      pageTotal: ""
    };
  },
  methods: {
    handleSelect() {},
    listBlogs(currentPage, topicId) {
      this.$api.blog.blogs(this.pageNo, this.rows, topicId).then(res => {
        this.blogs = res.data.data;
        this.pageTotal = res.data.pagesTotal;
      });
    }
  },
  mounted: function() {
    this.listBlogs();
    var self = this;
    VueEventBus.$on("topic-bolg-list", function(topicId) {
      self.listBlogs(1, topicId);
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.blogList {
  margin-bottom: 1%;
}

h2 {
  margin-top: 1%;
  margin-bottom: 0px;
  text-align: left;
  padding: 0px;
}

table {
  margin-top: 0%;
}

td {
  text-align: left;
  margin-left: 5%;
  margin-right: 5%;
}

.tag-left {
  text-align: left;
}

.tag-right {
  text-align: right;
}

.el-tag {
  margin-right: 1%;
}

.content {
  text-align: left;
  margin-left: 3%;
  margin-right: 3%;
  margin-bottom: 6%;
}

.router-link-active {
  text-decoration: none;
}
</style>
