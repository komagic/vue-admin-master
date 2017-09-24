/**
 * Created by btx on 2017/3/21.
 *
 * @author: btx
 * @github: https://github.com/btx
 * @email: 910367438@qq.com
 * @Date: 2017/3/21 10:55
 * @Copyright(©) 2017 by btx.
 *
 */

import Mock from 'mockjs'
import {port_code, port_user} from 'common/port_uri'

Mock.mock(new RegExp(port_user.login), ({body}) => {
  const {username, password} = JSON.parse(body)
  if (username === 'admin' && password === 'admin') {
    return Mock.mock({
      code: port_code.success,
      msg: "登录成功",
      data: {
        'name': '@cname',
        'avatar': 'http://img3.imgtn.bdimg.com/it/u=3335886899,4133972180&fm=27&gp=0.jpg',
        'age|20-25': 20,
        'desc': '@csentence()'
      }
    })
  } else {
    return Mock.mock({
      code: port_code.error,
      msg: "账号或密码错误"
    })
  }
})

Mock.mock(new RegExp(port_user.logout), {
  code: port_code.success,
  msg: "退出成功"
})
