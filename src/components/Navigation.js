import './scss/style.css';
import navigationLogo from './img/logo.jpeg';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <div>
      <nav className='navbar navbar-expand-lg nav-bg'>
        <div className='container'>
          <Link className='navbar-brand' to={'/'}>
            <img src={navigationLogo} className='img-thumbnail logo' alt='' />
          </Link>
          <button
            className='navbar-toggler border-white color-white'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse me-5' id='navbarNav'>
            <ul className='navbar-nav ms-auto'>
              <li className='nav-item'>
                <Link
                  className='nav-link active text-white'
                  aria-current='page'
                  to={'/'}
                >
                  Portfolio
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link text-white' to={'/about'}>
                  About Me
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link text-white' to={'/mywork'}>
                  My Work
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link text-white' to={'/contact'}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
