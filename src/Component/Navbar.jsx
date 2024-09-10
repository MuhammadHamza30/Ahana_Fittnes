import React from 'react';
import logo from '../assets/Images/logo.png';
import logo_2 from '../assets/Images/logo-2.png'
import bar from '../assets/Images/bars.png';
import image1 from '../assets/Images/1_4.jpg'
import image2 from '../assets/Images/2_2.jpg'
import image3 from '../assets/Images/3_3.jpg'
import image4 from '../assets/Images/4.jpg'
import image5 from '../assets/Images/5.jpg'
import image6 from '../assets/Images/6_1.jpg'
import icon2 from '../assets/Images/send.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useState } from 'react';


function Navbar() {

  const [showSearch, setShowSearch] = useState(false);

  const toggleSearch = () => {
    document.getElementsByClassName('.page-top-section')
    setShowSearch(!showSearch);
  };

  const [showRightManu, setshowRightManu] = useState(false);

  const togglemanu = () => {
    setshowRightManu(!showRightManu)
  }
  return (
    <>
      <div className='container'>
        <div className="row">
          <div className='col-12'>
            <nav className="navbar navbar-expand-lg">
              <a className="navbar-brand" href="/">
                <img src={logo} alt="Logo" />
              </a>

              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarContent"
                aria-controls="navbarContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarContent">
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="/">HOME</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/About">ABOUT</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="OurClass" id="classesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      CLASSES
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="classesDropdown">
                      <li><a className="dropdown-item" href="/OurClass">Our Classes</a></li>
                      <li><a className="dropdown-item" href="/ClassDetail">Classes Details</a></li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="/OurTrainer" id="trainerDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      TRAINER
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="trainerDropdown">
                      <li><a className="dropdown-item" href="/OurTrainer">Our Trainer</a></li>
                      <li><a className="dropdown-item" href="/TrainerDetail">Trainer Detail</a></li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="OurEvent" id="eventDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      EVENT
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="eventDropdown">
                      <li><a className="dropdown-item" href="/OurEvent">Our Events</a></li>
                      <li><a className="dropdown-item" href="/EventDetail">Event Details</a></li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="blogDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      BLOG
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="blogDropdown">
                      <li><a className="dropdown-item" href="/Blog">Our Blog</a></li>
                      <li><a className="dropdown-item" href="/BlogDetail">Blog Details</a></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/Contact">CONTACT</a>
                  </li>
                </ul>
                <div className="d-none d-lg-flex align-items-center">
                  <a className="bi bi-search mx-2" onClick={toggleSearch}></a>
                  <img className='bar' src={bar} alt="Bar" onClick={togglemanu} />
                </div>

                {showSearch && (
                  <div className="search-overlay">
                    <a className="bi bi-x-lg close-icon" onClick={toggleSearch} />
                    <div className="search-container">
                      <div className="input-wrapper">
                        <input
                          type="text"
                          className="search-input"
                          placeholder="Search"
                        />
                        <a href='/' className="bi bi-search search-icon" ></a>
                      </div>
                    </div>
                  </div>
                )}
                {showRightManu && (
                  <div className="infor-model-warp active" style={{display: "block"}}>
                  <div className="infor-model d-flex align-items-center">
                    <div className="infor-close">
                      <i className="bi bi-x-lg" onClick={togglemanu}/>
                    </div>
                    <div className="infor-middle">
                      <a href="#" className="infor-logo">
                        <img src={logo_2} alt=""/>
                      </a>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                      <div className="insta-imgs">
                        <div className="insta-item">
                          <div className="insta-img">
                            <img src={image1} alt=""/>
                              <div className="insta-hover">
                                <i className="bi bi-instagram"/>
                                <p>ahana.yoga</p>
                              </div>
                          </div>
                        </div>
                        <div className="insta-item">
                          <div className="insta-img">
                            <img src={image2} alt=""/>
                              <div className="insta-hover">
                                <i className="bi bi-instagram"/>
                                <p>ahana.yoga</p>
                              </div>
                          </div>
                        </div>
                        <div className="insta-item">
                          <div className="insta-img">
                            <img src={image3} alt=""/>
                              <div className="insta-hover">
                                <i className="bi bi-instagram"/>
                                <p>ahana.yoga</p>
                              </div>
                          </div>
                        </div>
                        <div className="insta-item">
                          <div className="insta-img">
                            <img src={image4} alt=""/>
                              <div className="insta-hover">
                                <i class="bi bi-instagram"/>
                                <p>ahana.yoga</p>
                              </div>
                          </div>
                        </div>
                        <div className="insta-item">
                          <div className="insta-img">
                            <img src={image5} alt=""/>
                              <div className="insta-hover">
                                <i className="bi bi-instagram"/>
                                <p>ahana.yoga</p>
                              </div>
                          </div>
                        </div>
                        <div className="insta-item">
                          <div className="insta-img">
                            <img src={image6} alt=""/>
                              <div className="insta-hover">
                                <i className="bi bi-instagram"/>
                                <p>ahana.yoga</p>
                              </div>
                          </div>
                        </div>
                      </div>
                      <form className="infor-form">
                        <input type="text" placeholder="Your Email"/>
                          <button><img src={icon2} alt=""/></button>
                      </form>
                      <div className="insta-social">
                        <a href="#"><i className="bi bi-linkedin"/></a>
                        <a href="#"><i className="bi bi-twitter"/></a>
                        <a href="#"><i className="bi bi-instagram"/></a>
                        <a href="#"><i className="bi bi-facebook"/></a>
                      </div>
                    </div>
                  </div>
                </div>)}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar;
