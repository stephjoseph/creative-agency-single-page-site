import Approach from './main/Approach';
import Slider from './main/Slider';
import Strategic from './main/Strategic';
import CTA from './main/CTA';

const Main = () => {
  return (
    <main className='flex w-full flex-col items-center'>
      <Strategic />
      <Approach />
      <Slider />
      <CTA />
    </main>
  );
};

export default Main;
