import '../App.css';
import HeroImage from '../assets/hero-image.jpg';
import Tilt from 'react-parallax-tilt';
import KeyboardArrowDownTwoToneIcon from '@mui/icons-material/KeyboardArrowDownTwoTone';

const Home = ({ scrollToAbout }) => {
  
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  return (
    <div className='home pt-4 pt-md-0 w-100 d-flex flex-column justify-content-center position-relative' style={{ paddingBottom:'7rem', minHeight: '100vh' }}>
      <div className="br-text-proffessional">
        PROFFESSIONAL
      </div>
      <div className="br-text-resume">
        RESUME
      </div>
      <div className='container'>
        <div className='home-content position-relative d-flex flex-column flex-md-row justify-content-md-center'>
          <div className='w-100 d-flex flex-column justify-content-center align-items-start mb-4 mb-md-0'>
            <div className='hero-detail d-flex flex-column justify-content-center align-items-start align-items-sm-center  align-items-md-end'>
              <div className='hero-title quicksand-hero-title mb-2 mb-md-0 d-flex
                flex-column justify-content-start align-items-start
                flex-sm-row  justify-content-sm-center align-items-sm-center
                flex-md-column justify-content-md-center align-items-md-end'>
                <div className='hero-self'>My Self,</div>
                <div className='hero-self-name'>Pratik Dubariya</div>
              </div>
              <div className='mb-2 d-flex
                flex-column justify-content-start align-items-start
                flex-sm-row  justify-content-sm-start align-items-sm-center
                flex-md-column justify-content-md-center align-items-md-end'>
                <div className=''>
                  I'm a full stack developer with over a year of experience in building web apps. I work on both frontend and backend to create clean, fast, and user-friendly websites.
                </div>
              </div>
              <div className='w-100 d-flex justify-content-center justify-content-md-end align-items-center'>
                <a
                  style={{ cursor: 'pointer' }}
                  className='btn download-cv'
                  href={`${BASE_URL}/download-resume`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
          <div className='w-100 d-flex flex-column justify-content-center align-items-center mb-4 mb-md-0'>
            <div className='hero-img'>
              <div className='hero-card' style={{ transform: 'perspective(1400px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)' }}>
                <div className='hero-card tilt-inner'>
                  <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10}>
                    <img src={HeroImage} height={500} alt="Hero" className="hero-image" />
                  </Tilt>
                </div>
              </div>
            </div>
          </div>
          <div className='w-100 d-flex flex-column justify-content-center align-items-start '>
            <div className='hero-about h-100 d-flex justify-content-start align-items-end' >
              <div className='d-flex flex-column justify-content-center align-items-start ms-sm-5 ms-md-0'>
                <div className='i-am-a'>I am a</div>
                <div className='engineer'>Engineer</div>
              </div>
            </div>
          </div>
          <div className='art'></div>
        </div>
      </div>
      <div className='scroll-next'>
        <div onClick={scrollToAbout}>
          <KeyboardArrowDownTwoToneIcon className='set-scroll-next-btn' />
        </div>
      </div>
    </div>
  )
}

export default Home;