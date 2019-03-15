<template>
  <div class="admin-head-nav">
    <el-menu class="el-menu-demo" mode="horizontal">

      <el-menu-item index="1">
        <router-link to="/blogs" replace:true> Blog </router-link>
      </el-menu-item>

      <el-menu-item index="2">
        <router-link to="/admin/blogs/new" replace:true> Write Blog </router-link>
      </el-menu-item>

    </el-menu>
  </div>
</template>


<script>
  export default {
    name: 'AdminHeadNav'
  }

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .router-link-active {
    text-decoration: none;
  }

  a {
    text-decoration: none;
    color: gray
  }

</style>
