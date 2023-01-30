import '../../clientCss/loadingLogo.css'
function LoadingLogo() {
  return (
    <div className='loading-container'>
      <h1>Page Is Now Loading...</h1>
      <img className='loading-logo' src="/logo192.png" />
    </div>
  );
}

export default LoadingLogo;
