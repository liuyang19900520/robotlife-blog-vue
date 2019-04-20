<template>
  <div class="hello">
    <el-menu class="el-menu-demo" mode="horizontal">

      <el-menu-item index="1">
        <!--添加flushCom方法-->
        <router-link to="/blogs" replace:true @click.native="flushCom">Blog </router-link>
      </el-menu-item>

      <el-submenu index="2">
        <template slot="title">Topic</template>
        <el-menu-item v-for="(item, index) in topics" :key="item.topicId" v-bind:index="'2-' + item.topicId.toString()"
          @click="listTopicsBlog(item.topicId)">
          <!-- <router-link :to="'/tpoics/'+item.topicId" replace:true exact>{{item.topicContent}}</router-link> -->
          {{item.topicContent}}
        </el-menu-item>
      </el-submenu> 
      <el-menu-item index="3">
        <div v-if="user===null">
          <router-link to="/signin" replace:true @click.native="flushCom">Sign In</router-link>
        </div>
        <div v-else id="div-avatar">
          <img id="img-avatar" v-bind:src="user.avatar" @click="goAdmin()">
        </div>

      </el-menu-item>
    </el-menu>
  </div>
</template>


<script>
  import global_ from '@/config/Global'
  import storage from '../model/storage.js';
  //导入eventBus
  import VueEventBus from '../model/VueEventBus.js';
  export default {
    name: 'Front',
    data() {
      return {
        pageNo: 1,
        rows: 2,
        blogs: [],
        pageTotal: '',
        topics: [],
        user: ''
      }
    },
    methods: {
      listTopics() {
        var api = global_.BaseUrl + '/topics';
        this.$http.get(api).then((response) => {
          //注意this指向
          this.topics = response.body
        }, function (err) {
          console.log(err);
        })
      },
      listTopicsBlog(topicId) {
        //发射广播
        VueEventBus.$emit('topic-bolg-list', topicId)
      },
      flushCom: function () {
        //router是路由实例,例如:var router = new Router({})
        //router.go(n)是路由的一个方法，意思是在history记录中前进或者后退多少步，0就表示还是当前，类似window.history.go(n)
        this.$router.go(0);
      },
      goAdmin() {
        this.$router.push({
          path: '/admin'
        })
      }
    },
    mounted: function () {
      this.listTopics()
      this.user = storage.get('user')
    }

  }

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .side-nav {
    width: 100%;

  }

  span {
    font-weight: bold;
    margin: 1%;
    margin-left: 2%
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
    color: gray
  }


  #img-avatar {
    height: 45px;
    width: 45px;
    border-radius: 50%;
  }

  #div-avatar {
    width: 50px
  }

</style>
