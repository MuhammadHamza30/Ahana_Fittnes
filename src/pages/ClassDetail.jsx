import TopBar from "../Component/TopBar";
import Navbar from "../Component/Navbar";
import TopBackground from '../assets/Images/page-top-bg.jpg'
import Footer from '../Component/Footer'
import GoBackToTop from '../Component/GoBackToTop'
import CoverImage from '../assets/Images/big.jpg'
import auther1 from '../assets/Images/3_1.jpg'
import auther2 from '../assets/Images/1_2.jpg'
import classes1 from '../assets/Images/1_3.jpg'
import classes2 from '../assets/Images/2_4.jpg'
import classes3 from '../assets/Images/3_2.jpg'
import '../Css/App.css'
import about from '../assets/Images/about.png'


function ClassDetail() {

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
                <h2>Class Detail</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Section2">
        <div className="classes-details-section spad overflow-hidden">
          <div className="container">
            <div className="row">
              <div className="col-lg-9">
                <div className="classes-details ">
                  <div className="classes-preview">
                    <img src={CoverImage} alt="" />
                  </div>
                  <div className="row">
                    <div className="col-lg-8">
                      <h2>Yoga Therapy</h2>
                      <div className="cd-meta">
                        <p><i className="bi bi-alarm"/>120 Mins </p></div>
                      <div className="cd-meta">
                        <p><i className="bi bi-people"/>250 People Registered</p></div>
                    </div>
                    <div className="col-lg-4 text-left text-md-right">
                      <div className="cd-price">$29</div>
                    </div>
                  </div>
                  <p>Yoga is the secret of many women in Vietnam and internationally. This is a very popular subject to bring extremely effective exercises to help improve physique effectively and reduce belly fat quickly. In order to have a perfect, toned physique, you need to arrange a suitable exercise regime for yourself as well as a nutritious diet. The following is a series of yoga exercises that help reduce fat effectively. 5 Moves to increase height for dwarf mushrooms. Exercise regularly to get the best results.</p>
                  <div className="row mb-5">
                    <div className="col-lg-5">
                      <img src={about} alt="" />
                    </div>
                    <div className="col-lg-7">
                      <blockquote>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain.</blockquote>
                      <h3>The secret to improving her height to achieve quick results:</h3>
                      <ul>
                        <li><i className="bi bi-facebook" />Combining 30 minutes of practice and 30 jumps high</li>
                        <li><i className="bi bi-instagram" />Apply scientific nutrition, avoid obesity.</li>
                        <li><i className="bi bi-twitter" />Practice sports regularly</li>
                        <li><i className="bi bi-linkedin" />Various versions have evolved over the years</li>
                      </ul>
                    </div>
                  </div>
                  <p>Update the trend of 12 yoga exercises to help you lose weight effectively at home, help strengthen your exercise ability. Besides impacting weight loss effects, it also helps to repel diseases, enhance the body's resistance. Have a toned body with just 8 steps of yoga every day, helping to lose weight quickly combined with a reasonable diet.</p>
                  <div className="row">
                    <div className="col-sm-7">
                      <div className="cd-cata"><p><i className="bi bi-tag-fill"/>Health &amp; Beauty</p></div>
                    </div>
                    <div className="col-sm-5 text-left text-sm-right pt-4 pt-sm-0">
                      <div className="cd-social">
                        <a href="#"><i className="bi bi-facebook"></i></a>
                        <a href="#"><i className="bi bi-instagram"></i></a>
                        <a href="#"><i className="bi bi-twitter"></i></a>
                        <a href="#"><i className="bi bi-linkedin"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="Section3">
                  <h3 className="comment-title">Other Classes</h3>
                  <div className="">
                    <div className="container">
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

                <h3 className="comment-title">Comments</h3>
                <ul className="comment-list">
                  <li>
                    <img src={auther1} className="comment-pic" alt="" />
                    <div className="comment-text">
                      <h3>Beverly Price </h3>
                      <div className="comment-date"><i className="bi bi-alarm"/>June 28, 2019 at 3:18 pm</div>
                      <p>Just practicing yoga for more than 3 months, I dropped from 64 kg to 58 kg. I have used many weight loss measures such as medication, diet, but the effects are slow and low. </p>
                      <a href="#" className="reply"><i className="bi bi-reply-fill"/>Reply</a>
                    </div>
                    <ul className="comment-sub-list">
                      <li>
                        <img src={auther2} className="comment-pic" alt="" />
                        <div className="comment-text">
                          <h3>Jacqueline Watkins</h3>
                          <div className="comment-date"><i className="bi bi-alarm"/>June 28, 2019 at 3:18 pm</div>
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
                      <div className="comment-date"><i className="bi bi-alarm"/>June 28, 2019 at 3:18 pm</div>
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
                      <li><i className="bi bi-map"/>184 Main Collins Street</li>
                      <li><i className="bi bi-calendar-event"/>15 January, 2019</li>
                      <li><i className="bi bi-check2-all"/>Mon, Fri</li>
                      <li><i className="bi bi-alarm"/>06:30pm - 07:45pm</li>
                      <li><i className="bi bi-person"/>Lori Kennedy</li>
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
              </div></div>
          </div>
        </div>
      </div>
      <Footer />
      <GoBackToTop />
    </>)
}
export default ClassDetail;