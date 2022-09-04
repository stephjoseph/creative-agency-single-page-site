import { useState, useEffect } from 'react';
import Approach from './main/Approach';
import Slider from './main/Slider';
import Strategic from './main/Strategic';
import CTA from './main/CTA';

const Main = () => {
  const [width, setWidth] = useState(0);

  const updateSize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    console.log(width);
    setWidth(window.innerWidth);
    window.onresize = updateSize;
  }, [width]);

  return (
    <main className='flex w-full flex-col items-center'>
      <Strategic width={width} />
      <Approach />
      <Slider width={width} setWidth={setWidth} />
      <CTA />
    </main>
  );
};

export default Main;
