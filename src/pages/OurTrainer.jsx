import TopBar from "../Component/TopBar";
import Navbar from "../Component/Navbar";
import TopBackground from '../assets/Images/page-top-bg.jpg'
import Footer from '../Component/Footer'
import GoBackToTop from '../Component/GoBackToTop'
import image1 from '../assets/Images/1_1.png'
import image2 from '../assets/Images/2_1.png'
import image3 from '../assets/Images/3_1.png'
import image4 from '../assets/Images/4.png.webp'
import image5 from '../assets/Images/5.png.webp'
import image6 from '../assets/Images/6.png.webp'
import '../Css/App.css'


function OurTrainer() {

  $(document).ready(function () {
    $('.classes-slider').owlCarousel({
      loop: true,
      nav: false,
      dots: true,
      margin: 30,
      autoplay: true,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2
        }
      },
    });

  })

  return (
    <>
      <TopBar />
      <div className="Section1">
        <Navbar />
        <div className="page-top-section bg" data-setbg="../assets/Images/page-top-bg.jpg"
          style={{ backgroundImage: 'url(' + TopBackground + ')' }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-7 m-auto text-white py-5">
                <h2>Our Trainer</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Section2">
        <div className="trainers-page-section spad overflow-hidden">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="trainer-item">
                  <div className="ti-img">
                    <img src={image1} alt="" />
                  </div>
                  <div className="ti-text">
                    <h4>Lori Kennedy</h4>
                    <h6>Yoga Trainer</h6>
                    <p>Yoga &amp; Therapy Certificate of Uttarakhand University Sanskrit</p>
                    <div className="ti-social">
                      <a href="#"><i className="bi bi-facebook"></i></a>
                      <a href="#"><i className="bi bi-instagram"></i></a>
                      <a href="#"><i className="bi bi-twitter"></i></a>
                      <a href="#"><i className="bi bi-linkedin"></i></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="trainer-item">
                  <div className="ti-img">
                    <img src={image2} alt="" />
                  </div>
                  <div className="ti-text">
                    <h4>Lori Kennedy</h4>
                    <h6>Yoga Trainer</h6>
                    <p>Yoga &amp; Therapy Certificate of Uttarakhand University Sanskrit</p>
                    <div className="ti-social">
                      <a href="#"><i className="bi bi-facebook"></i></a>
                      <a href="#"><i className="bi bi-instagram"></i></a>
                      <a href="#"><i className="bi bi-twitter"></i></a>
                      <a href="#"><i className="bi bi-linkedin"></i></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="ts-item">
                  <div className="trainer-item">
                    <div className="ti-img">
                      <img src={image3} alt="" />
                    </div>
                    <div className="ti-text">
                      <h4>Rebecca James</h4>
                      <h6>Yoga Trainer</h6>
                      <p>Yoga &amp; Therapy Certificate of Uttarakhand University Sanskrit</p>
                      <div className="ti-social">
                        <a href="#"><i className="bi bi-facebook"></i></a>
                        <a href="#"><i className="bi bi-instagram"></i></a>
                        <a href="#"><i className="bi bi-twitter"></i></a>
                        <a href="#"><i className="bi bi-linkedin"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="ts-item">
                  <div className="trainer-item">
                    <div className="ti-img">
                      <img src={image4} alt="" />
                    </div>
                    <div className="ti-text">
                      <h4>Cynthia McCoy</h4>
                      <h6>Yoga Trainer</h6>
                      <p>Yoga &amp; Therapy Certificate of Uttarakhand University Sanskrit</p>
                      <div className="ti-social">
                        <a href="#"><i className="bi bi-facebook"></i></a>
                        <a href="#"><i className="bi bi-instagram"></i></a>
                        <a href="#"><i className="bi bi-twitter"></i></a>
                        <a href="#"><i className="bi bi-linkedin"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="ts-item">
                  <div className="trainer-item">
                    <div className="ti-img">
                      <img src={image5} alt="" />
                    </div>
                    <div className="ti-text">
                      <h4>Olivia Richards</h4>
                      <h6>Yoga Trainer</h6>
                      <p>Yoga &amp; Therapy Certificate of Uttarakhand University Sanskrit</p>
                      <div className="ti-social">
                        <a href="#"><i className="bi bi-facebook"></i></a>
                        <a href="#"><i className="bi bi-instagram"></i></a>
                        <a href="#"><i className="bi bi-twitter"></i></a>
                        <a href="#"><i className="bi bi-linkedin"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="ts-item">
                  <div className="trainer-item">
                    <div className="ti-img">
                      <img src={image6} alt="" />
                    </div>
                    <div className="ti-text">
                      <h4>Emily Walker</h4>
                      <h6>Yoga Trainer</h6>
                      <p>Yoga &amp; Therapy Certificate of Uttarakhand University Sanskrit</p>
                      <div className="ti-social">
                        <a href="#"><i className="bi bi-facebook"></i></a>
                        <a href="#"><i className="bi bi-instagram"></i></a>
                        <a href="#"><i className="bi bi-twitter"></i></a>
                        <a href="#"><i className="bi bi-linkedin"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="site-pagination">
              <a href="#" className="active">1</a>
              <a href="#">2</a>
              <a href="#"><i className="bi bi-chevron-right"/></a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <GoBackToTop />
    </>)
}
export default OurTrainer;

