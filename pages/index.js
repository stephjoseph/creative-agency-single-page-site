import Head from 'next/head';
import Header from '../components/Header';
import Main from '../components/Main';
import Nav from '../components/Nav';

const Home = () => {
  return (
    <>
      <Head>
        <title>Creative | Home</title>
        <link rel='icon' type='image/png' href='/assets/favicon-32x32.png' />
      </Head>
      <div className='flex w-full flex-col items-center'>
        <Nav />
        <Header />
        <Main />
      </div>
    </>
  );
};

export default Home;
