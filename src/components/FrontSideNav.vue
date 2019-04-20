<template>
  <div class="hello">
    <el-row class="tac" style="width:100%">
      <el-col :span="24" style="width:100%">
        <div class="item-template">
          <el-menu
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            unique-opened
          >
            <el-submenu
              v-for="(item, index) in categories"
              :key="item.categoryId"
              v-bind:index="item.categoryId.toString()"
            >
              <template slot="title">
                <span>{{item.categoryContent}}</span>
              </template>

              <el-menu-item
                v-for="(item, index) in blogTitles"
                :key="item.blogId"
                v-bind:index="item.blogId.toString()"
              >
                <router-link :to="'/blogs/'+item.blogId" replace:true exact>{{item.blogTitle}}</router-link>
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import VueEventBus from "../model/VueEventBus.js";
import global_ from "@/config/Global";
export default {
  name: "SideNav",
  data() {
    return {
      categories: [],
      blogTitles: []
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      var api = global_.BaseUrl + "/categories/" + key;
      this.$http.get(api).then(
        response => {
          console.log(response);
          this.blogTitles = response.body;
          console.log(this.blogTitles);
        },
        function(err) {
          console.log(err);
        }
      );
    },
    handleClose(key, keyPath) {
      blogTitles = [];
    },
    listCategories() {
      console.log(this.$api.category);
      this.$api.category.categories().then(res => {
        this.categories = res.data;
      });
    },
    findBlog(blogId) {
      VueEvent.$emit("find-blog", blogId);
    }
  },
  mounted: function() {
    this.listCategories();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.side-nav {
  width: 100%;
}

span {
  font-weight: bold;
  margin: 1%;
  margin-left: 2%;
}

.item-template {
  align-self: left;
  align-content: left;
  align-items: left;
  text-align: left;
}

.router-link-active {
  text-decoration: none;
}

a {
  text-decoration: none;
  color: gray;
  font-size: 8px;
}
</style>
