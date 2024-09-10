import auther1 from '../assets/Images/3_1.jpg'
import auther2 from '../assets/Images/1_2.jpg'

function Review(){

  $(document).ready(function(){
    $('.review-slider').owlCarousel({
      loop: true,
      nav: false,
      dots: true,
      items: 1,
      autoplay: true
    })
  });

  return(<>
        <div class="review-section spad set-bg" data-setbg="img/review-bg.jpg" >
          <div class="container">
            <div class="row">
              <div class="col-lg-8 m-auto">
                <div class="review-slider owl-carousel owl-loaded owl-drag">
                  <div class="owl-stage-outer">
                    <div class="owl-stage">
                      <div class="owl-item">
                        <div class="review-item">
                          <div class="ri-img">
                            <img src={auther1} alt="" />
                          </div>
                          <div class="ri-text text-white">
                            <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness.</p>
                            <h4>Denise Thomas</h4>
                            <h6>Designer</h6>
                          </div>
                        </div>
                      </div>
                      <div class="owl-item" >
                        <div class="review-item">
                          <div class="ri-img">
                            <img src={auther2} alt="" />
                          </div>
                          <div class="ri-text text-white">
                            <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness.</p>
                            <h4>Denise Thomas</h4>
                            <h6>Designer</h6>
                          </div>
                        </div>
                      </div>
                      <div class="owl-item">
                        <div class="review-item">
                          <div class="ri-img">
                            <img src={auther1} alt="" />
                          </div>
                          <div class="ri-text text-white">
                            <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness.</p>
                            <h4>Denise Thomas</h4>
                            <h6>Designer</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  </>)
}
export default Review;