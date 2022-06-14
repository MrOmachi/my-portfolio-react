import Navigation from './Navigation';

function contact() {
  return (
    <div>
      <Navigation />
      <main class='contact-main '>
        <div class='contact-main-hold vh-100 container'>
          <div class='empty-hold hold-col'></div>
          <div class='contacts hold-col'>
            <div class='collaborate-txt'>
              <p>Interested in collaborating?</p>
              <h1>Get Started</h1>
              <p>
                Feel free to send me a message for collaboration or hire. I will
                give feedback as soon as possible or call <b>01-454-1526</b>
              </p>
            </div>

            <form>
              <div class='mb-3'>
                <input
                  type='name'
                  placeholder='Your Name'
                  class='form-control w-100'
                  id='exampleInputEmail1'
                  aria-describedby='emailHelp'
                />
              </div>
              <div class='mb-3'>
                <input
                  type='email'
                  class='form-control w-100'
                  placeholder='Your Email'
                  id='exampleInputEmail1'
                  aria-describedby='emailHelp'
                />
              </div>
              <div class='mb-3'>
                <textarea
                  name='text'
                  id=''
                  placeholder='Enter Your Message Here'
                  cols='35'
                  class='w-100'
                  rows='4'
                ></textarea>
              </div>
              <button type='submit' class='btn btn-color '>
                Start Collaboration
              </button>
            </form>
          </div>
          <div class='empty-hold hold-col'></div>
        </div>
      </main>
    </div>
  );
}

export default contact;
