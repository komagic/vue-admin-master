/**
 * Created by btx on 2017/3/23.
 *
 * 自定义插件
 *
 * @author: btx
 * @github: https://github.com/btx
 * @email: 910367438@qq.com
 * @Date: 2017/3/23 18:29
 * @Copyright(©) 2017 by btx.
 *
 */
import dateFormat from 'plugins/date'

const install = function (Vue) {
  if (install.installed) return
  install.installed = true

  //定义属性到Vue原型中
  Object.defineProperties(Vue.prototype, {
    $dateFormat: {
      get() {
        return dateFormat
      }
    }
  })
}

export default {
  install
}
