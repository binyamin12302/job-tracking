import logo from '../assets/images/logo.svg';

const Logo = () => {

  const style = {
    fontSize: "30px",
    fontWeight: '500'
  }

  return (
    <>
      <img src={logo} alt="job" className='logo' />
      <span style={{ ...style, color: '#2cb1bc' }}>
        Job
      </span>
      <span style={{ ...style, color: '#778ca3', margin: '3px' }}>Tracking</span>
    </>
  )
}

export default Logo;