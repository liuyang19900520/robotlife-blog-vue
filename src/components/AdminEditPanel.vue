<template>
  <div id="app">
    <input type="hidden" v-model="blogId">

    <el-input placeholder="请输入标题" v-model="blogTitle" clearable></el-input>

    <el-select v-model="blogCategory" clearable placeholder="请选择目录">
      <el-option
        v-for="item in options"
        :key="item.categoryId"
        :label="item.categoryContent"
        :value="item.categoryId"
      ></el-option>
    </el-select>

    <el-select v-model="blogTopic" clearable placeholder="请选择专题">
      <el-option
        v-for="item in topics"
        :key="item.topicId"
        :label="item.topicContent"
        :value="item.topicId"
      ></el-option>
    </el-select>

    <div>
      <el-tag
        :key="tag"
        v-for="tag in dynamicTags"
        closable
        :disable-transitions="false"
        @close="handleClose(tag)"
      >{{tag}}</el-tag>
      <el-input
        class="input-new-tag"
        v-if="inputVisible"
        v-model="inputValue"
        ref="saveTagInput"
        size="small"
        @keyup.enter.native="handleInputConfirm"
        @blur="handleInputConfirm"
      ></el-input>
      <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
    </div>

    <mavon-editor ref="md" id="edt-blog" v-model="blogContent" :ishljs="true" @imgAdd="$imgAdd"/>

    <el-button round @click="addBlog">ADD</el-button>
    <el-button round @click="addTempBlog">ADD Temp</el-button>
  </div>
</template>

<script>
export default {
  name: "AdminEditPanel",
  data() {
    return {
      blogId: "",
      blogTitle: "",
      blogContent: "",
      tags: "",
      blogCategory: "",
      blogTopic: "",

      options: "",
      dynamicTags: ["标签一", "标签二", "标签三"],
      inputVisible: false,
      inputValue: "",
      tagArray: [],
      blogTitles: [],
      tempBlog: "",
      topics: []
    };
  },
  methods: {
    addBlog() {
      this.tags = this.dynamicTags.join(",");
      var JSONObj = {
        blogId: this.blogId,
        blogTitle: this.blogTitle,
        blogContent: this.blogContent,
        tags: this.tags,
        categoryId: this.blogCategory,
        topicId: this.blogTopic
      };
      this.$api.blog.addBlog(JSONObj).then(res => {
        this.$router.push({
          path: "/admin"
        });
      });
    },

    addTempBlog() {
      this.tags = this.dynamicTags.join(",");
      var JSONObj = {
        blogId: this.blogId,
        blogTitle: this.blogTitle,
        blogContent: this.blogContent,
        tags: this.tags,
        categoryId: this.blogCategory,
        topicId: this.blogTopic
      };
      this.$api.blog.addTempBlog(JSONObj).then(res => {
        this.$router.push({
          path: "/admin"
        });
      });
    },

    listTopics() {
      this.$api.topic.topics().then(response => {
        //注意this指向
        this.topics = response.data;
      });
    },

    listCategories() {
      this.$api.category.categories().then(res => {
        this.options = res.data;
      });
    },

    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    },

    showInput() {
      this.inputVisible = true;
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },

    handleInputConfirm() {
      let inputValue = this.inputValue;
      if (inputValue) {
        this.dynamicTags.push(inputValue);
      }
      this.inputVisible = false;
      this.inputValue = "";
    },

    $imgAdd(pos, $file) {
      this.$api.blog.uploadImg(pos, $file).then(res => {
        imageUrl = response.body.data;
        this.$refs.md.$img2Url(pos, imageUrl);
      });
    },

    getBlog(key) {
      this.$api.blog.tempBlogById(key).then(res => {
        alert(JSON.stringify(res.data));
        if (res.data != null && res.data != "") {
          this.blogTitle = res.data.blogTitle;
          this.blogContent = res.data.blogContent;
          this.blogCategory = res.data.categoryId;
          this.dynamicTags = res.data.tags.split(",");
          this.blogId = res.data.blogId;
          this.blogTopic = res.data.topicId;
        } else {
          this.$api.blog.blogById(key).then(res => {
            alert(JSON.stringify(res));
            this.blogTitle = res.data.blogTitle;
            this.blogContent = res.data.blogContent;
            this.blogCategory = res.data.categoryId;
            this.dynamicTags = res.data.tags.split(",");
            this.blogId = res.data.blogId;
            this.blogTopic = res.data.topicId;
          });
        }
      });
    },
    getTempBlog(key) {
      this.$api.blog.tempBlogById(key).then(res => {
        this.blog = res.data;
        this.blogTitle = res.data.blogTitle;
        this.blogContent = res.data.blogContent;
        this.blogCategory = res.data.categoryId;
        this.dynamicTags = res.data.tags.split(",");
        this.blogId = res.data.blogId;
        this.blogTopic = res.data.topicId;
      });
    }
  },
  mounted: function() {
    this.listCategories();
    this.listTopics();

    if (this.$route.params.blogId != null) {
      this.getBlog(this.$route.params.blogId);
    }
  }
};
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.header-left {
  float: left;
}

.header-right {
  float: right;
}

.container {
  margin-top: 1%;
}

td {
  vertical-align: middle;
  text-align: center;
}

.el-tag + .el-tag {
  margin-left: 10px;
}

.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}

.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}

.item-template {
  align-self: left;
  align-content: left;
  align-items: left;
  text-align: left;
}
</style>
