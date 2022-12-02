import React from 'react';

import { Container, Row, Col } from 'reactstrap';

import ExamplesNavbar from './components/ExamplesNavbar.js';

export default function ProfilePage() {

  return (
    <Container>
      <ExamplesNavbar />
      <Container className='wrapper mb-5'>
        <div>
          <Container className='align-items-center'>
            <div className='content-center'>
              <Row className='row-grid justify-content-between align-items-center text-left'>
                <Col className='mt-5 pt-5' lg='6' md='6'>
                  <div className='about-section legend text-white mb-3'>
                    <h2>About Me</h2>
                    <p>
                      I'm Danilo Batson and I am a full stack web developer. I'm
                      currently working on my portfolio and learning new skills
                      everyday. I'm looking for next positiont that will
                      continue allow to me grow as a web developer to boost the
                      foundation I have in place.
                    </p>
                    <p className='pt-1'>
                      I currently work full-time at a startup called{' '}
                      <a
                        target='_blank'
                        href='https://www.mongooseresearch.com/'
                      >
                        Mongoose Research
                      </a>{' '}
                      as a Software Engineer where I work on our platform's
                      integrations and chat platform. Before working at Mongoose
                      Research, I worked at{' '}
                      <a target='_blank' href='https://www.creditkey.com/'>
                        Credit Key
                      </a>{' '}
                      as a Frontend Developer.
                    </p>
                    <p className='pt-1'>
                      Prior to starting my coding career, I launched a nonprofit
                      right after the start of COVID-19 called{' '}
                      <a target='_blank' href='https://www.spicygreenbook.org/'>
                        Spicy Green Book
                      </a>
                      to help empower Black-owned businesses. In creating and
                      running this nonprofit I quickly learned the various
                      aspects of running a tech startup.
                    </p>
                    <div className='mt-4'>
                      <h4>Spicy Green Book</h4>
                      <p className='pt-1'>
                        Spicy Green Book is a completely volunteer based native
                        mobile ap and web app that helps people discover
                        Black-owned restaurants near them. I worked with various
                        volunteer product/project managers, designers,
                        photographers, marketers, videographers, and programmers
                        all collaborating to help bring a software product to
                        market.
                      </p>
                      <p className='pt-1'>
                        We were constantly onboarding new people and quickly
                        integrating them into our workflow. We could always use
                        more programmers so I decided to learn how to code so I
                        could help.
                      </p>
                    </div>
                    <div className='mt-4'>
                      <h4>Developer Beginnings</h4>

                      <p className='pt-1'>
                        I did a lot of self-teaching as well as enrolling myself
                        in a coding camp! I have several certifications from{' '}
                        <a target='_blank' href='https://fullstackopen.com/'>
                          <span>Full Stack Open, </span>
                        </a>
                        <a target='_blank' href='https://zerotomastery.io/'>
                          <span>ZeroToMastery, </span>
                        </a>
                        <a target='_blank' href='https://www.codecademy.com/'>
                          <span>Codecademy, </span>
                        </a>
                        <a target='_blank' href='https://www.udemy.com/'>
                          <span>Udemy, </span>
                        </a>
                        <a
                          target='_blank'
                          href='https://www.theodinproject.com/'
                        >
                          <span>The Odin Project, </span>
                        </a>
                        <a
                          target='_blank'
                          href='https://www.spicygreenbook.org/'
                        >
                          <span>Free Code Camp. </span>
                        </a>
                      </p>
                      <p className='pt-1'>
                        I have quickly learned that I really enjoy programming
                        and have continued to contribute to Spicy Green Book as
                        well as other various projects.
                      </p>
                      <p className='pt-1'>
                        I definitely have a passion for programming and would
                        like to make it into a career. Please consider bringing
                        me into your organization. I learn fast and am looking
                        forward to being a value-added employee as fast as
                        possible!
                      </p>
                    </div>
                  </div>
                </Col>
                <Col lg='4' md='5' className='pt-0'>
                  <img
                    alt='...'
                    className='img-fluid'
                    src={require('./assets/img/Danilo.jpeg')}
                  />
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <div className='section'>
          <Container>
            <Row className='justify-content-between'>
              <Col></Col>
              <Col>
                <h5 id='work' className='text-on-back'>
                  Work
                </h5>
              </Col>
            </Row>
          </Container>
          <Container>
            <Row className='pb-4'>
              <Col>
                <a target='_blank' href='https://www.spicygreenbook.org'>
                  <div>
                    <h3 className='mb-2'>Spicy Green Book</h3>
                    <img
                      alt='Spicy Green Book'
                      className='img-fluid'
                      src={require('./assets/img/spicygreenbook.png')}
                    />
                  </div>
                </a>
              </Col>
              <Col>
                <a target='_blank' href='https://netflix-twin.vercel.app/login'>
                  <div>
                    <h3 className='mb-2'>Netflix With YouTube</h3>
                    <img
                      alt='Spicy Green Book'
                      className='img-fluid'
                      src={require('./assets/img/netflix.png')}
                    />
                  </div>
                </a>
              </Col>
              <Col>
                <a
                  target='_blank'
                  href='https://xcellence-clothing-176xawzgs-danilobatson.vercel.app/'
                >
                  <div>
                    <h3 className='mb-2'>Excellence Clothing</h3>
                    <img
                      alt='Spicy Green Book'
                      className='img-fluid'
                      src={require('./assets/img/excellence.png')}
                    />
                  </div>
                </a>
              </Col>
            </Row>
            <Row className='pb-4'>
              <Col>
                <a
                  target='_blank'
                  to='https://expo.dev/@dbatson09/uber-eats?serviceType=classic&distribution=expo-go'
                >
                  <div>
                    <h3 className='mb-2'>Uber Eats</h3>
                    <img
                      alt='Spicy Green Book'
                      className='img-fluid'
                      src={require('./assets/img/uber.jpeg')}
                    />
                  </div>
                </a>
              </Col>
              <Col>
                <a target='_blank' href='https://expo.dev/@dbatson09/food'>
                  <div>
                    <h3 className='mb-2'>Restaurant Search Miami</h3>
                    <img
                      alt='Spicy Green Book'
                      className='img-fluid'
                      src={require('./assets/img/miami.png')}
                    />
                  </div>
                </a>
              </Col>
              <Col>
                <a target='_blank' href='https://www.mongooseresearch.com/'>
                  <div>
                    <h3 className='mb-2'>Mongoose Research</h3>
                    <img
                      alt='Spicy Green Book'
                      className='img-fluid'
                      src={require('./assets/img/mongoose.png')}
                    />
                  </div>
                </a>
              </Col>
            </Row>
          </Container>
        </div>
        <Container className='mb-5'>
          <Row>
            <h5 id='skills' className='text-on-back'>
              Skills
            </h5>
          </Row>
          <Row className='pb-3 text-success'>
            <Col>TypeScript</Col>
            <Col>React</Col>
            <Col>Node</Col>
            <Col>Express</Col>
            <Col>Javascript</Col>
          </Row>
          <Row className='pb-3 text-info'>
            <Col>React Native</Col>
            <Col>SQL</Col>
            <Col>Postman</Col>
            <Col>NextJS</Col>
            <Col>Vue</Col>
          </Row>
          <Row className='pb-3 text-warning'>
            <Col>Mongo DB</Col>
            <Col>Python</Col>
            <Col>Redux</Col>
            <Col>Axios</Col>
            <Col>Etc...</Col>
          </Row>
        </Container>
      </Container>
    </Container>
  );
}
