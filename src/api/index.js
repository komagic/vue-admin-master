/**
 * @file: index.
 * @intro: api请求索引.
 * @author: btx.
 * @email: 910367438@qq.com.
 * @Date: 2017/5/8 15:31.
 * @Copyright(©) 2017 by btx.
 *
 */

//导入模块
import * as api_file from './file'
import * as api_table from './table'
import * as api_user from './user'

const apiObj = {
  api_file,
  api_table,
  api_user
}

const install = function (Vue) {
  if (install.installed) return
  install.installed = true

  //定义属性到Vue原型中
  Object.defineProperties(Vue.prototype, {
    $fetch: {
      get() {
        return apiObj
      }
    }
  })
}

export default {
  install
}
