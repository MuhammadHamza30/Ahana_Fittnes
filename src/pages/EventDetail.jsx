import TopBar from "../Component/TopBar";
import Navbar from "../Component/Navbar";
import TopBackground from '../assets/Images/page-top-bg.jpg'
import Footer from '../Component/Footer'
import GoBackToTop from '../Component/GoBackToTop'
import auther1 from '../assets/Images/3_1.jpg'
import auther2 from '../assets/Images/1_2.jpg'
import image1 from '../assets/Images/big2.jpg.Webp'
import image2 from '../assets/Images/1_3.jpg'
import image3 from '../assets/Images/2_1.jpg'
import image4 from '../assets/Images/3_4.jpg'
import '../Css/App.css'


function EventDetail() {

  $(document).ready(function () {
    $('.event-other-slider').owlCarousel({
      loop: true,
      nav: true,
      dots: false,
      margin: 0,
      autoplay: true,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2
        },
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
                <h2>Event Detail</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Section2">
        <div className="event-details-section spad overflow-hidden">
          <div className="container">
            <div className="event-preview">
              <img src={image1} alt="" />
            </div>
            <div className="row">
              <div className="col-lg-9">
                <div className="event-details">
                  <div className="row">
                    <div className="col-md-8">
                      <h2>Yoga Therapy</h2>
                      <div className="ed-meta"><p><i className="bi bi-alarm" />120 Mins </p></div>
                      <div className="ed-meta"><p><i className="bi bi-people" />250 People Registered</p></div>
                    </div>
                    <div className="col-md-4 text-end">
                      <div className="ed-note">Advanced</div>
                    </div>
                  </div>
                  <p>Yoga is the secret of many women in Vietnam and internationally. This is a very popular subject to bring extremely effective exercises to help improve physique effectively and reduce belly fat quickly. In order to have a perfect, toned physique, you need to arrange a suitable exercise regime for yourself as well as a nutritious diet. The following is a series of yoga exercises that help reduce fat effectively. 5 Moves to increase height for dwarf mushrooms. Exercise regularly to get the best results.</p>
                  <div className="row mb-5">
                    <div className="col-lg-6">
                      <div className="signup-map"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d33245.297803635964!2d-73.76987401620775!3d40.704774398815005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1575866843291!5m2!1sen!2sbd" style={{ border: "0" }} allowfullscreen=""></iframe></div>
                    </div>
                    <div className="col-lg-6 pt-4 pb-5">
                      <h3>The secret to improving her height to achieve quick results:</h3>
                      <ul>
                        <li><i className="bi bi-check2-all" />Fast and healthy weight loss yoga</li>
                        <li><i className="bi bi-check2-all" />Yoga preserves beauty and youth</li>
                        <li><i className="bi bi-check2-all" /> Yoga repels all diseases</li>
                        <li><i className="bi bi-check2-all" />Yoga brings peace, balance</li>
                        <li><i className="bi bi-check2-all" /> Yoga exercises for beautiful belly slim waist</li>
                      </ul>
                    </div>
                  </div>
                  <p>Update the trend of 12 yoga exercises to help you lose weight effectively at home, help strengthen your exercise ability. Besides impacting weight loss effects, it also helps to repel diseases, enhance the body's resistance. Have a toned body with just 8 steps of yoga every day, helping to lose weight quickly combined with a reasonable diet.</p>
                  <div className="row">
                    <div className="col-lg-7">
                      <div className="ed-cata"><p><i className="bi bi-tag-fill"/>Health &amp; Beauty</p></div>
                    </div>
                    <div className="col-lg-5 text-left text-md-right">
                      <div className="ed-social">
                        <a href="#"><i className="bi bi-facebook"></i></a>
                        <a href="#"><i className="bi bi-instagram"></i></a>
                        <a href="#"><i className="bi bi-twitter"></i></a>
                        <a href="#"><i className="bi bi-linkedin"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="comment-title">Other Classes</h3>
                <div className="event-other-slider owl-carousel owl-loaded owl-drag">
                  <div className="owl-stage-outer">
                    <div className="owl-stage">
                      <div className="owl-item" style={{ width: "435px" }}>
                        <div className="event-item">
                          <div className="ei-img">
                            <img src={image2} alt="" />
                          </div>
                          <div className="ei-text">
                            <h4>Get on Your Mat</h4>
                            <ul>
                              <li><i className="bi bi-person" />Kelly Alexander</li>
                              <li><i className="bi bi-calendar-event" />15 January, 2019</li>
                              <li><i className="bi bi-map" />184 Main Collins Street</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="owl-item" style={{ width: "435px" }}>
                        <div className="event-item">
                          <div className="ei-img">
                            <img src={image3} alt="" />
                          </div>
                          <div className="ei-text">
                            <h4>One Love Dallas</h4>
                            <ul>
                              <li><i className="bi bi-person" />Kelly Alexander</li>
                              <li><i className="bi bi-calendar-event" />15 January, 2019</li>
                              <li><i className="bi bi-map" />184 Main Collins Street</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="owl-item" style={{ width: "435px" }}>
                        <div className="event-item">
                          <div className="ei-img">
                            <img src={image4} alt="" />
                          </div>
                          <div className="ei-text">
                            <h4>Get on Your Mat</h4>
                            <ul>
                              <li><i className="bi bi-person" />Kelly Alexander</li>
                              <li><i className="bi bi-calendar-event" />15 January, 2019</li>
                              <li><i className="bi bi-map" />184 Main Collins Street</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="comment-title">Comments</h3>
                <ul className="comment-list">
                  <li>
                    <img src={auther1} className="comment-pic" alt="" />
                    <div className="comment-text">
                      <h3>Beverly Price </h3>
                      <div className="comment-date"><i className="bi bi-alarm" />June 28, 2019 at 3:18 pm</div>
                      <p>Just practicing yoga for more than 3 months, I dropped from 64 kg to 58 kg. I have used many weight loss measures such as medication, diet, but the effects are slow and low. </p>
                      <a href="#" className="reply"><i className="bi bi-reply-fill"/>Reply</a>
                    </div>
                    <ul className="comment-sub-list">
                      <li>
                        <img src={auther2} className="comment-pic" alt="" />
                        <div className="comment-text">
                          <h3>Jacqueline Watkins</h3>
                          <div className="comment-date"><i className="bi bi-alarm" />June 28, 2019 at 3:18 pm</div>
                          <p>Just practicing yoga for more than 3 months, I dropped from 64 kg to 58 kg. I have used many weight loss measures such as medication, diet, but the effects are slow and low. </p>
                          <a href="#" className="reply"><i className="bi bi-reply-fill"/>Reply</a>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <img src={auther1} className="comment-pic" alt="" />
                    <div className="comment-text">
                      <h3>Lori Gonzales</h3>
                      <div className="comment-date"><i className="bi bi-alarm" />June 28, 2019 at 3:18 pm</div>
                      <p>Just practicing yoga for more than 3 months, I dropped from 64 kg to 58 kg. I have used many weight loss measures such as medication, diet, but the effects are slow and low. </p>
                      <a href="#" className="reply"><i className="bi bi-reply-fill"/>Reply</a>
                    </div>
                  </li>
                </ul>
                <h3 className="comment-title">Leave a Reply</h3>
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
                      <a href="#" className="site-btn sb-gradient">Send message</a>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-lg-3 col-md-5 col-sm-8 sidebar">
                <div className="sb-widget">
                  <h2 className="sb-title">About instructor</h2>
                  <div className="classes-info">
                    <ul>
                      <li><i className="bi bi-map" />184 Main Collins Street</li>
                      <li><i className="bi bi-calendar-event" />15 January, 2019</li>
                      <li><i className="bi bi-check2-all" />Mon, Fri</li>
                      <li><i className="bi bi-alarm" />06:30pm - 07:45pm</li>
                      <li><i className="bi bi-person" />Lori Kennedy</li>
                    </ul>
                  </div>
                </div>
                <div className="sb-widget">
                  <h2 className="sb-title">About instructor</h2>
                  <div className="about-instructor-widget">
                    <img src={auther1} alt="" />
                    <h4>Lori Kennedy</h4>
                    <h6>Yoga Trainer</h6>
                    <p>Yoga &amp; Therapy Certificate of Uttarakhand University</p>
                    <div className="ai-social">
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
        </div>
      </div>
      <Footer />
      <GoBackToTop />
    </>)
}


export default EventDetail;

