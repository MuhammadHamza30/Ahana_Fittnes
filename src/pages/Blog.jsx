import TopBar from "../Component/TopBar";
import Navbar from "../Component/Navbar";
import TopBackground from '../assets/Images/page-top-bg.jpg'
import Footer from '../Component/Footer'
import GoBackToTop from '../Component/GoBackToTop'
import image1 from '../assets/Images/Blog1.jpg'
import image2 from '../assets/Images/Blog2.jpg'
import image3 from '../assets/Images/Blog3.jpg'
import image4 from '../assets/Images/Blog4.jpg'
import image5 from '../assets/Images/Blog5.jpg'
import image6 from '../assets/Images/Blog6.jpg'
import image7 from '../assets/Images/Blog7.jpg'
import image8 from '../assets/Images/Blog8.jpg'
import image9 from '../assets/Images/Blog9.jpg'

import '../Css/App.css'


function Blog() {

  return (
    <>
      <TopBar />
      <div className="Section1">
        <Navbar />
        <div class="page-top-section bg" data-setbg="../assets/Images/page-top-bg.jpg"
          style={{ backgroundImage: 'url(' + TopBackground + ')' }}>
          <div class="container">
            <div class="row">
              <div class="col-lg-7 m-auto text-white py-5">
                <h2>Blog Grid</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section class="events-page-section spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-4 col-md-6">
              <div class="blog-item">
                <img src={image1} alt=""/>
                  <div class="bi-text">
                    <h2><a href="single-blog.html">Yoga for Slim Physique</a></h2>
                    <p>Regular practice with breathing tech-niques in Yoga will help you get a toned body, this is the perfect choice</p>
                  </div>
                  <div class="bi-footer">
                    <div class="bi-cata">Health &amp; Beauty</div>
                    <div class="bi-social">
                      <a href="#"><i class="bi bi-facebook"></i></a>
                      <a href="#"><i class="bi bi-instagram"></i></a>
                      <a href="#"><i class="bi bi-twitter"></i></a>
                    </div>
                  </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="blog-item">
                <img src={image2} alt=""/>
                  <div class="bi-text">
                    <h2><a href="single-blog.html">The Perfect Dose</a></h2>
                    <p>To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain</p>
                  </div>
                  <div class="bi-footer">
                    <div class="bi-cata">Health &amp; Beauty</div>
                    <div class="bi-social">
                      <a href="#"><i class="bi bi-facebook"></i></a>
                      <a href="#"><i class="bi bi-instagram"></i></a>
                      <a href="#"><i class="bi bi-twitter"></i></a>
                    </div>
                  </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="blog-item">
                <img src={image3} alt=""/>
                  <div class="bi-text">
                    <h2><a href="single-blog.html">Flexible Body</a></h2>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis prae-sentium voluptatum deleniti</p>
                  </div>
                  <div class="bi-footer">
                    <div class="bi-cata">Health &amp; Beauty</div>
                    <div class="bi-social">
                      <a href="#"><i class="bi bi-facebook"></i></a>
                      <a href="#"><i class="bi bi-instagram"></i></a>
                      <a href="#"><i class="bi bi-twitter"></i></a>
                    </div>
                  </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="blog-item">
                <img src={image4} alt=""/>
                  <div class="bi-text">
                    <h2><a href="single-blog.html">The Secret to Improving</a></h2>
                    <p>Regular practice with breathing tech-niques in Yoga will help you get a toned body, this is the perfect choice</p>
                  </div>
                  <div class="bi-footer">
                    <div class="bi-cata">Health &amp; Beauty</div>
                    <div class="bi-social">
                      <a href="#"><i class="bi bi-facebook"></i></a>
                      <a href="#"><i class="bi bi-instagram"></i></a>
                      <a href="#"><i class="bi bi-twitter"></i></a>
                    </div>
                  </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="blog-item">
                <img src={image5} alt=""/>
                  <div class="bi-text">
                    <h2><a href="single-blog.html">Movements for Slim</a></h2>
                    <p>To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain</p>
                  </div>
                  <div class="bi-footer">
                    <div class="bi-cata">Health &amp; Beauty</div>
                    <div class="bi-social">
                      <a href="#"><i class="bi bi-facebook"></i></a>
                      <a href="#"><i class="bi bi-instagram"></i></a>
                      <a href="#"><i class="bi bi-twitter"></i></a>
                    </div>
                  </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="blog-item">
                <img src={image6} alt=""/>
                  <div class="bi-text">
                    <h2><a href="single-blog.html">Update Training Trend</a></h2>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis prae-sentium voluptatum deleniti</p>
                  </div>
                  <div class="bi-footer">
                    <div class="bi-cata">Health &amp; Beauty</div>
                    <div class="bi-social">
                      <a href="#"><i class="bi bi-facebook"></i></a>
                      <a href="#"><i class="bi bi-instagram"></i></a>
                      <a href="#"><i class="bi bi-twitter"></i></a>
                    </div>
                  </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="blog-item">
                <img src={image7} alt=""/>
                  <div class="bi-text">
                    <h2><a href="single-blog.html">Have a Toned Body</a></h2>
                    <p>Regular practice with breathing tech-niques in Yoga will help you get a toned body, this is the perfect choice</p>
                  </div>
                  <div class="bi-footer">
                    <div class="bi-cata">Health &amp; Beauty</div>
                    <div class="bi-social">
                      <a href="#"><i class="bi bi-facebook"></i></a>
                      <a href="#"><i class="bi bi-instagram"></i></a>
                      <a href="#"><i class="bi bi-twitter"></i></a>
                    </div>
                  </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="blog-item">
                <img src={image8} alt=""/>
                  <div class="bi-text">
                    <h2><a href="single-blog.html">Rapid Weight Loss</a></h2>
                    <p>To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain</p>
                  </div>
                  <div class="bi-footer">
                    <div class="bi-cata">Health &amp; Beauty</div>
                    <div class="bi-social">
                      <a href="#"><i class="bi bi-facebook"></i></a>
                      <a href="#"><i class="bi bi-instagram"></i></a>
                      <a href="#"><i class="bi bi-twitter"></i></a>
                    </div>
                  </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="blog-item">
                <img src={image9} alt=""/>
                  <div class="bi-text">
                    <h2><a href="single-blog.html">Healthy Eating Mode</a></h2>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis prae-sentium voluptatum deleniti</p>
                  </div>
                  <div class="bi-footer">
                    <div class="bi-cata">Health &amp; Beauty</div>
                    <div class="bi-social">
                      <a href="#"><i class="bi bi-facebook"></i></a>
                      <a href="#"><i class="bi bi-instagram"></i></a>
                      <a href="#"><i class="bi bi-twitter"></i></a>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          <div class="site-pagination pt-3">
            <a href="#" class="active">1</a>
            <a href="#">2</a>
            <a href="#"><i class="bi bi-chevron-right"/></a>
          </div>
        </div>
      </section>
      <Footer />
      <GoBackToTop />
    </>)
}
export default Blog;

