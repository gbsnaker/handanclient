import { fetchPeopleList, fetchPeople  } from "../services/test";

export default {
  namespace: 'test',
  state: {
    'peoples': [],
  },
  effects: {
    *fetchList(_, {call, put}){
      const response = yield call(fetchPeopleList);
      yield put({
        type: 'save',
        payload: response,
      })
    },
    *fetch(_, { call, put }) {
      const response = yield call(fetchPeopleList);
      yield put({
        type: 'save',
        payload: response,
      });
    },
  },
  reducers: {
    save(state, action){
      return {
        ...state,
        peoples: action.payload,
      }
    },
  },
}
