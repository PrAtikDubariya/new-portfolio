import { useEffect, useRef } from "react";
import "../App.css";
import { education, experience, service } from "../Components/Content";

const Achievements = () => {
    const timelineRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate");
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1,
            }
        );

        const items = timelineRef.current.querySelectorAll(".timeline-item");
        items.forEach((item) => observer.observe(item));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="achievements pt-5">
            <div className="container" ref={timelineRef}>
                <div className="row">
                    <div className="section-title">
                        <h2>My <span>Resume</span></h2>
                        <span className="d-none d-lg-block bg-title">Achievements</span>
                    </div>
                    <div className="col-lg-6 h-100">
                        <div className="h-100">
                            <h4 className="mb-4 fw-bold text-center mb-5">Education</h4>
                            <div className="timeline h-100">
                                {education.map((edu, idx) => (
                                    <div
                                        key={idx}
                                        className="timeline-item h-100 p-3 mb-5 shadow bg-white border position-relative"
                                        style={{ borderRadius: "15px", minHeight: "200px" }}
                                    >
                                        <div
                                            className="timeline-info position-absolute border rounded-pill shadow-sm"
                                            style={{ top: "-18px" }}
                                        >
                                            <span>{edu.date}</span>
                                        </div>
                                        <div className="timeline-content">
                                            <h5 className="timeline-title">
                                                {edu.title}{" "}
                                                <span className="sub">{edu.sub}</span>
                                            </h5>
                                            <p>{edu.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 h-100">
                        <div className="h-100">
                            <h4 className="mb-4 fw-bold text-center mb-5">Experience</h4>
                            <div className="timeline h-100">
                                {experience.map((ex, idx) => (
                                    <div
                                        key={idx}
                                        className="timeline-item h-100 p-3 mb-5 shadow bg-white border position-relative"
                                        style={{ borderRadius: "15px", minHeight: "200px" }}
                                    >
                                        <div
                                            className="timeline-info position-absolute border rounded-pill shadow-sm"
                                            style={{ top: "-18px" }}
                                        >
                                            <span>{ex.date}</span>
                                        </div>
                                        <div className="timeline-content">
                                            <h5 className="timeline-title">
                                                {ex.title}
                                                <span className="sub">{ex.sub}</span>
                                            </h5>
                                            <p>{ex.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row pt-4 service-box mb-3 h-100">
                    {service.map((service, idx) => (
                        <div className="col-sm-6 col-lg-3 mb-3" key={idx} style={{ minHeight: "200px" }}>
                            <div className="flipper position-relative py-1 h-100">
                                <div className="main-box h-100">
                                    <div className="box-front h-100">
                                        <div className="content-wrap p-3">
                                            <div className="icon fs-1" style={{ color: '#ff6f61' }}>
                                                <i className={service.icon} ></i>
                                            </div>
                                            <h3>{service.title}</h3>
                                            <p>{service.description}</p>
                                        </div>
                                    </div>
                                    <div className="box-back gradient-bg h-100">
                                        <div className="content-wrap p-3">
                                            <h3>{service.title}</h3>
                                            <p>{service.description}</p>
                                            <a className="btn">Read more</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Achievements;