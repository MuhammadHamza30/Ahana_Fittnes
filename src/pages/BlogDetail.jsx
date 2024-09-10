import TopBar from "../Component/TopBar";
import Navbar from "../Component/Navbar";
import TopBackground from '../assets/Images/page-top-bg.jpg'
import Footer from '../Component/Footer'
import GoBackToTop from '../Component/GoBackToTop'
import auther1 from '../assets/Images/3_1.jpg'
import auther2 from '../assets/Images/1_2.jpg'
import auther3 from '../assets/Images/Auther3.webp'
import image1 from '../assets/Images/BD@.webp'
import image2 from '../assets/Images/2.jpg.webp'
import CoverImage from '../assets/Images/Blog3.jpg'
import image3 from '../assets/Images/BD1.webp'
import image4 from '../assets/Images/4.jpg.webp'
import image5 from '../assets/Images/3.jpg.webp'
import image7 from '../assets/Images/Blog7.webp'
import image8 from '../assets/Images/Blog8.webp'
import image9 from '../assets/Images/Blog9.webp'
import SliderImage1 from '../assets/Images/1.jpg'
import SliderImage2 from '../assets/Images/2.jpg'
import SliderImage3 from '../assets/Images/3.jpg'
import SliderImage4 from '../assets/Images/4.jpg'
import SliderImage5 from '../assets/Images/5.jpg'
import SliderImage6 from '../assets/Images/6.jpg'


import '../Css/App.css'


