import { Result } from 'antd-mobile';

const NoFoundPage = () => (
  <div style={{ width: '100%', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <Result status="error" title="页面未找到" />
  </div>
);

export default NoFoundPage;
