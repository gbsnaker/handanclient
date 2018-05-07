import { stringify } from 'qs';
import request from '../utils/request';

const options = {
  Accept: 'application/json',
  'Content-Type': 'application/json; charset=utf-8',
}


export async function fetchPeopleList() {
  return request('/eve/people', options);
}

export async function fetchPeople(params) {
  return request(`/eve/people?${stringify(params)}`);
}

