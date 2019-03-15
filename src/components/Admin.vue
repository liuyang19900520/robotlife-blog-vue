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
        <el-aside width="17%" id="side">
          <v-side-nav></v-side-nav>
        </el-aside>
        <el-main id="main">
          <router-view :key="key" name="admin"></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import global_ from "@/config/Global";
import HeadNav from "../components/AdminHeadNav.vue";
import AdminSideNav from "@/components/AdminSideNav";
import storage from "../model/storage.js";

export default {
  components: {
    "v-head-nav": HeadNav,
    "v-side-nav": AdminSideNav
  },
  name: "Admin",
  data: { user: null },
  mounted: function() {
    var api = global_.BaseUrl + "/admin/index";
    this.$http.get(api).then(
      response => {
        // alert(JSON.stringify(response))
        if (response.body.ret != "0") {
          this.$router.push({
            path: "/signin"
          });
        } else {
          this.user = storage.get("user");
          console.log("第一个user", this.user);
          console.log("第一个user token", this.user.token);
          console.log("response===========  user data",  response.body.data);
        
          storage.set("user", response.body.data);
        }
      },
      function(err) {
        alert("失败");
      }
    );
  },
  computed: {
    key() {
      return this.$route.name !== undefined
        ? this.$route.name + +new Date()
        : this.$route + +new Date();
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
