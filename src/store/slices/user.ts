import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { AppUser } from '@/typings';

// 定义初始状态
const initialState: AppUser = {
  nickname: '',
  openid: '',
  phone: '',
};

// 使用 createSlice 创建 slice
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // 用户登录：更新用户信息
    login(state, action: PayloadAction<AppUser>) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

// 导出 actions 和 reducer
export const { login } = userSlice.actions;

export default userSlice.reducer;
