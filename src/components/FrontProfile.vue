<template>
  <div id="profile">

    <img class="circular-square" src="../assets/icon.jpg">
    <div style="padding: 14px;">
      <h3>LiuYang</h3>
      <h6>{{msg}}</h6>
    </div>

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
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #profile {
    width: 100%
  }

  span {
    align-self: left;
    align-content: left;
    align-items: left;
    text-align: left;
    font-size:1ex;
  }

  .circular-square {
    border-radius: 50%;
  }

  img {
    margin-left: 20%;
    width: 60%;
    height: auto;
    max-width: 60%;
    display: block;
  }

</style>
