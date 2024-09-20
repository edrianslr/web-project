import React, { useState } from 'react'
import "./services.css"

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  }


  return (
    <section className="services section" id='services'>
      <h2 className="section_title">Services</h2>
      <span className="section_subtitle">What i offer</span>

      <div className="services_container container grid">
        <div className="services_content">
          <i className="uil uil-web-grid services_icon"></i>
          <h3 className="services_title">Product <br /> Designer</h3>

          <span className="services_button" onClick={() => toggleTab(1)}>View More <i className="uil uil-arrow-right services_button-icon"></i></span>

          <div className={toggleState === 1 ? "services_modal active-modal" : "services_modal"}>
            <div className="services_modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times services_modal-close"></i>

              <h3 className="services_modal-title">Product Designer</h3>
              <p className="services_modal-description">Focused on creating functional and aesthetic digital products.</p>

              <ul className="services_modal-services grid">
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">Skilled in user-centered design and prototyping.</p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">Skilled in developing intuitive user interfaces.</p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">Passionate about enhancing user experiences through thoughtful design.</p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">Dedicated to improving user experiences.</p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">Committed to delivering designs that enhance usability.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services_content">
          <i className="uil uil-arrow services_icon"></i>
          <h3 className="services_title">UI/UX <br/> Designer</h3>

          <span className="services_button" onClick={() => toggleTab(2)}>View More <i className="uil uil-arrow-right services_button-icon"></i></span>

          <div className={toggleState === 2 ? "services_modal active-modal" : "services_modal"}>
            <div className="services_modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times services_modal-close"></i>

              <h3 className="services_modal-title">UI/UX Designer</h3>
              <p className="services_modal-description">Dedicated to delivering user-friendly and visually appealing designs for clients and businesses.</p>

              <ul className="services_modal-services grid">
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">Specialize in intuitive user interface development and seamless user experiences.</p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">Expert in web and mobile design, focusing on responsive and accessible layouts.</p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">Craft engaging UX interactions, ensuring smooth navigation and interaction flows.</p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">Provide design mockups and prototypes tailored to client needs, emphasizing aesthetics and functionality.</p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">Passionate about creating digital products that solve problems and enhance user satisfaction.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services_content">
          <i className="uil uil-arrow services_icon"></i>
          <h3 className="services_title">Visual <br/> Designer</h3>

          <span className="services_button" onClick={() => toggleTab(3)}>View More <i className="uil uil-arrow-right services_button-icon"></i></span>

          <div className={toggleState === 3 ? "services_modal active-modal" : "services_modal"}>
            <div className="services_modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times services_modal-close"></i>

              <h3 className="services_modal-title">Visual Designer</h3>
              <p className="services_modal-description">I create visually compelling designs that communicate effectively.</p>

              <ul className="services_modal-services grid">
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">I develop the user interface.</p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">Focused on delivering clear and attractive designs.</p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">Focused on delivering impactful visual solutions.</p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">Dedicated to making creative concepts come to life.</p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">Design and mockups of products for companies.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services