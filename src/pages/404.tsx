const NoFoundPage = () => (
  <div
    style={{
      width: '100%',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
    }}
  >
    <img src={require('@/assets/img/noFound.png')} style={{ width: '70%' }} alt="" />
    <p style={{ marginTop: '12vw', fontSize: 18, color: '#333' }}>您访问的页面不存在</p>
  </div>
);

export default NoFoundPage;
