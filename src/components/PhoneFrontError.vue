<template>
  <div>
    <img id="error-page" src="../assets/404phone.png">
  </div>
</template>

<script>
  export default {
    name: 'Profile',
    data() {
      return {
        msg: '不知道我算不算一个合格的程序员',
        github: "github:https://github.com/liuyang19900520"
      }
    },
    mounted: function () {
      alert("居然还想用手机看！我会让你得逞么")
    }
  }

</script>
<style>
  #error-page {
    width: 100%;
    height: auto;
    max-width: 100%;
    display: block;
  }

</style>
