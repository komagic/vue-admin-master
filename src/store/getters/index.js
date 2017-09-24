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

import * as type from 'store/getters/type'

export default {
  //获取用户信息
  [type.GET_USER_INFO]: state => {
    return state.user_info
  }
}
