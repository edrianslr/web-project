import React, { useState } from 'react'
import "./qualification.css"

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
        <h2 className="section_title">Qualification</h2>
        <span className="section_subtitle">My personal journey</span>

        <div className="qualification_container container">
            <div className="qualification_tabs">
                <div className={toggleState === 1 ? "qualification_button qualification_active button--flex" : "qualification_button button--flex"} 
                onClick={() => toggleTab(1)}>
                    <i className="uil uil-graduation-cap qualification_icon"></i> Education
                </div>

                <div className={toggleState === 2 ? "qualification_button qualification_active button--flex" : "qualification_button button--flex"} 
                onClick={() => toggleTab(2)}>
                    <i className="uil uil-briefcase-alt qualification_icon"></i> Experience
                </div>
            </div>

            <div className="qualification_sections">
                <div className={
                    toggleState === 1 ? "qualification_content qualification_content-active" : "qualification_content"
                }>
                    <div className="qualification_data">
                        <div>
                            <h3 className="qualification_title">Bachelor of Science in Information Technology(BSIT)</h3>
                            <span className="qualification_subtitle">CSTC,Inc. - Colloge</span>

                            <div className="qualification_calendar">
                                <i className="uil uil-calendar-alt"></i> 2021 - 2024
                            </div>
                        </div>

                        <div>
                            <span className="qualification_rounder"></span>

                            <span className="qualification_line"></span>
                        </div>
                    </div>

                    <div className="qualification_data">
                        <div></div>

                        <div>
                            <span className="qualification_rounder"></span>

                            <span className="qualification_line"></span>
                        </div>

                        <div>
                            <h3 className="qualification_title">Information and Communication, Technologies(ICTS)</h3>
                            <span className="qualification_subtitle">MSEUFC,Inc. - Junior High</span>

                            <div className="qualification_calendar">
                                <i className="uil uil-calendar-alt"></i> 2018 - 2020
                            </div>
                        </div>
                    </div>

                    <div className="qualification_data">
                        <div>
                            <h3 className="qualification_title">Information and Communication, Technologies(ICTS)</h3>
                            <span className="qualification_subtitle">LINHS - High School</span>

                            <div className="qualification_calendar">
                                <i className="uil uil-calendar-alt"></i> 2014 - 2018
                            </div>
                        </div>

                        <div>
                            <span className="qualification_rounder"></span>

                            <span className="qualification_line"></span>
                        </div>
                    </div>

                    <div className="qualification_data">
                        <div></div>

                        <div>
                            <span className="qualification_rounder"></span>

                            <span className="qualification_line"></span>
                        </div>

                        <div>
                            <h3 className="qualification_title">Sto. Cristo Elementary School</h3>
                            <span className="qualification_subtitle">Elementary</span>

                            <div className="qualification_calendar">
                                <i className="uil uil-calendar-alt"></i> 2008 - 2014
                            </div>
                        </div>
                    </div>
                </div>

                <div className={
                    toggleState === 2 ? "qualification_content qualification_content-active" : "qualification_content"
                }>
                    <div className="qualification_data">
                        <div>
                            <h3 className="qualification_title">Fresh Graduate</h3>
                            <span className="qualification_subtitle"></span>

                            <div className="qualification_calendar">
                                <i className="uil uil-calendar-alt"></i> Present
                            </div>
                        </div>

                        <div>
                            <span className="qualification_rounder"></span>

                            <span className="qualification_line"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification