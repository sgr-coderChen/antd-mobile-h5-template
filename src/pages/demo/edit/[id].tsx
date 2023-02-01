import Index from './components/Detail';
import { useParams } from 'umi';

const Edit = () => {
  const params = useParams();
  console.log('params', params);
  return <Index />;
};

export default Edit;
