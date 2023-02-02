import styles from './index.less';
import { Calendar, DatePicker, Button, Toast } from 'antd-mobile';
import { useState } from 'react';
import { history } from 'umi';
import dayjs from 'dayjs';
import { useAppInfo } from '@/hooks';
import { useDispatch } from 'react-redux';
import { login } from '@/store/modules/user';

export default function IndexPage() {
  const now = new Date();
  const [visible, setVisible] = useState(false);
  const dispatch = useDispatch();
  const userInfo = useAppInfo((state) => state.user);

  const handleJump = () => {
    console.log(dayjs);
    // history.push(`/demo/edit/${123}`);
    history.push(`/demo`);
  };

  const handleLogin = () => {
    console.log('dispatch', dispatch);
    dispatch(
      login({
        nickname: '陈晖',
        openid: 'wecwecwecw',
        phone: '23234234234',
      }),
    );
    console.log('userInfo', userInfo);
  };

  return (
    <div>
      <h1 className={styles.title} onClick={() => handleJump()}>
        跳转demo页面
      </h1>
      <Calendar />
      <li style={{ fontSize: 20 }}>wef</li>
      <Button
        onClick={() => {
          handleLogin();
        }}
      >
        登录
      </Button>
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
