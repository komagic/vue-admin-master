import fetch from 'common/fetch'
import {port_province} from 'common/port_uri';

export function hlj(params) {
    return fetch({
      url: port_province.hlj,
      method: 'get',
      params
    })
  }