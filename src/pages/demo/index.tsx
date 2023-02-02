import { useAppInfo, useRequest } from '@/hooks';
import { getList } from '@/services/demo';
import { Button } from 'antd-mobile';
import { useEffect } from 'react';

const DemoPage = () => {
  const userInfo = useAppInfo((state) => state.user);
  console.log('DemoPage - userInfo', userInfo);

  const { run: fetchList, loading } = useRequest(getList, {
    toast: true,
    loadingState: true,
    onSuccess(res) {
      console.log(res);
    },
    onError(err) {
      console.log('err', err);
    },
  });

  useEffect(() => {
    console.log('loading', loading);
  }, [loading]);

  return (
    <>
      <div>DemoPage</div>
      <Button color="primary" onClick={() => fetchList()}>
        获取文章列表
      </Button>
    </>
  );
};

export default DemoPage;
