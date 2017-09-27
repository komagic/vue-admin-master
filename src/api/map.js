import fetch from 'common/fetch'
import { port_province } from 'common/port_uri';

export function getMap(params) {
    return fetch({
      url: '/static/黑龙江省.json',
      method: 'get',
      params
    })
  }