function BlogDetail() {

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
                <h2>Blog Grid</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Section2">
        <div className="blog-details-section spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-9">
                <div className="blog-details">
                  <div className="blog-preview">
                    <img src={CoverImage} alt="" />
                  </div>
                  <h2>Yoga Therapy</h2>
                  <div className="blog-meta"><p><i className="bi bi-alarm"></i>120 Mins</p></div>
                  <div className="blog-meta"><p><i className="bi bi-people"></i>250 People Registered</p></div>
                  <p>With so many long-term benefits for health and beauty, many people choose Yoga as a form of daily exercise and sports. However, for those who want to practice Yoga, especially beginners, the choice of location is extremely important. It is impossible to count how many gyms with a variety of quality and prices. Some of the following questions will be answered by Ahana Yoga to help you find the best practice room.</p>
                  <blockquote>Yoga is now one of the most popular practice in the world. It is not simply the movement of the four limbs, Yoga is the product of a massive culture, a special "religion" that brings great value.</blockquote>
                  <div className="blog-gallery">
                    <div className="row">
                      <div className="col-md-4">
                        <img src={image1} alt="" />
                        <img src={image4} alt="" />
                      </div>
                      <div className="col-md-4">
                        <img src={image2} alt="" />
                        <img src={image3} alt="" />
                      </div>
                      <div className="col-md-4">
                        <img src={image5} alt="" />
                      </div>
                    </div>
                  </div>
                  <h3>What reasons do we need to practice Yoga?</h3>
                  <p>Update the trend of 12 yoga exercises to help you lose weight effectively at home, help strengthen your exercise ability. Besides impacting weight loss effects, it also helps to repel diseases, enhance the body's resistance. Have a toned body with just 8 steps of yoga every day, helping to lose weight quickly combined with a reasonable diet.</p>
                  <div className="row">
                    <div className="col-sm-7">
                      <div className="ed-cata"><p><i className="bi bi-tag-fill"/>Health &amp; Beauty</p></div>
                    </div>
                    <div className="col-sm-5 text-left text-sm-right pt-4 pt-sm-0">
                      <div className="ed-social">
                        <a href="#"><i className="bi bi-facebook"></i></a>
                        <a href="#"><i className="bi bi-instagram"></i></a>
                        <a href="#"><i className="bi bi-twitter"></i></a>
                        <a href="#"><i className="bi bi-linkedin"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="blog-author-card">
                  <div className="blog-author">
                    <img src={auther3} alt="" />
                    <div className="ba-text">
                      <h3>Dorothy Newman</h3>
                      <p>Let Yoga bring you perfect body, health and flexibility and a spirit of relaxation. Choose the nearest gym at Ahana Yoga and start this amazing journey!</p>
                      <div className="ba-social">
                        <a href="#"><i className="bi bi-facebook"></i></a>
                        <a href="#"><i className="bi bi-instagram"></i></a>
                        <a href="#"><i className="bi bi-twitter"></i></a>
                        <a href="#"><i className="bi bi-linkedin"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="blog-nav-warp text-center text-sm-left">
                  <div className="row">
                    <div className="col-sm-6 text-start">
                      <a href="#" className="blog-nav bn-prev">
                        <i className="bi bi-chevron-left"/>
                        <h3>Movements for Slim</h3>
                        <p>Previous Post</p>
                      </a>
                    </div>
                    <div className="col-sm-6 text-end">
                      <a href="#" className="blog-nav bn-next">
                        <i className="bi bi-chevron-right"/>
                        <h3>The Perfect Dose</h3>
                        <p>Next Post</p>
                      </a>
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
                    <img src={auther2} className="comment-pic" alt="" />
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
                  <form className="search-form">
                    <input type="text" placeholder="Search" />
                    <button><i className="bi bi-search"/></button>
                  </form>
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
                <div className="sb-widget">
                  <h2 className="sb-title">Categories</h2>
                  <ul className="sb-list">
                    <li><a href="#">Health<span>(5)</span></a></li>
                    <li><a href="#">Nature<span>(7)</span></a></li>
                    <li><a href="#">Beauty<span>(3)</span></a></li>
                    <li><a href="#">Challenge<span>(10)</span></a></li>
                    <li><a href="#">Training<span>(12)</span></a></li>
                    <li><a href="#">Progress<span>(4)</span></a></li>
                  </ul>
                </div>
                <div className="sb-widget">
                  <h2 className="sb-title">Latest post</h2>
                  <div className="latest-post-widget">
                    <div className="lp-item">
                      <div className="lp-thumb ">
                        <img src={image7} alt="" /></div>
                      <div className="lp-text">
                        <h3>Rapid Weight Loss</h3>
                        <p><i className="bi bi-calendar-check"/>June 28, 2019</p>
                      </div>
                    </div>
                    <div className="lp-item">
                      <div className="lp-thumb">
                        <img src={image8} alt="" /></div>
                      <div className="lp-text">
                        <h3>Flexible Body</h3>
                        <p><i className="bi bi-calendar-check"/>June 28, 2019</p>
                      </div>
                    </div>
                    <div className="lp-item">
                      <div className="lp-thumb">
                        <img src={image9} alt="" /></div>
                      <div className="lp-text">
                        <h3>Healthy Eating Mode</h3>
                        <p><i className="bi bi-calendar-check"/>June 28, 2019</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sb-widget">
                  <h2 className="sb-title">Latest post</h2>
                  <div className="insta-widget">
                    <div className="insta-item">
                      <div className="insta-img">
                        <img src={SliderImage1} alt="" />
                        <div className="insta-hover">
                          <i className="bi bi-instagram"></i>
                        </div>
                      </div>
                    </div>
                    <div className="insta-item">
                      <div className="insta-img">
                        <img src={SliderImage2} alt="" />
                        <div className="insta-hover">
                          <i className="bi bi-instagram"></i>
                        </div>
                      </div>
                    </div>
                    <div className="insta-item">
                      <div className="insta-img">
                        <img src={SliderImage3} alt="" />
                        <div className="insta-hover">
                          <i className="bi bi-instagram"></i>
                        </div>
                      </div>
                    </div>
                    <div className="insta-item">
                      <div className="insta-img">
                        <img src={SliderImage4} alt="" />
                        <div className="insta-hover">
                          <i className="bi bi-instagram"></i>
                        </div>
                      </div>
                    </div>
                    <div className="insta-item">
                      <div className="insta-img">
                        <img src={SliderImage5} alt="" />
                        <div className="insta-hover">
                          <i className="bi bi-instagram"></i>
                        </div>
                      </div>
                    </div>
                    <div className="insta-item">
                      <div className="insta-img">
                        <img src={SliderImage6} alt="" />
                        <div className="insta-hover">
                          <i className="bi bi-instagram"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sb-widget">
                  <h2 className="sb-title">Latest post</h2>
                  <div className="sb-tags">
                    <a href="#">Nature</a>
                    <a href="#">Health</a>
                    <a href="#">Yoga</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <GoBackToTop />
    </>
  )
}
export default BlogDetail;

