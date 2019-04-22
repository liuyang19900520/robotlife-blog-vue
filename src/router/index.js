import Vue from 'vue'
import Router from 'vue-router'
import Auth from '@/components/Auth'
import Front from '@/components/Front'
import FrontBlogCard from '@/components/FrontBlogCard'
import FrontBlogDetail from '@/components/FrontBlogDetail'
import Admin from '@/components/Admin'
import AdminEditPanel from '@/components/AdminEditPanel'
import AdminBlogs from '@/components/AdminBlogs'
import Phone from '@/components/PhoneFrontError'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/mobile/error',
      name: 'phone',
      components: {
        root: Phone
      }
    }, {
      path: '/signin',
      name: 'auth',
      components: {
        root: Auth
      }
    }, {
      path: '/admin',
      name: 'admin',
      components: {
        root: Admin
      },
      children: [{
        path: '/admin/blogs',
        name: 'AdminBlogs',
        components: {
          admin: AdminBlogs

        }
      }, {
        path: '/admin/blogs/new',
        name: 'AdminEditPanel',
        components: {
          admin: AdminEditPanel

        }
      }, {
        path: '/admin/blogs/:blogId',
        name: 'AdminEditPanel',
        components: {
          admin: AdminEditPanel
        }
      }]
    },
    {
      path: '/',
      name: 'front',
      components: {
        root: Front
      },
      children: [{
        path: '/blogs',
        name: 'FrontBlogCard',
        components: {
          front: FrontBlogCard
        }
      }, {
        path: '/blogs/:blogId',
        name: 'FrontBlogDetail',
        components: {
          front: FrontBlogDetail
        }
      }, {
        path: '',
        redirect: '/blogs'
      }]
    }
  ]
})
