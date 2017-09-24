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

import * as actions from 'store/actions/type'
import * as mutations from 'store/mutations/type'

export default {
  //设置用户信息和登录
  [actions.SET_USER_INFO]({commit}, userinfo){
    commit(mutations.SET_USER_INFO, userinfo)
  }
}
