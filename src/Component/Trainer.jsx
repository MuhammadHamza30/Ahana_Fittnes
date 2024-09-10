import logo from '../assets/Images/logo-icon.png'
import trainer1 from '../assets/Images/1_1.png'
import trainer2 from '../assets/Images/2_1.png'
import trainer3 from '../assets/Images/3_1.png'

function Trainer(){

  $(document).ready(function(){

    $('.trainer-slider').owlCarousel({
      loop: true,
      nav: true,
      dots: false,
      navText: [' ', ' '],
      autoplay: true,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 1
        },
        992: {
          items: 2,
        }
      },
    });

  })


  return(<>

        <div className="trainer-section overflow-hidden spad">
          <div className="container">
            <div className="section-title text-center">
              <img src={logo} alt="" />
              <h2>Our Trainer Yoga</h2>
              <p>Practice Yoga to perfect physical beauty, take care of your soul and enjoy life more fully!</p>
            </div>
            <div class="trainer-slider owl-carousel owl-loaded owl-drag">
              <div class="owl-stage-outer">
                <div class="owl-stage">
                  <div class="owl-item">
                    <div class="ts-item">
                      <div class="trainer-item">
                        <div class="ti-img">
                          <img src={trainer1} alt="" />
                        </div>
                        <div class="ti-text">
                          <h4>Lori Kennedy</h4>
                          <h6>Yoga Trainer</h6>
                          <p>Yoga &amp; Therapy Certificate of Uttarakhand University Sanskrit</p>
                          <div class="ti-social">
                            <a href="#"><i class="bi bi-facebook"></i></a>
                            <a href="#"><i class="bi bi-instagram"></i></a>
                            <a href="#"><i class="bi bi-twitter"></i></a>
                            <a href="#"><i class="bi bi-linkedin"></i></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="owl-item">
                    <div class="ts-item">
                      <div class="trainer-item">
                        <div class="ti-img">
                          <img src={trainer2} alt="" />
                        </div>
                        <div class="ti-text">
                          <h4>Rebecca James</h4>
                          <h6>Yoga Trainer</h6>
                          <p>Yoga &amp; Therapy Certificate of Uttarakhand University Sanskrit</p>
                          <div class="ti-social">
                            <a href="#"><i class="bi bi-facebook"></i></a>
                            <a href="#"><i class="bi bi-instagram"></i></a>
                            <a href="#"><i class="bi bi-twitter"></i></a>
                            <a href="#"><i class="bi bi-linkedin"></i></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="owl-item">
                    <div class="ts-item">
                      <div class="trainer-item">
                        <div class="ti-img">
                          <img src={trainer3} alt="" />
                        </div>
                        <div class="ti-text">
                          <h4>Lori Kennedy</h4>
                          <h6>Yoga Trainer</h6>
                          <p>Yoga &amp; Therapy Certificate of Uttarakhand University Sanskrit</p>
                          <div class="ti-social">
                            <a href="#"><i class="bi bi-facebook"></i></a>
                            <a href="#"><i class="bi bi-instagram"></i></a>
                            <a href="#"><i class="bi bi-twitter"></i></a>
                            <a href="#"><i class="bi bi-linkedin"></i></a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="owl-nav">
                <button type="button" role="presentation" class="owl-prev"></button>
                <button type="button" role="presentation" class="owl-next"></button>
              </div>
              <div class="owl-dots disabled"></div>
            </div>
          </div>
        </div>

  </>)
}
export default Trainer;