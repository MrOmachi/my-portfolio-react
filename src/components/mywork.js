import Navigation from './Navigation';
import iPhoneCloneImg from './img/apple-clone.jpeg';
import coinbaseImg from './img/coinbase-clone.jpeg';
import lgCloneImg from './img/lg-clone.jpeg';
import poketoImg from './img/poketo.jpeg';
import poketoBackendImg from './img/poketo-backend.jpeg';
import schorlashipApp from './img/js-schorlaship.jpeg';
import { Link } from 'react-router-dom';

function mywork() {
  return (
    <div>
      <Navigation />
      <main className='main-holder'>
        <div className='works-content container'>
          <h1 className='text-white'>
            My <span className='works-h1'>Work</span>
          </h1>
          <br />
          <h4 className='text-white'>Check out some of my projects</h4>
          <div className='row row-cols-1 mx-auto row-cols-md-3 g-4'>
            <div className='col'>
              <div className='card card-col'>
                <img src={iPhoneCloneImg} className='card-img-top' alt='...' />
                <div className='nav-bg border-none card-body'>
                  <Link
                    target='_blank'
                    to='https://mromachi.github.io/apple_clone/'
                  >
                    <button
                      type='submit'
                      className='btn w-100 btn-secondary btn-md'
                    >
                      <i className='fas fa-eye'></i> Project
                    </button>
                  </Link>
                  <br />
                  <br />
                  <a
                    target='_blank'
                    href='https://github.com/MrOmachi/apple_clone.git'
                  >
                    <button
                      type='submit'
                      className='btn bg-dark w-100 btn-secondary btn-md'
                    >
                      <i className='fab fa-github'></i> Github
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className='col'>
              <div className='card card-col'>
                <img src={coinbaseImg} className='card-img-top' alt='...' />
                <div className='nav-bg border-none card-body'>
                  <a target='_blank' href=''>
                    <button
                      type='submit'
                      className='btn w-100 btn-secondary btn-md'
                    >
                      <i className='fas fa-eye'></i> Project
                    </button>
                  </a>
                  <br />
                  <br />
                  <button
                    type='submit'
                    className='btn bg-dark w-100 btn-secondary btn-md'
                  >
                    <i className='fab fa-github'></i> Github
                  </button>
                </div>
              </div>
            </div>
            <div className='col'>
              <div className='card card-col'>
                <img src={lgCloneImg} className='card-img-top' alt='...' />
                <div className='nav-bg border-none card-body'>
                  <a
                    target='_blank'
                    href='https://mromachi.github.io/lg_clone/'
                  >
                    <button
                      type='submit'
                      className='btn w-100 btn-secondary btn-md'
                    >
                      <i className='fas fa-eye'></i> Project
                    </button>
                  </a>
                  <br />
                  <br />
                  <a
                    target='_blank'
                    href='https://github.com/MrOmachi/lg_clone.git'
                  >
                    <button
                      type='submit'
                      className='btn bg-dark w-100 btn-secondary btn-md'
                    >
                      <i className='fab fa-github'></i> Github
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className='col'>
              <div className='card card-col'>
                <img src={poketoImg} className='card-img-top' alt='...' />
                <div className='nav-bg border-none card-body'>
                  <a
                    target='_blank'
                    href='https://mromachi.github.io/poketo_clone/'
                  >
                    <button
                      type='submit'
                      className='btn w-100 btn-secondary btn-md'
                    >
                      <i className='fas fa-eye'></i> Project
                    </button>
                  </a>
                  <br />
                  <br />
                  <a
                    target='_blank'
                    href='https://github.com/MrOmachi/poketo_clone.git'
                  >
                    <button
                      type='submit'
                      className='btn bg-dark w-100 btn-secondary btn-md'
                    >
                      <i className='fab fa-github'></i> Github
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className='col'>
              <div className='card card-col'>
                <img
                  src={poketoBackendImg}
                  className='card-img-top'
                  alt='...'
                />
                <div className='nav-bg border-none card-body'>
                  <a
                    target='_blank'
                    href='https://mromachi.github.io/Poketo_clone_backend/'
                  >
                    <button
                      type='submit'
                      className='btn w-100 btn-secondary btn-md'
                    >
                      <i className='fas fa-eye'></i> Project
                    </button>
                  </a>
                  <br />
                  <br />
                  <a
                    target='_blank'
                    href='https://github.com/MrOmachi/Poketo_clone_backend.git'
                  >
                    <button
                      type='submit'
                      className='btn bg-dark w-100 btn-secondary btn-md'
                    >
                      <i className='fab fa-github'></i> Github
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className='col'>
              <div className='card card-col'>
                <img src={schorlashipApp} className='card-img-top' alt='...' />
                <div className='nav-bg border-none card-body'>
                  <a
                    target='_blank'
                    href='https://mromachi.github.io/Scholarship_Application/'
                  >
                    <button
                      type='submit'
                      className='btn w-100 btn-secondary btn-md'
                    >
                      <i className='fas fa-eye'></i> Project
                    </button>
                  </a>
                  <br />
                  <br />
                  <a
                    target='_blank'
                    href='https://github.com/MrOmachi/Scholarship_Application.git'
                  >
                    <button
                      type='submit'
                      className='btn bg-dark w-100 btn-secondary btn-md'
                    >
                      <i className='fab fa-github'></i> Github
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default mywork;
