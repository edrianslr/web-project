import React, {useRef} from 'react'
import emailjs from '@emailjs/browser'
import "./contact.css"

const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_9hn6n99', 'template_xhdz5zp', form.current, {
        publicKey: 'kEiY8diEg9L2eHgYw',
      })
      e.target.reset()
  };

  return (
    <section className="contact section" id="contact">
        <h2 className="section_title">Get in Touch</h2>
        <span className="section_subtitle">Contact Me</span>

        <div className="contact_container container grid">
            <div className="contact_content">
                <h3 className="contact_title">Contact Information</h3>

                <div className="contact_info">
                    <div className="contact_card">
                        <i className="bx bx-mail-send contact_card-icon"></i>

                        <h3 className="contact_card-title">Email</h3>
                        <span className="contact_card-data">edriansalazar1@gmail.com</span>

                        <a href="mailto:edriansalazar1@gmail.com" className="contact_button">Write me <i className="bx bx-right-arrow-alt contact_button-icon"></i></a>
                    </div>

                    <div className="contact_card">
                        <i className="bx bxl-whatsapp contact_card-icon"></i>

                        <h3 className="contact_card-title">Whatsapp</h3>
                        <span className="contact_card-data">+63 945 316 4001</span>

                        <a href="https://api.whatsapp.com/send?phone=639453164001&text=Hello, more information!" className="contact_button">Write me <i className="bx bx-right-arrow-alt contact_button-icon"></i></a>
                    </div>

                    <div className="contact_card">
                        <i className="bx bxl-messenger contact_card-icon"></i>

                        <h3 className="contact_card-title">Messenger</h3>
                        <span className="contact_card-data">edrian.salazar.1204</span>

                        <a href="#contact" className="contact_button">Write me <i className="bx bx-right-arrow-alt contact_button-icon"></i></a>
                    </div>
                </div>
            </div>

            <div className="contact_content">
                <h3 className="contact_title">Write me your project</h3>

                <form ref={form} onSubmit={sendEmail} className="contact_form">
                    <div className="contact_form-div">
                        <label className="contact_form-tag">Name</label>
                        <input type="text" name="name" className="contact_form-input" placeholder='Enter your name'/>
                    </div>

                    <div className="contact_form-div">
                        <label className="contact_form-tag">Email</label>
                        <input type="email" name="email" className="contact_form-input" placeholder='example@gmail.com'/>
                    </div>

                    <div className="contact_form-div contact_form-area">
                        <label className="contact_form-tag">Project</label>
                        <textarea name="project"
                        className='contact_form-input' placeholder='Write your project'></textarea>
                    </div>

                    <input type='submit' className="button button--flex" value="Send Message" />
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact