import Navbar from "../Component/Navbar";
import TopBar from "../Component/TopBar";
import image1 from '../assets/Images/1.png';
import image2 from '../assets/Images/2.png';
import image3 from '../assets/Images/3.png';
import arrows_buttom from '../assets/Images/arrows-buttom.png'
import logo from '../assets/Images/logo-icon.png'
import about from '../assets/Images/about.png'
import about1 from '../assets/Images/about-1.png'
import about2 from '../assets/Images/about-2.png'
import about3 from '../assets/Images/about-3.png'
import auther1 from '../assets/Images/3_1.jpg'
import auther2 from '../assets/Images/1_2.jpg'
import classes1 from '../assets/Images/1_3.jpg'
import classes2 from '../assets/Images/2_4.jpg'
import classes3 from '../assets/Images/3_2.jpg'
import event1 from '../assets/Images/1_3.jpg'
import event2 from '../assets/Images/2_1.jpg'
import event3 from '../assets/Images/3_4.jpg'
import videoImage from '../assets/Images/video.jpg'
import playIcon from '../assets/Images/play.png'
import '../Css/owl.carousel.min.css'
import '../Css/owl.theme.default.min.css'
import '../Js/owl.carousel.min.js'
import Review from "../Component/Review.jsx";
import Trainer from "../Component/Trainer.jsx";
import Footer from "../Component/Footer.jsx";
import GoBackToTop from "../Component/GoBackToTop.jsx";


