import { debounce } from '@/utils/debounce';
import * as React from 'react';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Col, Navbar, Row, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <UserNavigation />
      <main className='flex-grow-1 h-100'>{children}</main>
    </>
  );
};

const UserNavigation = () => {
  const [height, setHeight] = useState(0);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const targetRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  const navbarStyles = {
    position: 'fixed',
    width: '100%',
    textAlign: 'center',
    transition: 'top 0.33s',
  };

  const handleScroll = debounce(() => {
    // find current scroll position
    const currentScrollPos = window.pageYOffset;
    // set state based on location info
    setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10);
    // set state to new scroll position
    setPrevScrollPos(currentScrollPos);
  }, 50);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  useLayoutEffect(() => {
    const height = targetRef?.current?.offsetHeight;
    if (height) {
      setHeight(height);
    }
  }, []);

  return (
    <Navbar ref={targetRef} bg='transparent' variant='light' style={{ ...navbarStyles, top: visible ? '0' : `-${height}px` } as React.CSSProperties}>
      <Container>
        <Nav className='m-auto'>
          <Link className='nav-link' to='/'>
            ABOUT
          </Link>
          <Link className='nav-link' to='/projects'>
            PROJECTS
          </Link>
          <Link className='nav-link' to='/contact'>
            CONTACT
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
