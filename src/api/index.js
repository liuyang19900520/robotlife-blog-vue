/** 
 * api接口的统一出口
 */
// 文章模块接口
import category from '@/api/category';
import blog from '@/api/blog';
import topic from '@/api/topic';
import auth from '@/api/auth';
import admin from '@/api/admin';

// 导出接口
export default {
  category,
  blog,
  topic,
  auth,
  admin
}
