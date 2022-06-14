import './scss/style.css';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';

function portfolio() {
  return (
    <div>
      <Navigation />

      <div className='container-fluid bannerS w-100 vh-100'>
        <h1>
          Hey There. <br />
          I’m John!
        </h1>

        <div className='card-flex'>
          <div className='card-empty'>card-empty</div>
          <div className='card card-bg' style={{ width: `25rem` }}>
            <div className='card-body'>
              <h4 className='card-title'>I am a Software Devolper</h4>
              <p className='card-text'>
                I can help you build a product , feature or website. <br />
                Look through some of my work and experience! If you like what
                you see and have a project you need coded, don’t hestiate to
                contact me.
              </p>
              <Link to={'/mywork'}>
                <button type='submit' className='btn btn-secondary btn-sm'>
                  My Work
                </button>
              </Link>
            </div>
          </div>
          <div className='card-empty'>card-empty</div>
        </div>
      </div>
    </div>
  );
}

export default portfolio;