function Home() {

  $(document).ready(function () {

    $('.hero-slider').owlCarousel({
      loop: true,
      nav: false,
      dots: true,
      mouseDrag: false,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      items: 1,
      autoplay: true,
      smartSpeed: 1000,
    });


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
        },
        1170: {
          items: 3,
        }
      },
    });


  });


  return (
    <>
      <TopBar />
      <div className="Section1">
        <div className="hero-section">
          <Navbar />
          <div className="hero-social-warp">
            <div className="hero-social">
              <a href="#"><i className="bi bi-facebook" /></a>
              <a href="#"><i className="bi bi-instagram" /></a>
              <a href="#"><i className="bi bi-twitter" /></a>
              <a href="#"><i className="bi bi-linkedin" /></a>
            </div>
          </div>
          <div className="arrow-buttom">
            <img src={arrows_buttom} alt="" />
          </div>
          <div className="hero-slider owl-carousel owl-loaded">
            <div className="owl-stage-outer">
              <div className="owl-stage"
                style={{ transform: "translate3d(-4317px, 0px, 0px)", transition: "all", width: " 7556px" }}>
                <div className="owl-item" style={{ width: "1079.33px" }}>
                  <div className="hs-item">
                    <div className="hs-style-1 text-center">
                      <img src={image1} alt="" />
                    </div>
                  </div>
                </div>
                <div className="owl-item" style={{ width: "1079.33px" }}>
                  <div className="hs-item">
                    <div className="hs-style-2">
                      <div className="container-fluid h-100">
                        <div className="row h-100">
                          <div className="col-lg-6 h-100 d-none d-lg-flex align-items-xl-end align-items-lg-center">
                            <div className="hs-img">
                              <img src={image2} alt="" />
                            </div>
                          </div>
                          <div className="col-lg-6 d-flex align-items-center">
                            <div className="hs-text-warp">
                              <div className="hs-text">
                                <h2>Get slim and toned with yoga</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nos-trud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                                <div className="site-btn sb-white">Register now</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="owl-item " style={{ width: "1079.33px" }}>
                  <div className="hs-item">
                    <div className="hs-style-3 text-center">
                      <div className="container">
                        <div className="hs-text">
                          <h2>Reduce your stress</h2>
                          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi.</p>
                          <h className="site-btn sb-white">Register now</h>
                        </div>
                      </div>
                      <div className="hs-img">
                        <img src={image3} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Section2">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center py-5">
              <img src={logo} className="img-fluid" alt="" srcset="" />
              <h1>Welcome to Ahana</h1>
              <p>Practice Yoga to perfect physical beauty, take care of your soul and enjoy life more fully!</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="">
                <img src={about} className="img-fluid" alt="" srcset="" />
              </div>
            </div>
            <div className="col-lg-6 ">
              <ul className="section2_list">
                <li className="">
                  <div className="">
                    <img src={about1} className="img-fluid " alt="" srcset="" />
                  </div>
                  <div className="mx-2">
                    <h3>
                      Full Rejuvenation</h3>
                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <img src={about2} className="img-fluid" alt="" srcset="" /></div>
                  <div className="mx-2">
                    <h3>Extension of Spring
                    </h3>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem a cusantium doloremque.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <img src={about3} alt="" className="img-fluid" srcset="" /></div>
                  <div className="mx-2">
                    <h3>Against Aging
                    </h3>
                    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit
                    </p>
                  </div>
                </li>
                <li>
                  <button className="AboutButton" type="button">EXPLORE MORE</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="Section3">
        <div className="classes-section spad">
          <div className="container">
            <div className="section-title text-center">
              <img src={logo} alt="" />
              <h2>Popular Classes</h2>
              <p>Practice Yoga to perfect physical beauty, take care of your soul and enjoy life more fully!</p>
            </div>
            <div className="classes-slider owl-carousel owl-loaded owl-drag">
              <div className="owl-stage-outer">
                <div className="owl-stage">
                  <div className="owl-item ">
                    <div className="classes-item">
                      <div className="ci-img">
                        <img src={classes1} alt="" />
                      </div>
                      <div className="ci-text">
                        <h4><a href="classes-details.html">Yoga Therapy</a></h4>
                        <div className="ci-metas">
                          <div className="ci-meta"><i className="bi bi-calendar-event"/>Mon, Wed, Fri</div>
                          <div className="ci-meta"><i className="bi bi-alarm"/>06:30pm - 07:45pm</div>
                        </div>
                        <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis</p>
                      </div>
                      <div className="ci-bottom">
                        <div className="ci-author">
                          <div className="">
                            <img src={auther1} className="img-fluid" alt="" />
                          </div>
                          <div className="author-text">
                            <h6>Victoria Webb</h6>
                            <p>Yoga Trainer</p>
                          </div>
                        </div>
                        <button className="class_btn">book now</button>
                      </div>
                    </div>
                  </div>
                  <div className="owl-item">
                    <div className="classes-item">
                      <div className="ci-img">
                        <img src={classes2} alt="" />
                      </div>
                      <div className="ci-text">
                        <h4><a href="classes-details.html">Traditional Hatha</a></h4>
                        <div className="ci-metas">
                          <div className="ci-meta"><i className="bi bi-calendar-event"/>Mon, Wed, Fri</div>
                          <div className="ci-meta"><i className="bi bi-alarm"/>06:30pm - 07:45pm</div>
                        </div>
                        <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis</p>
                      </div>
                      <div className="ci-bottom">
                        <div className="ci-author">
                          <div>
                            <img src={auther2} className="img-fluid" alt="" /></div>
                          <div className="author-text">
                            <h6>Victoria Webb</h6>
                            <p>Yoga Trainer</p>
                          </div>
                        </div>
                        <button className="class_btn">book now</button>
                      </div>
                    </div>
                  </div>
                  <div className="owl-item">
                    <div className="classes-item">
                      <div className="ci-img">
                        <img src={classes3} alt="" />
                      </div>
                      <div className="ci-text">
                        <h4><a href="classes-details.html">Artistic Yoga</a></h4>
                        <div className="ci-metas">
                          <div className="ci-meta"><i className="bi bi-calendar-event"/>Mon, Wed, Fri</div>
                          <div className="ci-meta"><i className="bi bi-alarm"/>06:30pm - 07:45pm</div>
                        </div>
                        <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis</p>
                      </div>
                      <div className="ci-bottom">
                        <div className="ci-author">
                          <div className="img-fluid">
                            <img src={auther1} alt="" /></div>
                          <div className="author-text">
                            <h6>Victoria Webb</h6>
                            <p>Yoga Trainer</p>
                          </div>
                        </div>
                        <button className="class_btn">book now</button>
                      </div>
                    </div>
                  </div>
                  <div className="owl-item">
                    <div className="classes-item">
                      <div className="ci-img">
                        <img src={classes2} alt="" />
                      </div>
                      <div className="ci-text">
                        <h4><a href="">Traditional Hatha</a></h4>
                        <div className="ci-metas">
                          <div className="ci-meta"><i className="bi bi-calendar-event"/>Mon, Wed, Fri</div>
                          <div className="ci-meta"><i className="bi bi-alarm"/>06:30pm - 07:45pm</div>
                        </div>
                        <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis</p>
                      </div>
                      <div className="ci-bottom">
                        <div className="ci-author">
                          <div>
                            <img src={auther2} className="img-fluid" alt="" /></div>
                          <div className="author-text">
                            <h6>Victoria Webb</h6>
                            <p>Yoga Trainer</p>
                          </div>
                        </div>
                        <button className="class_btn">book now</button>
                      </div>
                    </div>
                  </div>
                  <div className="owl-item">
                    <div className="classes-item">
                      <div className="ci-img">
                        <img src={classes3} alt="" />
                      </div>
                      <div className="ci-text">
                        <h4><a href="">Yoga Therapy</a></h4>
                        <div className="ci-metas">
                          <div className="ci-meta"><i className="bi bi-calendar-event"/>Mon, Wed, Fri</div>
                          <div className="ci-meta"><i className="bi bi-alarm"/>06:30pm - 07:45pm</div>
                        </div>
                        <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis</p>
                      </div>
                      <div className="ci-bottom">
                        <div className="ci-author">
                          <div>
                            <img src={auther1} className="img-fluid" alt="" /></div>
                          <div className="author-text">
                            <h6>Victoria Webb</h6>
                            <p>Yoga Trainer</p>
                          </div>
                        </div>
                        <button className="class_btn">book now</button>
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
      <div className="Section6">
        <div className="event-section spad">
          <div className="container">
            <div className="section-title text-center">
              <img src="img/icons/logo-icon.png" alt="" />
              <h2>Upcoming Events</h2>
              <p>Practice Yoga to perfect physical beauty, take care of your soul and enjoy life more fully!</p>
            </div>
            <div className="row">
              <div className="col-xl-6">
                <div className="event-video">
                  <img src={videoImage} alt="" />
                  <a href="https://www.youtube.com/watch?v=vgv-hzTl5FA" className="video-popup">
                    <img src={playIcon} alt="" /></a>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="event-item">
                  <div className="ei-img">
                    <img src={event1} alt="" />
                  </div>
                  <div className="ei-text">
                    <h4><a href="#">Lole White Yoga Tour</a></h4>
                    <ul>
                      <li><i className="bi bi-person"/>Kelly Alexander</li>
                      <li><i className="bi bi-calendar-event"/>15 January, 2019</li>
                      <li><i className="bi bi-map"/>184 Main Collins Street</li>
                    </ul>
                  </div>
                </div>
                <div className="event-item">
                  <div className="ei-img">
                    <img src={event2} alt="" />
                  </div>
                  <div className="ei-text">
                    <h4><a href="">Free Yoga Madrid</a></h4>
                    <ul>
                      <li><i className="bi bi-person"/>Kelly Alexander</li>
                      <li><i className="bi bi-calendar-event"/>15 January, 2019</li>
                      <li><i className="bi bi-map"/>184 Main Collins Street</li>
                    </ul>
                  </div>
                </div>
                <div className="event-item">
                  <div className="ei-img">
                    <img src={event3} alt="" />
                  </div>
                  <div className="ei-text">
                    <h4><a href="">One Love Dallas</a></h4>
                    <ul>
                      <li><i className="bi bi-person"/>Kelly Alexander</li>
                      <li><i className="bi bi-calendar-event"/>15 January, 2019</li>
                      <li><i className="bi bi-map"/>184 Main Collins Street</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Section7">
        <div className="pricing-section spad">
          <div className="container">
            <div className="section-title text-center">
              <img src={logo} alt="" />
              <h2>Pricing plans</h2>
              <p>Practice Yoga to perfect physical beauty, take care of your soul and enjoy life more fully!</p>
            </div>
            <div className="row">
              <div className="col-lg-3 col-sm-6">
                <div className="pricing-item begginer">
                  <div className="pi-top">
                    <h4>Begginer</h4>
                  </div>
                  <div className="pi-price">
                    <h3>$59</h3>
                    <p>Per month</p>
                  </div>
                  <ul>
                    <li>Take Up To 7 Classes</li>
                    <li>Available To Anyone</li>
                    <li>Towels Included</li>
                    <li>Never Expires</li>
                  </ul>
                  <a href="#" className="site-btn sb-line-gradient">Get started</a>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="pricing-item entermediate">
                  <div className="pi-top">
                    <h4>Entermediate</h4>
                  </div>
                  <div className="pi-price">
                    <h3>$99</h3>
                    <p>Per month</p>
                  </div>
                  <ul>
                    <li>Take Up To 7 Classes</li>
                    <li>Available To Anyone</li>
                    <li>Towels Included</li>
                    <li>Never Expires</li>
                  </ul>
                  <a href="#" className="site-btn sb-line-gradient">Get started</a>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="pricing-item advanced">
                  <div className="pi-top">
                    <h4>Advanced</h4>
                  </div>
                  <div className="pi-price">
                    <h3>$159</h3>
                    <p>Per month</p>
                  </div>
                  <ul>
                    <li>Take Up To 7 Classes</li>
                    <li>Available To Anyone</li>
                    <li>Towels Included</li>
                    <li>Never Expires</li>
                  </ul>
                  <a href="#" className="site-btn sb-line-gradient">Get started</a>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="pricing-item professional">
                  <div className="pi-top">
                    <h4>Professional</h4>
                  </div>
                  <div className="pi-price">
                    <h3>$199</h3>
                    <p>Per month</p>
                  </div>
                  <ul>
                    <li>Take Up To 7 Classes</li>
                    <li>Available To Anyone</li>
                    <li>Towels Included</li>
                    <li>Never Expires</li>
                  </ul>
                  <a href="#" className="site-btn sb-line-gradient">Get started</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Section8">
        <section className="signup-section spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="signup-map"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d33245.297803635964!2d-73.76987401620775!3d40.704774398815005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1575866843291!5m2!1sen!2sbd" style={{ border: "0" }} allowfullscreen=""></iframe></div>
              </div>
              <div className="col-lg-6">
                <div className="singup-text">
                  <h3>Sign Up for Our Classes</h3>
                  <p>To be invited to the nearest Cali center and get free physical advice to learn more about the program.</p>
                </div>
                <form className="singup-form">
                  <div className="row">
                    <div className="col-md-6">
                      <input type="text" placeholder="First Name" />
                    </div>
                    <div className="col-md-6">
                      <input type="text" placeholder="Last Name" />
                    </div>
                    <div className="col-md-6">
                      <input type="text" placeholder="Your Email" />
                    </div>
                    <div className="col-md-6">
                      <input type="text" placeholder="Phone Number" />
                    </div>
                    <div className="col-md-12">
                      <textarea placeholder="Message"></textarea>
                      <a href="#" className="site-btn sb-gradient">Get started</a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <GoBackToTop />

    </>
  );
}


export default Home;
