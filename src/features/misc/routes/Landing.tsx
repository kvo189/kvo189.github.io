import { MainLayout } from '@/components/Layout/MainLayout';
import { Home } from '@/features/home/home';
import { Container } from 'react-bootstrap';
import { Outlet, Route } from 'react-router-dom';

export const Landing = () => {
  return (
    <Container className='d-flex flex-column h-100'>
      <MainLayout>
        <Outlet />
      </MainLayout>
    </Container>
  );
};
