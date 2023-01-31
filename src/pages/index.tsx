import styles from './index.less';
import { Calendar, DatePicker, Button, Toast } from 'antd-mobile';
import { useState } from 'react';

export default function IndexPage() {
  const now = new Date();
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <h1 className={styles.title}>Page index123</h1>
      <Calendar />
      <li style={{ fontSize: 20 }}>wef</li>
      <Button
        onClick={() => {
          setVisible(true);
        }}
      >
        选择
      </Button>
      <DatePicker
        title="时间选择"
        visible={visible}
        onClose={() => {
          setVisible(false);
        }}
        max={now}
        onConfirm={(val) => {
          Toast.show(val.toDateString());
        }}
      />
    </div>
  );
}
