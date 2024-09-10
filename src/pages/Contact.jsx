import TopBar from "../Component/TopBar";
import Navbar from "../Component/Navbar";
import TopBackground from '../assets/Images/page-top-bg.jpg'
import Footer from '../Component/Footer'
import GoBackToTop from '../Component/GoBackToTop'
import '../Css/App.css'


function Contact() {

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
                <h2>Contact Us</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Section">
        <div className="contact-page-section spad overflow-hidden">
          <div className="container">
            <div className="contact-map"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d33245.297803635964!2d-73.76987401620775!3d40.704774398815005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1575866843291!5m2!1sen!2sbd" style={{ border: "0" }} allowfullscreen=""></iframe></div>
            <div className="row">
              <div className="col-lg-4">
                <div className="con-info">
                  <h3>Visit the Yoga Ahana</h3>
                  <ul>
                    <li><i className="bi bi-map-fill"/>184 Main Collins Street</li>
                  </ul>
                </div>
                <div className="con-info">
                  <h3>Message Us</h3>
                  <ul>
                    <li><i className="bi bi-phone-fill"/>(965) 436 3274</li>
                    <li><i className="bi bi-envelope-fill"/>ahana.yoga@gmail.com</li>
                  </ul>
                </div>
                <div className="con-info">
                  <h3>Opening Hours</h3>
                  <ul>
                    <li><i className="bi bi-alarm-fill"/>Mon - Fri: 6:30am - 07:45pm</li>
                    <li><i className="bi bi-alarm-fill"/>Sat - Sun: 8:30am - 05:45pm</li>
                  </ul>
                </div>
                <div className="contact-social">
                  <a href="#"><i className="bi bi-facebook"></i></a>
                  <a href="#"><i className="bi bi-instagram"></i></a>
                  <a href="#"><i className="bi bi-twitter"></i></a>
                  <a href="#"><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div className="col-lg-8">
                <form className="singup-form contact-form">
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
                      <a href="#" className="site-btn sb-gradient">Send message</a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <GoBackToTop />
    </>)
}
export default Contact;

