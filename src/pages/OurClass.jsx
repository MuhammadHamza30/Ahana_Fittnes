import TopBar from "../Component/TopBar";
import Navbar from "../Component/Navbar";
import TopBackground from '../assets/Images/page-top-bg.jpg'
import Footer from '../Component/Footer'
import GoBackToTop from '../Component/GoBackToTop'
import '../Css/nice-select.css'
import 'jquery-nice-select/js/jquery.nice-select.min.js'
import sidebarImagr1 from '../assets/Images/1_3.jpg'
import sidebarImagr2 from '../assets/Images/2_1.jpg'
import auther1 from '../assets/Images/3_1.jpg'
import auther2 from '../assets/Images/1_2.jpg'
import classes1 from '../assets/Images/1_3.jpg'
import classes2 from '../assets/Images/2_4.jpg'
import classes3 from '../assets/Images/3_2.jpg'
import videoImage from '../assets/Images/video.jpg'
import playIcon from '../assets/Images/play.png'


function OurClass() {

  $(document).ready(function () {
    $('.popular-classes-widget').owlCarousel({
      loop: true,
      nav: false,
      items: 1,
      autoplay: true
    });

    $('#language').niceSelect();
    $("select").niceSelect();

  });


  return (<>
    <TopBar />
    <div className="Section1">
      <Navbar />
      <div className="page-top-section bg" data-setbg="../assets/Images/page-top-bg.jpg"
        style={{ backgroundImage: 'url(' + TopBackground + ')' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-7 m-auto text-white py-5">
              <h2>Our Classes</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="Section2">
      <div className="classes-page-section spad overflow-hidden">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="classes-top">
                <div className="row">
                  <div className="col-md-6">
                    <p>Showing 8 classes of 30 classes</p>
                  </div>
                  <div className="col-md-6">
                    <select className="circle-select" style={{ display: "none" }}>
                      <option data-display="Default Sorting">Default Sorting</option>
                      <option value="2">Oldest</option>
                      <option value="2">Newest</option>
                    </select>
                    <div className="nice-select circle-select" tabindex="0">
                      <span className="current">Default Sorting</span>
                      <ul className="list">
                        <li data-value="Default Sorting" data-display="Default Sorting" className="option selected">Default Sorting</li>
                        <li data-value="2" className="option">Oldest</li>
                        <li data-value="2" className="option">Newest</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="classes-item-warp">
                    <div className="classes-item">
                      <div className="ci-img">
                        <img src={classes1} alt="" />
                      </div>
                      <div className="ci-text">
                        <h4>Artistic Yoga</h4>
                        <div className="ci-metas">
                          <div className="ci-meta"><i className="bi bi-calendar"></i>Mon, Wed, Fri</div>
                          <div className="ci-meta"><i i className="bi bi-alarm" ></i>06:30pm - 07:45pm</div>
                        </div>
                        <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis</p>
                      </div>
                      <div className="ci-bottom">
                        <div className="ci-author">
                          <img src={auther1} alt="" />
                          <div className="author-text">
                            <h6>Victoria Webb</h6>
                            <p>Yoga Trainer</p>
                          </div>
                        </div>
                        <a href="" className="site-btn sb-gradient">book now</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="classes-item-warp">
                    <div className="classes-item">
                      <div className="ci-img">
                        <img src={classes2} alt="" />
                      </div>
                      <div className="ci-text">
                        <h4>Traditional Hatha</h4>
                        <div className="ci-metas">
                          <div className="ci-meta"><i className="bi bi-calendar"></i>Mon, Wed, Fri</div>
                          <div className="ci-meta"><i i className="bi bi-alarm" ></i>06:30pm - 07:45pm</div>
                        </div>
                        <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis</p>
                      </div>
                      <div className="ci-bottom">
                        <div className="ci-author">
                          <img src={auther2} alt="" />
                          <div className="author-text">
                            <h6>Victoria Webb</h6>
                            <p>Yoga Trainer</p>
                          </div>
                        </div>
                        <a href="" className="site-btn sb-gradient">book now</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="classes-item-warp">
                    <div className="classes-item">
                      <div className="ci-img">
                        <img src={classes3} alt="" />
                      </div>
                      <div className="ci-text">
                        <h4>Yoga Therapy</h4>
                        <div className="ci-metas">
                          <div className="ci-meta"><i className="bi bi-calendar"></i>Mon, Wed, Fri</div>
                          <div className="ci-meta"><i i className="bi bi-alarm" ></i>06:30pm - 07:45pm</div>
                        </div>
                        <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis</p>
                      </div>
                      <div className="ci-bottom">
                        <div className="ci-author">
                          <img src={auther1} alt="" />
                          <div className="author-text">
                            <h6>Victoria Webb</h6>
                            <p>Yoga Trainer</p>
                          </div>
                        </div>
                        <a href="" className="site-btn sb-gradient">book now</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="classes-item-warp">
                    <div className="classes-item">
                      <div className="ci-img">
                        <img src={classes1} alt="" />
                      </div>
                      <div className="ci-text">
                        <h4>Artistic Yoga</h4>
                        <div className="ci-metas">
                          <div className="ci-meta"><i className="bi bi-calendar"></i>Mon, Wed, Fri</div>
                          <div className="ci-meta"><i i className="bi bi-alarm" ></i>06:30pm - 07:45pm</div>
                        </div>
                        <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis</p>
                      </div>
                      <div className="ci-bottom">
                        <div className="ci-author">
                          <img src={auther2} alt="" />
                          <div className="author-text">
                            <h6>Victoria Webb</h6>
                            <p>Yoga Trainer</p>
                          </div>
                        </div>
                        <a href="" className="site-btn sb-gradient">book now</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="classes-item-warp">
                    <div className="classes-item">
                      <div className="ci-img">
                        <img src={classes2} alt="" />
                      </div>
                      <div className="ci-text">
                        <h4>Traditional Hatha</h4>
                        <div className="ci-metas">
                          <div className="ci-meta"><i className="bi bi-calendar"></i>Mon, Wed, Fri</div>
                          <div className="ci-meta"><i className="bi bi-alarm"   ></i>06:30pm - 07:45pm</div>
                        </div>
                        <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis</p>
                      </div>
                      <div className="ci-bottom">
                        <div className="ci-author">
                          <img src={auther1} alt="" />
                          <div className="author-text">
                            <h6>Victoria Webb</h6>
                            <p>Yoga Trainer</p>
                          </div>
                        </div>
                        <a href="" className="site-btn sb-gradient">book now</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="classes-item-warp">
                    <div className="classes-item">
                      <div className="ci-img">
                        <img src={classes3} alt="" />
                      </div>
                      <div className="ci-text">
                        <h4>Yoga Therapy</h4>
                        <div className="ci-metas">
                          <div className="ci-meta"><i className="bi bi-calendar"></i>Mon, Wed, Fri</div>
                          <div className="ci-meta"><i className="bi bi-alarm"   ></i>06:30pm - 07:45pm</div>
                        </div>
                        <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis</p>
                      </div>
                      <div className="ci-bottom">
                        <div className="ci-author">
                          <img src={auther1} alt="" />
                          <div className="author-text">
                            <h6>Victoria Webb</h6>
                            <p>Yoga Trainer</p>
                          </div>
                        </div>
                        <a href="" className="site-btn sb-gradient">book now</a>
                      </div>
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
            <div className="col-lg-3 col-md-5 col-sm-8 sidebar">
              <div className="sb-widget">
                <h2 className="sb-title">Search Classes</h2>
                <form className="classes-filter">
                  <select className="circle-select" >
                    <option data-display="Choose Category">Choose Category</option>
                    <option value="1">Category 1</option>
                    <option value="2">Category 2</option>
                  </select>
                  <div className="nice-select circle-select" tabindex="0">
                    <span className="current">Choose Category</span>
                    <ul className="list">
                      <li data-value="Choose Category" data-display="Choose Category" className="option selected">Choose Category</li>
                      <li data-value="1" className="option">Category 1</li>
                      <li data-value="2" className="option">Category 2</li>
                    </ul>
                  </div>
                  <select className="circle-select" >
                    <option data-display="Choose Level">Choose Level</option>
                    <option value="1">Level 1</option>
                    <option value="2">Level 2</option>
                  </select><div className="nice-select circle-select" tabindex="0">
                    <span className="current">Choose Level</span>
                    <ul className="list">
                      <li data-value="Choose Level" data-display="Choose Level" className="option selected">Choose Level</li>
                      <li data-value="1" className="option">Level 1</li>
                      <li data-value="2" className="option">Level 2</li>
                    </ul>
                  </div>
                  <select className="circle-select" >
                    <option data-display="Choose Trainer">Choose Trainer</option>
                    <option value="2">Name</option>
                  </select>
                  <div className="nice-select circle-select" tabindex="0">
                    <span className="current">Choose Trainer</span>
                    <ul className="list">
                      <li data-value="Choose Trainer" data-display="Choose Trainer" className="option selected">Choose Trainer</li>
                      <li data-value="2" className="option">Name</li>
                    </ul>
                  </div>
                  <h3>Filter by Day</h3>
                  <div className="cf-cal">
                    <div className="cf-radio">
                      <input type="checkbox" name="sc" id="monday" />
                      <label for="monday">Monday</label>
                    </div>
                    <div className="cf-radio">
                      <input type="checkbox" name="sc" id="tuesday" />
                      <label for="tuesday">Tuesday</label>
                    </div>
                    <div className="cf-radio">
                      <input type="checkbox" name="sc" id="wednesday" />
                      <label for="wednesday">Wednesday</label>
                    </div>
                    <div className="cf-radio">
                      <input type="checkbox" name="sc" id="thurstday" />
                      <label for="thurstday">Thurstday</label>
                    </div>
                  </div>
                  <div className="cf-cal">
                    <div className="cf-radio">
                      <input type="checkbox" name="sc" id="friday" />
                      <label for="friday">Friday</label>
                    </div>
                    <div className="cf-radio">
                      <input type="checkbox" name="sc" id="saturday" />
                      <label for="saturday">Saturday</label>
                    </div>
                    <div className="cf-radio">
                      <input type="checkbox" name="sc" id="sunday" />
                      <label for="sunday">Sunday</label>
                    </div>
                  </div>
                  <div className="clearfix"></div>
                  <button className="site-btn sb-gradient">Filter now</button>
                </form>
              </div>
              <div className="sb-widget">
                <h2 className="sb-title">Popular Classes</h2>
                <div className="popular-classes-widget owl-carousel owl-loaded owl-drag">
                  <div className="owl-stage-outer"><div className="owl-stage" >
                    <div className="owl-item"><div className="pc-item">
                      <div className="pc-thumb ">
                        <img src={sidebarImagr1} alt="" />
                      </div>
                      <div className="pc-text">
                        <h4><a href="#">Yoga Balance</a></h4>
                        <ul>
                          <li><i className="bi bi-calendar"></i>Mon, Wed, Fri</li>
                          <li><i className="bi bi-alarm" />06:30pm - 07:45pm</li>
                          <li><i className="bi bi-person" />Carolyn Berry</li>
                        </ul>
                      </div>
                    </div></div><div className="owl-item"><div className="pc-item">
                      <div className="pc-thumb " >
                        <img src={sidebarImagr2} alt="" />
                      </div>
                      <div className="pc-text">
                        <h4><a href="#">Yoga Balance</a></h4>
                        <ul>
                          <li><i className="bi bi-calendar"></i>Mon, Wed, Fri</li>
                          <li><i className="bi bi-alarm" />06:30pm - 07:45pm</li>
                          <li><i className="bi bi-person" />Carolyn Berry</li>
                        </ul>
                      </div>
                    </div>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
              <div className="sb-widget">
                <div className="sb-video">
                  <img src={videoImage} alt="" />
                  <a href="https://www.youtube.com/watch?v=vgv-hzTl5FA" className="video-popup"><img src={playIcon} alt="" /></a>
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
export default OurClass;