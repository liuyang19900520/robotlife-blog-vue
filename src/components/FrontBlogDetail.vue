<template>
  <div class="blogList">
    <div class="blogCard">
      <h2>{{blog.blogTitle}}</h2>
      <table style="width:100%">
        <td class="tag-left">
          <el-tag class="el-tag" v-for="(tag,index) in addTags(blog.tags)" :key="tag" v-bind:type="tagTypes[index]">{{tag}}</el-tag>
        </td>
        <td>
          <h6 class="tag-right">{{blog.createAt}}</h6>
        </td>
      </table>
      <div class="content">
        <vue-markdown :source="blog.blogContent" v-highlight></vue-markdown>
      </div>
      <div class="comments">
        <vue-disqus shortname='robotlife' v-bind:identifier='blog.blogId' v-bind:title='blog.blogTitle' v-bind:url='urlDisqus'
          ref="dataNum"> </vue-disqus>
      </div>
    </div>
  </div>
</template>
<script>
  import VueMarkdown from 'vue-markdown'
  import VueEventBus from '../model/VueEventBus.js';
  import global_ from '@/config/Global';
  export default {
    data() {
      return {
        tagTypes: ["", "success", "info", "warning", "danger"],
        blog: '',
        urlDisqus: 'http://liuyang19900520.com' + this.$route.path
      }
    },
    components: {
      VueMarkdown
    },
    methods: {
      getBlog(key) {
        var api = global_.BaseUrl + '/blogs/' + key;
        this.$http.get(api).then((response) => {
          this.blog = response.body

        }, function (err) {
          alert("失败")
        })
      },
      addTags(tagsString) {
        var tagsArray = tagsString.split(",");
        return tagsArray
      }
    },

    mounted: function () {

      this.getBlog(this.$route.params.blogId)



    },
    updated: function () {
        // alert(this.$refs.dataNum.url)
    }
    // updated: function () {

    //   var disqus_config = function () {
    //     this.page.url = 'http://liuyang19900520.com'; // Replace PAGE_URL with your page's canonical URL variable
    //     this.page.identifier = this.$route.params.blogId; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    //   };

    //   (function () { // DON'T EDIT BELOW THIS LINE
    //     var d = document,
    //       s = d.createElement('script');
    //     s.src = 'https://liuyang19900520.disqus.com/embed.js';
    //     s.setAttribute('data-timestamp', +new Date());
    //     (d.head || d.body).appendChild(s);
    //   })();


    // }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .blogList {
    margin-bottom: 7%;
  }

  .comment {

    vertical-align: left;
    text-align: left;
  }

  h2 {
    margin-top: 0px;
    text-align: left;
    padding: 0%;
  }

  .tag-left {
    text-align: left
  }

  .tag-right {
    text-align: right;
  }

  td {
    vertical-align: middle;
  }

  .el-tag {
    margin-right: 1%
  }

  .content {
    text-align: left;
    margin-left: 3%;
    margin-right: 3%;
    margin-bottom: 6%
  }

  .router-link-active {
    text-decoration: none;
  }

  .content>>>img {
    width: 65%;
    height: auto;
    max-width: 65%;
  }

</style>
