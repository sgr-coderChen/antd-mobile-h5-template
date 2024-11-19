import { useSelector, shallowEqual } from 'react-redux';
import type { AppState } from '@/store';

/**
 * 可以用于获取基本的用户信息和其他基础设置信息
 * @param selector
 * @returns
 */
export default function useAppInfo<ReturnState>(selector: (state: AppState) => ReturnState) {
  return useSelector(selector, shallowEqual);
}
