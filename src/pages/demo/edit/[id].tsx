import Index from './components/detail';
import { useParams } from 'umi';

const Edit = () => {
  const params = useParams();
  console.log('params', params);
  return <Index />;
};

Edit.title = '编辑测试页面详情';

export default Edit;
