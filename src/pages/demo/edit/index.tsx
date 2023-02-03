import { usePreload } from '@/hooks';
import Index from './components/Detail';

const fakeApi = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.5 ? resolve({ c: 'wefwef' }) : reject({ message: '某某某接口报错啦' });
    }, 2000);
  });
};

const Create = () => {
  const { data, mask } = usePreload(async () => {
    const res = await fakeApi();

    return {
      value: res,
    };
  });
  console.log(data);
  if (data === null) {
    return mask;
  }
  return <Index />;

  // return <Index />;
};

Create.title = '新增测试页面详情';

export default Create;
