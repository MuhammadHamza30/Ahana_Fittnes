import TopBar from "../Component/TopBar";
import Navbar from "../Component/Navbar";
import TopBackground from '../assets/Images/page-top-bg.jpg'
import Footer from '../Component/Footer'
import GoBackToTop from '../Component/GoBackToTop'
import image1 from '../assets/Images/1_3.jpg'
import image2 from '../assets/Images/2_1.jpg'
import image3 from '../assets/Images/3_4.jpg'
import image4 from '../assets/Images/11.jpg'
import image5 from '../assets/Images/5.jpg.Webp'
import image6 from '../assets/Images/6.jpg.Webp'
import image7 from '../assets/Images/7.jpg.Webp'
import image8 from '../assets/Images/8.jpg.Webp'
import '../Css/App.css'


function OurEvent() {
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
                <h2>All Event</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Section2">
        <div className="container">
          <div className="event-filter-warp">
            <div className="row">
              <div className="col-xl-3">
                <p>Showing 8 classes of 30 classes</p>
              </div>
              <div className="col-xl-9">
                <form className="event-filter-form">
                  <div className="ef-item">
                    <input type="text" placeholder="Event Date" className="event-date hasDatepicker" id="dp1725887307182" />
                    <i className="material-icons">event_available</i>
                  </div>
                  <div className="ef-item">
                    <input type="text" placeholder="Search" />
                    <i className="material-icons">search</i>
                  </div>
                  <div className="ef-item">
                    <input type="text" placeholder="Location" />
                    <i className="material-icons">map</i>
                  </div>
                  <button className="site-btn sb-gradient">Find Event</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="div Section3">
        <div className="events-page-section spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="event-item">
                  <div className="ei-img">
                    <img src={image1} alt="" />
                  </div>
                  <div className="ei-text">
                    <h4><a href="event-details.html">Lole White Yoga Tour</a></h4>
                    <ul>
                      <li><i className="bi bi-person-fill" />Kelly Alexander</li>
                      <li><i className="bi bi-calendar-check" />15 January, 2019</li>
                      <li><i className="bi bi-map-fill" />184 Main Collins Street</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="event-item">
                  <div className="ei-img">
                    <img src={image2} alt="" />
                  </div>
                  <div className="ei-text">
                    <h4>Free Yoga Madrid</h4>
                    <ul>
                      <li><i className="bi bi-person-fill" />Kelly Alexander</li>
                      <li><i className="bi bi-calendar-check" />15 January, 2019</li>
                      <li><i className="bi bi-map-fill" />184 Main Collins Street</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="event-item">
                  <div className="ei-img">
                    <img src={image3} alt="" />
                  </div>
                  <div className="ei-text">
                    <h4>One Love Dallas</h4>
                    <ul>
                      <li><i className="bi bi-person-fill" />Kelly Alexander</li>
                      <li><i className="bi bi-calendar-check" />15 January, 2019</li>
                      <li><i className="bi bi-map-fill" />184 Main Collins Street</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="event-item">
                  <div className="ei-img">
                    <img src={image4} alt="" />
                  </div>
                  <div className="ei-text">
                    <h4>Get on Your Mat</h4>
                    <ul>
                      <li><i className="bi bi-person-fill" />Kelly Alexander</li>
                      <li><i className="bi bi-calendar-check" />15 January, 2019</li>
                      <li><i className="bi bi-map-fill" />184 Main Collins Street</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="event-item">
                  <div className="ei-img">
                    <img src={image5} alt="" />
                  </div>
                  <div className="ei-text">
                    <h4>Solstice in Times Square</h4>
                    <ul>
                      <li><i className="bi bi-person-fill" />Kelly Alexander</li>
                      <li><i className="bi bi-calendar-check" />15 January, 2019</li>
                      <li><i className="bi bi-map-fill" />184 Main Collins Street</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="event-item">
                  <div className="ei-img">
                    <img src={image6} alt="" />
                  </div>
                  <div className="ei-text">
                    <h4>Athleta Mind Over</h4>
                    <ul>
                      <li><i className="bi bi-person-fill" />Kelly Alexander</li>
                      <li><i className="bi bi-calendar-check" />15 January, 2019</li>
                      <li><i className="bi bi-map-fill" />184 Main Collins Street</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="event-item">
                  <div className="ei-img">
                    <img src={image7} alt="" />
                  </div>
                  <div className="ei-text">
                    <h4>Mega-Yoga Classes</h4>
                    <ul>
                      <li><i className="bi bi-person-fill" />Kelly Alexander</li>
                      <li><i className="bi bi-calendar-check" />15 January, 2019</li>
                      <li><i className="bi bi-map-fill" />184 Main Collins Street</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="event-item">
                  <div className="ei-img">
                    <img src={image8} alt="" />
                  </div>
                  <div className="ei-text">
                    <h4>Yoga Festivals</h4>
                    <ul>
                      <li><i className="bi bi-person-fill" />Kelly Alexander</li>
                      <li><i className="bi bi-calendar-check" />15 January, 2019</li>
                      <li><i className="bi bi-map-fill" />184 Main Collins Street</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="site-pagination pt-3">
              <a href="#" className="active">1</a>
              <a href="#">2</a>
              <a href="#"><i className="bi bi-chevron-right"/></a>
            </div>
          </div>
        </div></div>
      <Footer />
      <GoBackToTop />
    </>)
}
export default OurEvent;

