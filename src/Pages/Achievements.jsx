import { useEffect, useRef } from "react";
import "../App.css";
import CodeTwoToneIcon from '@mui/icons-material/CodeTwoTone';

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
                    <div className="col-lg-6">
                        <div className="h-100">
                            <h4 className="mb-4 fw-bold text-center mb-5">Education</h4>
                            <div className="timeline">
                                {[...Array(3)].map((_, idx) => (
                                    <div
                                        key={idx}
                                        className="timeline-item p-3 mb-5 shadow bg-white border position-relative"
                                        style={{ borderRadius: "15px" }}
                                    >
                                        <div
                                            className="timeline-info position-absolute border rounded-pill shadow-sm"
                                            style={{ top: "-18px" }}
                                        >
                                            <span>June 15, 2013 - 2016</span>
                                        </div>
                                        <div className="timeline-content">
                                            <h5 className="timeline-title">
                                                Master of Science in Computer Science{" "}
                                                <span className="sub"> - first class</span>
                                            </h5>
                                            <p>
                                                Elit exercitation consectetur fugiat sint pariatur aliqua ut est id sit eiusmod.
                                                Cupidatat mollit quis do reprehenderit minim exercitation et. Tempor nisi ex duis
                                                cillum exercitation.
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="h-100">
                            <h4 className="mb-4 fw-bold text-center mb-5">Education</h4>
                            <div className="timeline">
                                {[...Array(3)].map((_, idx) => (
                                    <div
                                        key={idx}
                                        className="timeline-item p-3 mb-5 shadow bg-white border position-relative"
                                        style={{ borderRadius: "15px" }}
                                    >
                                        <div
                                            className="timeline-info position-absolute border rounded-pill shadow-sm"
                                            style={{ top: "-18px" }}
                                        >
                                            <span>June 15, 2013 - 2016</span>
                                        </div>
                                        <div className="timeline-content">
                                            <h5 className="timeline-title">
                                                Master of Science in Computer Science{" "}
                                                <span className="sub"> - first class</span>
                                            </h5>
                                            <p>
                                                Elit exercitation consectetur fugiat sint pariatur aliqua ut est id sit eiusmod.
                                                Cupidatat mollit quis do reprehenderit minim exercitation et. Tempor nisi ex duis
                                                cillum exercitation.
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row pt-4 service-box mb-3">
                    {[...Array(4)].map((_, idx) => (
                        <div className="col-sm-6 col-lg-3 mb-3" key={idx}>
                            <div className="flipper position-relative py-1">
                                <div className="main-box">
                                    <div className="box-front">
                                        <div className="content-wrap p-3">
                                            <div className="icon fs-1" style={{ color: '#ff6f61' }}>
                                                <CodeTwoToneIcon fontSize={"inherit"} />
                                            </div>
                                            <h3>Development</h3>
                                            <p>We develop the visual identity of your business.</p>
                                        </div>
                                    </div>
                                    <div className="box-back gradient-bg">
                                        <div className="content-wrap p-3">
                                            <h3>Development</h3>
                                            <p>We develop the visual identity of your business.</p>
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