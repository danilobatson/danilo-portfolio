import React, { useEffect } from 'react';
import { BsGithub, BsEnvelopeFill, BsLinkedin } from 'react-icons/bs';

import { Navbar, NavItem, NavLink, Nav, Container, Row, Col } from 'reactstrap';

export default function ExamplesNavbar() {
  const [color, setColor] = React.useState('navbar-transparent');

  useEffect(() => {
    window.addEventListener('scroll', changeColor);
    return function cleanup() {
      window.removeEventListener('scroll', changeColor);
    };
  }, []);

  const changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      setColor('bg-info');
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      setColor('navbar-transparent');
    }
  };

  return (
    <Navbar className={'fixed-top ' + color} color-on-scroll='100' expand='lg'>
      <Container>
        <Row>
          <Col>
            <h1>Danilo Batson's Portfolio</h1>
          </Col>
        </Row>
        <Nav navbar>
          <NavItem className='p-0'>
            <NavLink
              href='mailto:djbatson19@gmail.com'
              target='_blank'
              alt='Work'
            >
              <a href='#work'>
                <u>Work</u>
              </a>
            </NavLink>
            <NavLink
              href='mailto:djbatson19@gmail.com'
              target='_blank'
              alt='Work'
            >
              <a href='#skills'>
                <u>Skills</u>
              </a>
            </NavLink>

            <NavLink
              href='mailto:djbatson19@gmail.com'
              target='_blank'
              alt='Email'
            >
              <BsEnvelopeFill size={20} />
            </NavLink>
          </NavItem>
          <NavItem className='p-0'>
            <NavLink
              href='https://github.com/danilobatson'
              target='_blank'
              alt='GitHub'
            >
              <BsGithub size={20} />
              <p className='d-lg-none d-xl-none'>GitHub</p>
            </NavLink>
          </NavItem>
          <NavItem className='p-0'>
            <NavLink
              href='https://www.linkedin.com/in/danilo-batson/'
              target='_blank'
              title='Connect on LinkedIn'
            >
              <BsLinkedin size={20} />
              <p className='d-lg-none d-xl-none'>LinkedIn</p>
            </NavLink>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  );
}
