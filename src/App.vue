<template>
  <div id="app">
    <router-view name="root" :key="key">1234</router-view>
  </div>
</template>

<script>
  export default {
    name: 'App',
    methods: {
      _isMobile() {
        let flag = navigator.userAgent.match(
          /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
        )
        return flag;
      }
    },
    computed: {
      key() {
        return this.$route.name !== undefined ? this.$route.name + new Date() : this.$route + new Date();
      }
    },
    mounted: function () {
      if (this._isMobile()) {
        alert("手机端");
        this.$router.replace('/mobile/error');
      } else {
        alert("pc端");
        this.$router.replace('/blogs');
      }
    }
  }

</script>

<script type="text/javascript">
  var cnzz_protocol = (("https:" == document.location.protocol) ? " https://" : " http://");
  document.write(unescape("%3Cspan  style='display:none;' id='cnzz_stat_icon_1274329467'%3E%3C/span%3E%3Cscript src='" +
    cnzz_protocol +
    "s13.cnzz.com/z_stat.php%3Fid%3D1274329467' type='text/javascript'%3E%3C/script%3E"));

</script>



<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
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
    margin-top: 1%
  }


  td {
    vertical-align: middle;
    text-align: center;
  }

</style>
