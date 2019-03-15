<template>
  <div id="auth">
    <el-card id="card-auth" class="box-card">
      <el-input placeholder="邮箱" v-model="username" clearable></el-input>
      <el-input placeholder="密码" v-model="password" type="password" clearable></el-input>
      <button @click="signIn()">登陆</button>
    </el-card>
  </div>
</template>

<script>
  import global_ from '@/config/Global'
  import storage from '../model/storage.js';
  export default {
    name: 'Profile',
    data() {
      return {
        msg: '不知道我算不算一个合格的程序员',
        github: "github:https://github.com/liuyang19900520",
        username: '',
        password: ''
      }
    },
    methods: {
      signIn() {
        var timeStamp = new Date().getTime().toString();
        console.log(timeStamp)
        var clientKey = this.username;
        var baseString = clientKey + timeStamp;
        var x = require('crypto')

        var Signture = require('crypto')
          .createHmac('md5', global_.SecrectKey)
          .update(baseString)
          .digest()
          .toString('base64');

        console.log(Signture)


        var api = global_.BaseUrl + '/auth/signin';

        var JSONObj = {
          'userName': this.username,
          'password': this.password
        };

        this.$http.post(api, JSON.stringify(JSONObj), {
          headers: {
            'Authorization': Signture,
            'X-Date': timeStamp,
            'token': ''
          }
        }, {
          emulateJSON: true
        }).then((response) => {
          // alert(JSON.stringify(response))
          if (response.body.ret == '0') {
            storage.set('user', response.body.data);
            this.$router.push({
              path: '/'
            })
          } else {
            alert("Sign In failed. the reason is  " + response.body.data.msg)
          }

        }, function (err) {
          alert("失败")
        })



      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #card-auth {
    margin-left: 35%;
    width: 30%;
    margin-top: 20%;
    height: auto;
    max-width: 30%;
    display: block;
  }

</style>
