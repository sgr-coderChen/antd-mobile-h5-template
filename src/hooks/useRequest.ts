import { useRef, useEffect, useMemo, useState } from 'react';
import { Toast } from 'antd-mobile';

/**
 * 发起网络请求, 主要面向场景: 提交单据、点击列表打开详情页前请求数据，自动捕获异常
 * @param request 网络请求方法
 * @param options
 * @param onSuccess 成功回调
 * @param onError 错误回调 默认会用Toast提示
 * @param loadingState 启用loading状态
 */
export function useRequest<
  T extends (...args: any[]) => PromiseLike<any>,
  K = T extends (...args: any) => PromiseLike<infer U> | infer U ? U : never,
>(
  request: T,
  options: {
    onSuccess?: (res: K) => void;
    onError?: (err: Error) => void;
    loadingState?: boolean;
    toast?: boolean;
  },
) {
  const { onSuccess, onError, loadingState, toast } = options;

  const [loading, setLoading] = useState(false);
  const mounted = useRef(false);
  const toastRef = useRef<any>(null);
  const fetchId = useRef(0);

  const start = () => {
    if (toast && !toastRef.current) {
      toastRef.current =
        Toast.show({
          duration: 0,
          icon: 'loading',
          content: '加载中…',
        }) || true;
    }

    if (loadingState) {
      setLoading(true);
    }
  };

  const end = () => {
    if (toastRef.current) {
      toastRef.current?.close();

      toastRef.current = null;
    }

    if (!mounted.current) {
      return;
    }

    if (loadingState) {
      setLoading(false);
    }
  };

  useEffect(() => {
    mounted.current = true;

    return () => {
      mounted.current = false;
      end();
    };
  }, []);

  const run = async (...args: Parameters<T>) => {
    fetchId.current += 1;
    start();

    const id = fetchId.current;

    try {
      const res = await request(...args);

      if (mounted.current && id === fetchId.current && onSuccess) {
        onSuccess(res);
      }
    } catch (err: any) {
      if (onError) {
        onError(err as Error);
      } else {
        Toast.show({
          content: err as Error,
        });
      }
    }

    end();
  };

  const runRef = useRef(run);

  runRef.current = run;

  const formatedRun = useMemo(() => {
    const cb = (...args: Parameters<T>) => runRef.current(...args);

    return cb;
  }, []);

  return { run: formatedRun, loading };
}
