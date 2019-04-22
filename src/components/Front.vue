<template>
  <div id="app">
    <el-container>
      <el-header>
        <div class="header-left">
          <table>
            <td>
              <img style="height:60px;width:auto" src="../assets/robot.png">
            </td>
            <td>
              <h2>RobotLife</h2>
            </td>
          </table>
        </div>
        <div class="header-right">
          <v-head-nav></v-head-nav>
        </div>
      </el-header>
      <hr>
      <el-container class="container">
        <el-aside width="22%" id="side">
          <v-profile></v-profile>
          <v-side-nav></v-side-nav>
        </el-aside>

        <el-main id="main">
          <router-view name="front" :key="key"></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Profile from "@/components/FrontProfile";
import SideNav from "@/components/FrontSideNav";
import BlogCard from "@/components/FrontBlogCard";
import BlogDetail from "../components/FrontBlogDetail.vue";
import HeadNav from "../components/FrontHeadNav.vue";
export default {
  name: "Front",
  components: {
    /*前面的组件名称不能和html标签一样*/
    "v-profile": Profile,
    "v-side-nav": SideNav,
    "v-blog-card": BlogCard,
    "v-blog-detail": BlogDetail,
    "v-head-nav": HeadNav
  },
  methods: {
    _isMobile() {
      let flag = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      );
      return flag;
    }
  },
  computed: {
    key() {
      return this.$route.name !== undefined
        ? this.$route.name + new Date()
        : this.$route + new Date();
    }
  },
  mounted: function() {
    if (this._isMobile()) {
      this.$router.replace("/mobile/error");
    } else {
      this.$router.replace("/blogs");
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

.router-link-active {
  text-decoration: none;
}
</style>
