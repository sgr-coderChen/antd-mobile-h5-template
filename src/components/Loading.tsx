import { SpinLoading } from 'antd-mobile';

const PageLoading = () => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
    <SpinLoading style={{ '--size': '12vw' }} />
  </div>
);

export default PageLoading;
