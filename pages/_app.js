import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div className='mx-auto grid w-full max-w-[1920px] place-items-center'>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
