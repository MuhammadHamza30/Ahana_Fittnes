import TopBar from "../Component/TopBar";
import Navbar from "../Component/Navbar";
import TopBackground from '../assets/Images/page-top-bg.jpg'
import Footer from '../Component/Footer'
import GoBackToTop from '../Component/GoBackToTop'
import image1 from '../assets/Images/1.jpg.Webp'
import '../Css/App.css'


function TrainerDetail() {
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
                <h2>Trainer Detail</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Section2">
        <div className="trainer-details-section spad overflow-hidden">
          <div className="container">
            <div className="trainer-details">
              <div className="trainer-info">
                <div className="td-left">
                  <img src={image1} alt="" />
                  <div className="td-social">
                    <a href="#"><i className="bi bi-facebook"></i></a>
                    <a href="#"><i className="bi bi-instagram"></i></a>
                    <a href="#"><i className="bi bi-twitter"></i></a>
                    <a href="#"><i className="bi bi-linkedin"></i></a>
                  </div>
                </div>
                <div className="td-right">
                  <h3>Olivia Richards</h3>
                  <h6>Yoga Trainer</h6>
                  <ul>
                    <li><strong>Experience:</strong><p>8 years</p></li>
                    <li><strong>Email:</strong><p>emily-walker@example.com</p></li>
                    <li><strong>Biography:</strong><p>Certification from the National Institute of Sports Medicine (NASM) USA. 25 years of sports training in the United States, Germany, Hong Kong, Malaysia, Singapore, and now Vietnam at California Fitness &amp; Yoga Centers.</p></li>
                  </ul>
                  <a href="#" className="site-btn sb-gradient">View classes</a>
                </div>
              </div>
              <div className="trainer-details-text">
                <h3>About Yoga</h3>
                <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                <ul>
                  <li><i className="bi bi-check-circle-fill" />Gold Medal for International Yoga Championship 2012.</li>
                  <li><i className="bi bi-check-circle-fill" />Silver Medal of All High Schools Championship and Indian Yoga Club in 2010.</li>
                  <li><i className="bi bi-check-circle-fill" />Gold Medal for Jharkhand State Yoga Championship in 2007.</li>
                  <li><i className="bi bi-check-circle-fill" />Gold Medal for East India Yoga Championship in 2005.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <GoBackToTop />
    </>)
}
export default TrainerDetail;

