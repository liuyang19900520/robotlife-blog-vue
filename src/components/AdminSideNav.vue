<template>
  <div class="admin-side-nav">
    <el-row class="tac" style="width:100%">
      <el-col :span="24" style="width:100%">
        <div class="item-template">
          <el-menu class="el-menu-vertical-demo" @open="openTempBlogMenu" @close="closeTempBlogMenu" unique-opened>
            <el-submenu index="1">
              <template slot="title">
                <span>Temp Blogs</span>
              </template>
              <el-menu-item v-for="(item, index) in blogTitles" :key="item.blogId" v-bind:index="'1-'+item.blogId.toString()">
                <router-link :to="'/admin/blogs/'+item.blogId" replace:true exact>
                  <h6>{{item.blogTitle}}</h6>
                </router-link>
              </el-menu-item>
            </el-submenu>
            <el-menu-item index="2">
              <router-link to="/admin/blogs" replace:true>
                <span>Blog List</span>
              </router-link>

            </el-menu-item>
          </el-menu>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import VueEventBus from '../model/VueEventBus.js';
  import global_ from '@/config/Global'
  export default {
    name: 'SideNav',
    data() {
      return {
        categories: [],
        blogTitles: []

      }
    },
    methods: {
      openTempBlogMenu(key, keyPath) {
        var api = global_.BaseUrl + '/admin/blogs/temp';
        this.$http.get(api).then((response) => {
          this.blogTitles = response.body
        }, function (err) {})
      },

      closeTempBlogMenu(key, keyPath) {
        this.blogTitles = [];
      }


    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  span {
    font-weight: bold;
    margin: 1%;
    margin-left: 2%;
    color: gray
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
