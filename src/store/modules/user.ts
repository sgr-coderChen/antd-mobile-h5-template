import { AppUser } from '@/typings';

export const moduleName = 'my-app';
export const reducerName = 'user';

// action types
const USER_LOGIN = `${moduleName}/${reducerName}/USER_LOGIN`; // 用户登录 存入信息

// init state
const initialState: AppUser = {
  nickname: '',
  openid: '',
  phone: '',
};

// reducer
export default function reducer(
  state = initialState,
  action: {
    type: string;
    payload: any;
  },
) {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}

// action creators
export function login(payload: AppUser) {
  return { type: USER_LOGIN, payload };
}
