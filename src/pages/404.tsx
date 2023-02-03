import { ErrorBlock, Button } from 'antd-mobile';
import { history } from 'umi';

const NoFoundPage = () => (
  <div>
    <ErrorBlock
      image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
      style={{
        '--image-height': '30vh',
      }}
      fullPage
      description={<span>当前访问页面不存在</span>}
    >
      <Button color="primary" size="small" onClick={() => history.push('/')}>
        返回首页
      </Button>
    </ErrorBlock>
  </div>
);

NoFoundPage.title = '页面不存在';

export default NoFoundPage;
