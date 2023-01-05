import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/Testing';
import { Link } from 'react-router-dom';
import { Logo } from '../components';


const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo  />
      </nav>
      <div className='container page'>
        {/* info */}
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            I'm baby hella gluten-free beard swag truffaut synth chia succulents hot chicken umami cornhole.
            3 wolf moon trust fund austin,
            8-bit glossier bruh pabst bicycle rights mustache live-edge ennui hashtag Brooklyn.
          </p>
          <Link to='/register' className='btn btn-hero'>
            Login/Register
          </Link >
        </div>
        <img src={main} alt="job hunt" className='img main-img' />
      </div>
    </Wrapper>
  )
}



export default Landing