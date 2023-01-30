import styles from './index.less';
import { Calendar } from 'antd-mobile';

export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>Page index123</h1>
      <Calendar />
    </div>
  );
}
