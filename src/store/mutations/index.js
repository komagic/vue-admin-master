/**
 * Created by btx on 2017/3/21.
 *
 * @author: btx
 * @github: https://github.com/btx
 * @email: 910367438@qq.com
 * @Date: 2017/3/21 16:04
 * @Copyright(©) 2017 by btx.
 *
 */
import * as type from 'store/mutations/type'
import {cookieStorage} from 'common/storage'

export default {
  //设置用户信息和是否登录
  [type.SET_USER_INFO](state, userinfo){
    state.user_info = userinfo || {}
    if (userinfo === null) {
      cookieStorage.remove('user_info')
    } else {
      cookieStorage.set('user_info', userinfo)
    }
  }
}
