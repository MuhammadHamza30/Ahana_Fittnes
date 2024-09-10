import TopBar from "../Component/TopBar";
import Navbar from "../Component/Navbar";
import TopBackground from '../assets/Images/page-top-bg.jpg'
import DSBgImage from '../assets/Images/wwd-bg.jpg'
import About1 from '../assets/Images/about-1.png'
import About2 from '../assets/Images/about-2.png'
import About3 from '../assets/Images/about-3.png'
import About4 from '../assets/Images/about-4.png'
import Trainer from '../Component/Trainer'
import Review from '../Component/Review'
import logo from '../assets/Images/logo-icon.png'
import image1 from '../assets/Images/Blog1.jpg'
import image2 from '../assets/Images/Blog2.jpg'
import image3 from '../assets/Images/Blog3.jpg'
import Footer from '../Component/Footer'
import GoBackToTop from '../Component/GoBackToTop'

function About() {
  return (<>
    <TopBar />
    <div className="Section1">
      <Navbar />
      <div className="page-top-section bg" data-setbg="../assets/Images/page-top-bg.jpg"
        style={{ backgroundImage: 'url(' + TopBackground + ')' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-7 m-auto text-white py-5">
              <h2>About</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="Section2">
      <div className="service">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="about-item icon-box text-center justify-content-center">
                <div className="serviceIcon d-flex justify-content-center">
                  <img src={About1} alt="" />
                </div>
                <div className="serviceText">
                  <h4>Full Rejuvenation</h4>
                  <p>Excepteur sint occaecat cupidatat non proident sunt</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="about-item icon-box text-center">
                <div className="serviceIcon">
                  <img src={About2} alt="" />
                </div>
                <div className="serviceText">
                  <h4>Extension of Spring</h4>
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="about-item icon-box text-center">
                <div className="serviceIcon">
                  <img src={About3} alt="" />
                </div>
                <div className="serviceText">
                  <h4>Against Aging</h4>
                  <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="about-item icon-box text-center">
                <div className="serviceIcon">
                  <img src={About4} alt="" />
                </div>
                <div className="serviceText">
                  <h4>Slim Body</h4>
                  <p>Neque porro quisquam est, qui dolorem ipsum quia dolor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="Section3">
      <div className="dataSection bg " style={{ backgroundImage: 'url(' + DSBgImage + ')', }}>
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-6"></div>
            <div className="col-lg-6 d-flex justify-content-end">
              <div className="dataSection-text">
                <h3>What we do</h3>
                <p>To be invited to the nearest Cali center and get free physical advice to learn more about the program.</p>
                <div className="progress-item">
                  <p>Breathing</p>
                  <div className="progress-bar-style" data-progress="84" data-bgcolor="#f76d63"><div className="bar-inner">
                    <span>84%</span>
                  </div>
                  </div>
                </div>
                <div className="progress-item">
                  <p>Metabolism</p>
                  <div className="progress-bar-style" data-progress="75" data-bgcolor="#f76d63"><div className="bar-inner" >
                    <span>75%</span>
                  </div>
                  </div>
                </div>
                <div className="progress-item">
                  <p>Flexibility</p>
                  <div className="progress-bar-style" data-progress="90" data-bgcolor="#f76d63"><div className="bar-inner" >
                    <span>90%</span>
                  </div>
                  </div>
                </div>
                <div className="progress-item">
                  <p>Strongness</p>
                  <div className="progress-bar-style" data-progress="78" data-bgcolor="#f76d63"><div className="bar-inner">
                    <span>78%</span>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Trainer />
    <Review />
    <div className="Section4">
      <div className="about-blog-section spad">
        <div className="container">
          <div className="section-title text-center">
            <img src={logo} alt="" />
            <h2>Course benefits</h2>
            <p>Practice Yoga to perfect physical beauty, take care of your soul and enjoy life more fully!</p>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="blog-item">
                <img src={image1} alt="" />
                <div className="bi-text">
                  <h2><a href="single-blog.html">Yoga for Slim Physique</a></h2>
                  <p>Regular practice with breathing tech-niques in Yoga will help you get a toned body, this is the perfect choice</p>
                </div>
                <div className="bi-footer">
                  <div className="bi-cata">Health &amp; Beauty</div>
                  <div className="bi-social">
                    <a href="#"><i className="bi bi-facebook"></i></a>
                    <a href="#"><i className="bi bi-instagram"></i></a>
                    <a href="#"><i className="bi bi-twitter"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="blog-item">
                <img src={image2} alt="" />
                <div className="bi-text">
                  <h2><a href="single-blog.html">The Perfect Dose</a></h2>
                  <p>To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain</p>
                </div>
                <div className="bi-footer">
                  <div className="bi-cata">Health &amp; Beauty</div>
                  <div className="bi-social">
                    <a href="#"><i className="bi bi-facebook"></i></a>
                    <a href="#"><i className="bi bi-instagram"></i></a>
                    <a href="#"><i className="bi bi-twitter"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="blog-item">
                <img src={image3} alt="" />
                <div className="bi-text">
                  <h2><a href="single-blog.html">Flexible Body</a></h2>
                  <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis prae-sentium voluptatum deleniti</p>
                </div>
                <div className="bi-footer">
                  <div className="bi-cata">Health &amp; Beauty</div>
                  <div className="bi-social">
                    <a href="#"><i className="bi bi-facebook"></i></a>
                    <a href="#"><i className="bi bi-instagram"></i></a>
                    <a href="#"><i className="bi bi-twitter"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    <GoBackToTop />
  </>)
}
export default About;