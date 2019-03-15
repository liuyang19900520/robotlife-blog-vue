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

// export default new Router({
//   mode: 'history',
//   routes: [{
//       path: 'http://liuyang19900520.com/mobile/error',
//       name: 'phone',
//       components: {
//         root: Phone
//       }
//     }, {
//       path: 'http://liuyang19900520.com/signin',
//       name: 'auth',
//       components: {
//         root: Auth
//       }
//     }, {
//       path: 'http://liuyang19900520.com/admin',
//       name: 'admin',
//       components: {
//         root: Admin
//       },
//       children: [{
//         path: 'http://liuyang19900520.com/admin/blogs',
//         name: 'AdminBlogs',
//         components: {
//           admin: AdminBlogs

//         }
//       }, {
//         path: 'http://liuyang19900520.com/admin/blogs/new',
//         name: 'AdminEditPanel',
//         components: {
//           admin: AdminEditPanel

//         }
//       }, {
//         path: 'http://liuyang19900520.com/admin/blogs/:blogId',
//         name: 'AdminEditPanel',
//         components: {
//           admin: AdminEditPanel
//         }
//       }]
//     },
//     {
//       path: 'http://liuyang19900520.com/',
//       name: 'front',
//       components: {
//         root: Front
//       },
//       children: [{
//         path: 'http://liuyang19900520.com/blogs',
//         name: 'FrontBlogCard',
//         components: {
//           front: FrontBlogCard
//         }
//       }, {
//         path: 'http://liuyang19900520.com/blogs/:blogId',
//         name: 'FrontBlogDetail',
//         components: {
//           front: FrontBlogDetail
//         }
//       }, {
//         path: '',
//         redirect: 'http://liuyang19900520.com/blogs'
//       }]
//     }
//   ]
// })


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
