import React, { useState, useRef } from 'react'
import Navbar from '../Component/Navbar'
import Carousel from '../Component/Carousel'
import saelogo from '../Asset/sae.jpg'
import { GiTrophyCup } from "react-icons/gi";
import { CiLocationOn } from "react-icons/ci";
import { TiShoppingBag } from "react-icons/ti";
import { TbWorld } from "react-icons/tb";
import { CiCalendar } from "react-icons/ci";
export default function About() {
    const [activeIndex, setActiveIndex] = useState(null);
    const stagesTimelineRef = useRef(null);
    const detailsRef = useRef(null);
    const prizesRef = useRef(null);
    const reviewsRef = useRef(null);
    const faqsRef = useRef(null);

    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };
    const faqs = [
        {
            question: "How can I participate in this competition?",
            answer: "You can participate in this competition by clicking on the 'Register' button in the top right corner of the opportunity page."
        },
        {
            question: "Is this competition open to students from all universities and courses?",
            answer: "Yes, students from all universities and courses can participate."
        },
        {
            question: "Is there a registration fee for participating in this competition?",
            answer: "No, there is no registration fee for participating in this competition."
        },
        {
            question: "Can I participate individually if I don't have a team?",
            answer: "Yes, you can participate individually."
        }
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <>
            <div className="AboutPage">
                <div className="about-navabar">
                <Navbar />
                </div>
                <div className="Carousel">
                    <Carousel />
                </div>
                <div className="contentSection">
                    <div className="infoSection">
                        <div className="competeInfo">
                            <div className="competeInfoHeading">
                                <img src={saelogo} alt="orgnisationlogo" style={{width: "10%",borderRadius: "25%"}} />
                                <span>
                                    <h1 style={{fontWeight:"bold"}}>SAE - Software Development Track</h1>
                                    <p style={{fontWeight:"bold" , color:"#000000ab"}}>SAE</p>
                                </span>
                            </div>
                            <div className="basicinfo">
                                <ul>
                                    <li><GiTrophyCup />SAE grid 1.0</li>
                                    <li><CiLocationOn />Online</li>
                                    <li><TiShoppingBag /><h6>Upadated on:</h6>12/10/2024</li>
                                    <li><TbWorld />Oficial website</li>
                                    <li>
                                        <button>Coding Challenges</button>
                                        <button>Hackathon</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="infoNav">
                            <ul>
                                <li onClick={() => scrollToSection(stagesTimelineRef)}>Stages and Timeline</li>
                                <li onClick={() => scrollToSection(detailsRef)}>Details</li>
                                <li onClick={() => scrollToSection(prizesRef)}>Prizes</li>
                                <li onClick={() => scrollToSection(reviewsRef)}>Reviews</li>
                                <li onClick={() => scrollToSection(faqsRef)}>FAQs & Discussions</li>
                            </ul>
                        </div>
                        <div className="stageAndTimeline" ref={stagesTimelineRef}>
                            <div className="container">
                                <h1 className="heading">Stages and Timelines</h1>
                                <div className="timeline">
                                    <TimelineItem
                                        date="Aug 24"
                                        day="10"
                                        title="Level 1.1: E-Commerce & Tech Quiz"
                                        content="The Quiz will take place in three slots - 10th, 11th and 12th of August. Participants will receive an email about their respective quiz date and time slot. Every participant will get a set of questions to be answered within 30 minutes. A team will be scored based on the average marks of all team members attempting the quiz round. Please note that it is mandatory for all team members to take the quiz. The quiz will be based on E-Commerce trivia (Reference: https://stories.flipkart.com) and Tech (Technology Awareness + Techstack & Computer Science Fundamentals)."
                                        startDate="10 Aug 24, 12:00 PM IST"
                                        endDate="12 Aug 24, 08:00 PM IST"
                                    />
                                    <TimelineItem
                                        date="Aug 24"
                                        day="16"
                                        title="Level 1.2: Qualifier Quiz"
                                        content="All the qualifying teams from Level 1.1 will move to Level 1.2. Every participant will get a set of questions to be answered within 30 minutes. Participants will be scored basis Accuracy, Speed & Start Time. Please note that it is mandatory for all team members to take the Assessment. A team will be scored based on the average marks of all team members attempting the assessment. The Assessment will be based on E-Commerce trivia (Reference: https://stories.flipkart.com) and Tech (Technology Awareness + Techstack & Computer Science Fundamentals)."
                                        startDate="16 Aug 24, 12:00 PM IST"
                                        endDate="18 Aug 24, 08:00 PM IST"
                                    />
                                    <TimelineItem
                                        date="Aug 24"
                                        day="17"
                                        title="Level 2: Submission Round"
                                        content="Qualifying teams will work on the Idea Submission and will develop an Idea Brief. They will be able to make submissions until the deadline for this round anytime during the challenge window."
                                        startDate="17 Aug 24, 03:00 PM IST"
                                        endDate="25 Aug 24, 11:59 PM IST"
                                    />
                                    <TimelineItem
                                        date="Aug 24"
                                        day="1"
                                        title="Level 3: Video Submission Round"
                                        content="Shortlisted teams will need to submit a 3-5-minute video demonstration of their proposed solution."
                                        startDate="01 Sep 24, 12:00 PM IST"
                                        endDate=" 04 Sep 24, 10:00 AM IST"
                                    />
                                    <TimelineItem
                                        date=""
                                        day="TBD"
                                        title="Grand Finale"
                                        content="In the final level of the GRiD, finalists will be invited to showcase their solutions to the panel of domain experts at Flipkart."
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='details' ref={detailsRef}>
                            <div className="details-container">
                                <h1 className="heading">All that you need to know about Flipkart GRiD 6.0 - Software Development Track</h1>
                                <span className="details-description">
                                    GRiD is Flipkart’s Flagship Engineering Campus Challenge which provides you with the opportunity to apply your technical knowledge and skills, to compete and complete key challenges.
                                    Now in its sixth edition, Flipkart GRiD has become bigger & better, bringing real-world problem statements from the world of E-Commerce to the brightest engineering minds across the globe!
                                    So are you ready to enter the GRiD?
                                </span>
                                <br />
                                <ul className='rules'>
                                    <h6 style={{ fontWeight: "bold" }}>Eligibility & Team Rules:</h6>
                                    <li>This competition is open to students pursuing B.Tech/B.E./M.Tech/M.S or related Engineering Programs across ALL Engineering Colleges in India (Batch 2025,2026, 2027 & 2028)</li>
                                    <li>Students must register in teams of 1 to 3 members</li>
                                    <li>Cross-Specialization teams are eligible</li>
                                    <li>Teams can form across different academic years</li>
                                    <li>The batch of 2024 is not eligible to participate in this competition</li>
                                    <li>The participating students can be from any specialization</li>
                                </ul>
                                <span className='stages'>
                                    <p className='stage-description'>The Software Development Track will have 3 elimination levels to test your technical, analytical, and ideation skills before the National Finale where the Finalists will get to present their solutions to the Panel of Domain Experts at Flipkart.</p>
                                    <ul className='rules'>
                                        <h6 style={{ fontWeight: "bold" }}>Level 1 - E-Commerce & Tech Quiz:</h6>
                                        <li>All registered teams will have to take an online quiz.</li>
                                        <li>It is mandatory for all team members to attempt the quiz round.</li>
                                        <li>A team will be scored based on the average marks of the team members attempting the quiz round.</li>
                                        <li>All teams will be taking this quiz simultaneously during the quiz window.</li>
                                        <li>
                                            Every participant will be ranked on Accuracy + Speed (Time Taken) + Start Time i.e., if two teams have the same score,
                                            then the team that started and finished earlier will be ranked higher.
                                        </li>
                                        <li>Participating teams will move on to the next level based on their performance in this assessment.</li>
                                        <li>
                                            It will be based on E-Commerce Trivia (Reference:
                                            <a href="https://stories.flipkart.com" target="_blank" rel="noopener noreferrer">
                                                https://stories.flipkart.com
                                            </a>) and Tech (Technology Awareness + Techstack & Computer Science Fundamentals).
                                        </li>
                                    </ul>
                                    <ul className='rules'>
                                        <h6 style={{ fontWeight: "bold" }}>Level 2 - Submission Round:</h6>
                                        <li>Shortlisted teams from Level 1 will have to participate in Level 2.</li>
                                        <li>Teams will have to submit solutions for their preferred problem statement.</li>
                                        <li>You'll be able to make submissions until the deadline for this level anytime during the challenge window.</li>
                                        <li>Participating teams in this level will move on to the next level based on their performance.</li>
                                    </ul>
                                    <ul className='rules'>
                                        <h6 style={{ fontWeight: "bold" }}>Level 3 - Video Submission Round:</h6>
                                        <li>Shortlisted teams will need to submit a video demonstration of their proposed solution.</li>
                                    </ul>

                                    <ul className='rules'>
                                        <h6 style={{ fontWeight: "bold" }}>The National Finale:</h6>
                                        <li>In the final level of the GRiD, finalists will be invited to showcase their solutions to the panel of domain experts at Flipkart.</li>
                                    </ul>
                                </span>
                            </div>
                        </div>
                        <div className="prizes" ref={prizesRef}>
                            <div className="prize-container">
                                <h1 className='heading'>Rewards and Prizes</h1>
                                <span style={{
                                    background: "#e6f7f1",
                                    display: "flex",
                                    alignItems: "center",
                                    padding: "10px 22px",
                                    borderRadius: "5px",
                                    fontSize: "18px",
                                    fontWeight: "bold",
                                    clipPath: "polygon(0 0, 90% 0, 100% 100%, 0 100%)"
                                }}><GiTrophyCup />Grab Pre-Placement Interviews</span>
                                <div className="rewards-grid">
                                    <div className="reward-card">
                                        <h3 className="reward-title">Winners</h3>
                                        <p>Winners get EGVs worth INR 1,00,000</p>
                                        <h1 className="reward-amount">₹ 1,00,000</h1>
                                        <button className="certificate-btn">📜 Certificate</button>
                                    </div>

                                    <div className="reward-card">
                                        <h3 className="reward-title">First Runners-Up</h3>
                                        <p>The First Runners-Up get EGVs worth INR 75,000</p>
                                        <h1 className="reward-amount">₹ 75,000</h1>
                                        <button className="certificate-btn">📜 Certificate</button>
                                    </div>

                                    <div className="reward-card">
                                        <h3 className="reward-title">Finalists</h3>
                                        <p>Certificate of Merit & PPIs worth CTC INR 32 LPA and Internship Stipend INR 1,00,000 onwards</p>
                                        <button className="placement-btn">👔 Pre-Placement Interview</button>
                                    </div>

                                    <div className="reward-card">
                                        <h3 className="reward-title">Level 1 Qualifying Teams</h3>
                                        <p>Level 1 Qualifying Teams get a chance to appear for the Flipkart Hiring Process</p>
                                        <button className="placement-btn">👔 Pre-Placement Interview</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="Reviews" ref={reviewsRef}>
                            <div className="Reviews-container">
                                <h1 className='heading'>Feedback & rating</h1>
                                <textarea className="feedback-input" placeholder="Write a feedback"></textarea>
                                <div className="feedback-actions">
                                    <div className="rating-stars">
                                        <span>⭐</span>
                                        <span>⭐</span>
                                        <span>⭐</span>
                                        <span>⭐</span>
                                        <span>⭐</span>
                                    </div>
                                    <button className="submit-btn">Enter</button>
                                </div>
                            </div>
                        </div>
                        <div className="Faq" ref={faqsRef}>
                            <div className="Faq-container">
                                <h1 className="heading">Frequently Asked Questions/Discussions</h1>
                                <ul className='faqList'>
                                    <li>FAQs</li>
                                    <li>Discussions</li>
                                </ul>
                                <div className="QuestionSection">
                                    <ul className='QuestionSectionList' >
                                        <li>Registration</li>
                                        <li>Quiz</li>
                                        <li>Submissions</li>
                                    </ul>
                                    <div className="faq-container">
                                        {faqs.map((faq, index) => (
                                            <div key={index} className={`faq-item ${activeIndex === index ? 'active' : ''}`}>
                                                <div className="faq-question" onClick={() => toggleFAQ(index)}>
                                                    {faq.question}
                                                    <span>{activeIndex === index ? '-' : '+'}</span>
                                                </div>
                                                <div className="faq-answer">
                                                    {faq.answer}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*      */}
                    <div className="deadlineInfo">

                    </div>
                </div>
            </div>
        </>
    )
}

function TimelineItem({ date, day, title, content, startDate, endDate }) {
    return (
        <div className="timeline-item">
            <div className="date-container">
                <div className="date-box">
                    <div className="day">{day}</div>
                    <div className="date">{date}</div>
                </div>
                <div className="connector"></div>
            </div>
            <div className="card">
                <div className="card-header">
                    <h2 className="card-title">{title}</h2>
                </div>
                <div className="card-content">
                    <p className="content">{content}</p>
                    <div className="schedule">
                        <span>
                            {startDate && endDate ?
                                (<>
                                    <p>Start: {startDate}</p>
                                    <p>End: {endDate}</p></>) : (<><p style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "1em" }}><CiCalendar />Date to be announced</p></>)}

                        </span>
                        <button className="button">Results</button>
                    </div>
                </div>
            </div>
        </div>
    )
}