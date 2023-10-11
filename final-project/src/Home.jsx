
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
// import { Flip } from 'react-awesome-reveal';
// import image from '../src/Images/pexels-ono-kosuki-6000081.jpg';
import './Home.css';
import Button from 'react-bootstrap/Button'
import { ArrowLeft } from 'react-bootstrap-icons';
// import Photo from './Carousel';
// import photo from './Data';


function Home() {
  return (
<div style={{backgroundColor:'whitesmoke'}}>
    <div  className=' container d-flex mt-5'>
      <div className="">

        <h3>Welcome to <span style={{ color: '#FFA500' }}> SHOPIFY</span>, where exceptional quality meets unbeatable Convinience.</h3> <br />
        <p className='text-muted'>We are here to make shopping seemless and enjoyable <br></br> at your comfort, making life easy through <br></br> shopping, meeting your every need.<br></br>
          We are just a text, call or email away.
        </p>
        
        <Button className='cta ' variant="success">Sign Up</Button>
        <ArrowLeft className='icons' color="black" size={100} />
        

        

      </div>

      <div className=" col-6">
        

        {/* <Photo  img={photo}  /> */}

        {/* <img src={image} className="landingpic" alt="" /> */}
        {/* <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="landingpic"
          src={image}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>Reliable</h5>
          <p>Online shopping weh dey available for all man wether woman or man or even pikin sef.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="landingpic"
          src={image}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Swift</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="landingpic"
          src={image}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Affordable</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> */}

      </div>
      </div>

      
        
      




    </div>
    
  );
}

export default Home;
