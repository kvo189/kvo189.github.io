import { useLayoutEffect, useRef, useState } from 'react';

export const Home = () => {
  return (
    <>
      <HeroSection />
      <HeroSection2 />
      <HeroSection2 />
    </>
  );
};

// Hero Section - What you have to offer and why people should trust you
const HeroSection = () => {
  // get Y position of element
  const [y, setY] = useState(0);
  const targetRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useLayoutEffect(() => {
    const y = targetRef?.current?.getBoundingClientRect()?.y;
    if (y) {
      setY(y);
    }
  }, []);

  return (
    <section ref={targetRef} className='d-flex align-items-center vh-100' style={{ marginTop: `-${y}px` }}>
      Hi, my name is Khang Vo. I build things for the web. I'm a software engineer specializing in building exceptional digital experiences. Currently, I'm focused on building
      accessible, human-centered products at Pack Health.
    </section>
  );
};

// Hero Section - What you have to offer and why people should trust you
const HeroSection2 = () => {
  return (
    <section className='d-flex align-items-center vh-100' style={{}}>
      Hi, my name is Khang Vo. I build things for the web. I’m a software engineer specializing in building exceptional digital experiences. Currently, I’m focused on building
      accessible, human-centered products at Pack Health.
    </section>
  );
};
