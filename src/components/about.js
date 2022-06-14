import Navigation from './Navigation';
import myImg from './img/myPhoto.jpeg';

function about() {
  return (
    <div>
      <Navigation />
      <main class='main-holder-about'>
        <div class='about-contain container'>
          <div class='works-content container'>
            <h1 class='text-white'>
              About <span class='works-h1'>Me</span>
            </h1>
            <br />
            <h4 class='text-white'>Let me tell you a few things...</h4>
            <br />
          </div>

          <div class='w-100'>
            <div class='row about-bg'>
              <div class='col-md-4 about-img'>
                <img src={myImg} class='img-fluid border-img' alt='...' />
              </div>
              <div class='col-md-8 about-text'>
                <div class=''>
                  <h5 class='card-title'>About me</h5>
                  <p class='card-text'>
                    Hi, I'm a certified full-stack developer with industry
                    standard experience. I have worked with top companies
                    including Oxjay Ent. as a developer. My love for the Tech
                    world and solving tech related problems, in general, lured
                    me into programming. I started learning how to code from
                    freecodecamp, where I developed a lifelong passion for
                    programming. Since then, I've registered 1500+ hours into
                    the development of several projects. I am currently
                    exploring both frontend and backend opportunities in
                    companies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default about;
