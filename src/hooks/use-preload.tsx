import { useEffect, useState, ReactElement } from 'react';
import { useRequest } from '@/hooks';
import { PageLoading } from '@/components';
import { ErrorBlock, Button } from 'antd-mobile';

export default function usePreload<TargetProps>(
  opts:
    | {
        request: () => Promise<TargetProps>;
        onSuccess?: (data: TargetProps) => void;
      }
    | (() => Promise<TargetProps>),
  deps?: ReadonlyArray<any>,
) {
  const [data, setData] = useState<TargetProps | null>(null);
  const [error, setError] = useState<Error | null>(null);

  let request: () => Promise<TargetProps>;
  let onSuccess: ((data: TargetProps) => void) | undefined;

  if (typeof opts === 'function') {
    request = opts;
  } else {
    request = opts.request;
    onSuccess = opts.onSuccess;
  }

  const { run } = useRequest(
    async () => {
      setData(null);
      const res = await request();
      return res;
    },
    {
      onSuccess(res) {
        if (onSuccess) {
          onSuccess(res);
        }
        setData(res);
      },
      onError(err) {
        setError(err);
      },
    },
  );

  useEffect(
    () => {
      run();
    },
    deps ? deps : [],
  );

  const handleRefresh = () => {
    setError(null);
    run();
  };

  let mask: ReactElement | null = null;

  if (error) {
    console.log('error', error);
    mask = (
      <ErrorBlock
        image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
        style={{
          '--image-height': '30vh',
        }}
        fullPage
        description={<span>{error?.message ?? '服务器繁忙，请稍后重试'}</span>}
      >
        <Button color="primary" size="small" onClick={() => handleRefresh()}>
          重新加载
        </Button>
      </ErrorBlock>
    );
  } else if (data === null) {
    mask = <PageLoading />;
  }

  return {
    refresh: handleRefresh,
    data,
    mask,
  };
}
