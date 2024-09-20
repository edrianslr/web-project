import React from 'react'
import "./about.css"
import AboutImg from "../../assets/profiles.jpeg"
import CV from '../../assets/Salazar Edrian - Resume.pdf'
import Info from './Info'

function About() {
  return (
    <section className="about section" id="about">
      <h2 className="section_title">About Me</h2>
      <span className='section_subtitle'>My Introduction</span>

      <div className="about_container container grid">
        <img src={AboutImg} className='about_img' />

        <div className="about_data">
          <Info />

          <p className="about_description">I am skilled in developing web systems, with a focus on creating efficient, user-friendly, and scalable solutions. Passionate about web development, I enjoy transforming ideas into functional, well-designed applications.</p>

          <a download="" href={CV} className="button button--flex">Download CV
            <i class="fa-solid fa-file-arrow-down button_icon"></i>
          </a>
        </div>
      </div>
    </section>
  )
}

export default About