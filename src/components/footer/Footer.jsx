import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer_container container">
            <h1 className="footer_title">Edrian</h1>

            <ul className="footer_list">
                <li>
                    <a href="#about" className="footer_link">About</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer_link">Projects</a>
                </li>

                <li>
                    <a href="#skills" className="footer_link">Skills</a>
                </li>
            </ul>

            <div className="footer_social">
                <a href="https://www.instagram.com/slz.edrian/" className="footer_social-link" target='_blank'>
                    <i className="bx bxl-instagram"></i>
                </a>

                <a href="https://www.facebook.com/edrian.salazar.1204/" className="footer_social-link" target='_blank'>
                    <i className="bx bxl-facebook"></i>
                </a>

                <a href="https://github.com/edrianslr" className="footer_social-link" target='_blank'>
                    <i className="bx bxl-github"></i>
                </a>
            </div>

            <span className="footer_copy">
                &#169; All rigths reserved
            </span>
        </div>
    </footer>
  )
}

export default Footer