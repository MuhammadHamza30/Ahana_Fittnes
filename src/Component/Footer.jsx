import Gallery1 from '../assets/Images/1.jpg'
import Gallery2 from '../assets/Images/2.jpg'
import Gallery3 from '../assets/Images/3.jpg'
import Gallery4 from '../assets/Images/4.jpg'
import Gallery5 from '../assets/Images/5.jpg'
import Gallery6 from '../assets/Images/6.jpg'
import logo_1 from "../assets/Images/logo-3.png"
import sendIcon from '../assets/Images/send.png'

function Footer() {

  $(document).ready(function(){

    $('.gallery-slider').owlCarousel({
      loop:true,
      nav:false,
      autoplay:false,
      items:6,
    })

  })


  return (<>
        <div class="gallery-section">
          <div class="gallery-slider owl-carousel owl-loaded owl-drag">
            <div class="owl-stage-outer"><div class="owl-stage">
              <div class="owl-item">
                <div class="gs-item">
                  <img src={Gallery1} alt="" />
                  <div class="gs-hover">
                    <i class="bi bi-instagram"></i>
                    <p>ahana.yoga</p>
                  </div>
                </div></div>
              <div class="owl-item" >
                <div class="gs-item">
                  <img src={Gallery2} alt="" />
                  <div class="gs-hover">
                    <i class="bi bi-instagram"></i>
                    <p>ahana.yoga</p>
                  </div>
                </div></div>
              <div class="owl-item">
                <div class="gs-item">
                  <img src={Gallery3} alt="" />
                  <div class="gs-hover">
                    <i class="bi bi-instagram"></i>
                    <p>ahana.yoga</p>
                  </div>
                </div></div>
              <div class="owl-item">
                <div class="gs-item">
                  <img src={Gallery4} alt="" />
                  <div class="gs-hover">
                    <i class="bi bi-instagram"></i>
                    <p>ahana.yoga</p>
                  </div>
                </div></div>
              <div class="owl-item">
                <div class="gs-item">
                  <img src={Gallery5} alt="" />
                  <div class="gs-hover">
                    <i class="bi bi-instagram"></i>
                    <p>ahana.yoga</p>
                  </div>
                </div></div>
              <div class="owl-item" >
                <div class="gs-item">
                  <img src={Gallery6} alt="" />
                  <div class="gs-hover">
                    <i class="bi bi-instagram"></i>
                    <p>ahana.yoga</p>
                  </div>
                </div>
              </div>
              <div class="owl-item">
                <div class="gs-item">
                  <img src={Gallery1} alt="" />
                  <div class="gs-hover">
                    <i class="bi bi-instagram"></i>
                    <p>ahana.yoga</p>
                  </div>
                </div></div>
              <div class="owl-item" >
                <div class="gs-item">
                  <img src={Gallery2} alt="" />
                  <div class="gs-hover">
                    <i class="bi bi-instagram"></i>
                    <p>ahana.yoga</p>
                  </div>
                </div></div>
              <div class="owl-item" >
                <div class="gs-item">
                  <img src={Gallery3} alt="" />
                  <div class="gs-hover">
                    <i class="bi bi-instagram"></i>
                    <p>ahana.yoga</p>
                  </div>
                </div></div>
              <div class="owl-item" >
                <div class="gs-item">
                  <img src={Gallery4} alt="" />
                  <div class="gs-hover">
                    <i class="bi bi-instagram"></i>
                    <p>ahana.yoga</p>
                  </div>
                </div></div>
              <div class="owl-item" >
                <div class="gs-item">
                  <img src={Gallery5} alt="" />
                  <div class="gs-hover">
                    <i class="bi bi-instagram"></i>
                    <p>ahana.yoga</p>
                  </div>
                </div></div>
              <div class="owl-item" >
                <div class="gs-item">
                  <img src={Gallery6} alt="" />
                  <div class="gs-hover">
                    <i class="bi bi-instagram"></i>
                    <p>ahana.yoga</p>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
    <footer class="footer-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-sm-6">
            <div class="footer-widget">
              <div class="about-widget">
                <img src={logo_1} alt=""/>
                  <p>Lorem ipsum dolor sit amet, consec-tetur adipiscing elit sed.</p>
                  <ul>
                    <li><i class="bi bi-telephone-fill"/> (965) 436 3274</li>
                    <li><i class="bi bi-envelope-fill"/> ahana.yoga@gmail.com</li>
                    <li><i class="bi bi-map-fill"/> 184 Main Collins Street</li>
                  </ul>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="footer-widget pl-0 pl-lg-5">
              <h2 class="fw-title">Company</h2>
              <ul>
                <li><a href="#">Online Education</a></li>
                <li><a href="#">Gallery</a></li>
                <li><a href="#">Special Issues</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-2 col-sm-6">
            <div class="footer-widget">
              <h2 class="fw-title">About Us</h2>
              <ul>
                <li><a href="#">Our Vision</a></li>
                <li><a href="#">Our Mission</a></li>
                <li><a href="#">Meet The Team</a></li>
                <li><a href="#">Introduce</a></li>
                <li><a href="#">Customer Service</a></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6">
            <div class="footer-widget pl-0 pl-lg-5">
              <h2 class="fw-title">Open time</h2>
              <ul>
                <li><i class="bi bi-alarm"/> Mon - Fri: 6:30am - 07:45pm</li>
                <li><i class="bi bi-alarm"/> Sat - Sun: 8:30am - 05:45pm</li>
              </ul>
              <form class="infor-form">
                <input type="text" placeholder="Your Email"/>
                  <button><img src={sendIcon} alt=""/></button>
              </form>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="row">
            <div class="col-lg-4">
              <div class="footer-social">
                <a href="#"><i class="bi bi-facebook"></i></a>
                <a href="#"><i class="bi bi-instagram"></i></a>
                <a href="#"><i class="bi bi-twitter"></i></a>
                <a href="#"><i class="bi bi-linkedin"></i></a>
              </div>
            </div>
            <div class="col-lg-8 d-flex justify-content-end">
              <div class="copyright">
                Copyright ©2024 All rights reserved | This template is made with <i class="bi bi-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </>)
}
export default Footer;