import Slider1 from '../assets/Images/2_4.jpg'
import Slider2 from '../assets/Images/3_2.jpg'
import Slider3 from '../assets/Images/2_4.jpg'
import Slider4 from '../assets/Images/2_4.jpg'
import Slider5 from '../assets/Images/2_4.jpg'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


function CardSlider() {
  return <>
    <div className='SliderCarousal'>
      <div className="container Slider">
        <div className="row">
          <div className="col-lg-12">
            <div className="slider_wrapper">
              <OwlCarousel
                className="owl-theme"
                loop
                margin={0}
                autoplay
                autoplayTimeout={4000}
                nav={false}
                dots={false}
                responsive={{
                  0: {
                    items: 1,
                  },
                  600: {
                    items: 3,
                  },
                  1000: {
                    items: 5,
                  },
                }}
              >
                <div className="item" data-aos="fade-up">
                  <img src={Slider1} alt="Slider 1" />
                </div>
                <div className="item" data-aos="fade-up">
                  <img src={Slider2} alt="Slider 2" />
                </div>
                <div className="item" data-aos="fade-up">
                  <img src={Slider3} alt="Slider 3" />
                </div>
                <div className="item" data-aos="fade-up">
                  <img src={Slider4} alt="Slider 4" />
                </div>
                <div className="item" data-aos="fade-up">
                  <img src={Slider5} alt="Slider 5" />
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}
export default CardSlider;