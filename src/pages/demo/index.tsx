import { useAppInfo, useRequest } from '@/hooks';
import { getList } from '@/services/demo';
import { Button } from 'antd-mobile';
import { useEffect } from 'react';
import { history } from 'umi';

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
      <div onClick={() => history.push(`/demo/edit/${123}`)}>DemoPage</div>
      <Button color="primary" onClick={() => fetchList()}>
        获取文章列表
      </Button>
    </>
  );
};

DemoPage.title = '测试页面';

export default DemoPage;
