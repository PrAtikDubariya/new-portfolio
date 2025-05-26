import "../App.css";
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { useEffect, useRef, useState } from 'react';

const skills = [
    {
        name: ".NET MVC",
        percent: 80,
        description: "Built scalable applications using MVC patterns and server-side logic."
    },
    {
        name: "SQL",
        percent: 75,
        description: "Managed complex queries and optimized database performance effectively."
    },
    {
        name: "JavaScript",
        percent: 70,
        description: "Implemented dynamic features and enhanced client-side interactions."
    },
    {
        name: "ReactJS",
        percent: 60,
        description: "Created reusable components and managed state in modern UIs."
    }
];


const SkillProgress = ({ name, targetPercent, description }) => {
    const [value, setValue] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                }
            },
            {
                threshold: 0.5, // 50% visible
            }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, [hasAnimated]);

    useEffect(() => {
        if (!hasAnimated) return;

        let start = 0;
        const increment = () => {
            start += 1;
            if (start <= targetPercent) {
                setValue(start);
            } else {
                clearInterval(timer);
            }
        };

        const timer = setInterval(increment, 20);

        return () => clearInterval(timer);
    }, [hasAnimated, targetPercent]);

    return (
        <div
            className="skills-box shadow card position-relative d-flex flex-column justify-content-center align-items-center overflow-hidden p-3 mb-3"
            ref={containerRef}
        >
            <div className="border rounded-circle p-2 mb-3" style={{ width: 80, height: 80 }}>
                <CircularProgressbar
                    value={value}
                    text={`${value}%`}
                    className="progress-bar"
                    styles={buildStyles({
                        textSize: '24px',
                        pathColor: '#FF6B6B',
                        trailColor: '#eee',
                    })}
                />
            </div>
            <h3>{name}</h3>
            <div className="text-center">
                <p>{description}</p>
            </div>
        </div>
    );
};

const About = () => {
    return (
        <div className="about py-5">
            <div className="container">
                <div className="row">
                    <div className="section-title">
                        <h2>About <span>Me</span></h2>
                        <span className="d-none d-lg-block bg-title">About</span>
                    </div>
                    <div className="col-lg-6">
                        <div className="d-flex h-100 align-items-center">
                            <div className="row gx-5 gy-3">
                                {skills.map((skill, index) => (
                                    <div className="col-md-6 " key={index}>
                                        <SkillProgress
                                            name={skill.name}
                                            targetPercent={skill.percent}
                                            description={skill.description} 
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-text d-flex flex-column justify-content-center h-100">
                            <div className="mb-3 fw-bolder" style={{ fontSize: '1.5rem' }}>
                                Hard work always pays off.
                            </div>
                            <p className="about-self-paragraph mb-2">
                                Motivated .NET Developer with 6 months of practical experience in
                                building web applications using ASP.NET Core and C#. Comfortable
                                working with Entity Framework, LINQ, and SQL Server to handle backend
                                development, as well as using jQuery for enhancing user interactions on
                                the frontend.
                            </p>
                            <p>
                                I enjoy learning by doing and have been part of a team
                                where l contributed to writing clean, maintainable code and improving
                                existing features. Looking to further develop my skills and grow in a
                                dynamic development environment.
                            </p>
                            <div className="personal-info pt-3 px-0">
                                <ul className="w-100 ps-0 ps-sm-4" style={{ listStyle: 'none' }}>
                                    <li><span>Name <b>:</b></span>  Pratik Dubariya</li>
                                    <li><span>Age <b>:</b></span>  21 years</li>
                                    <li><span>Language <b>:</b></span>  Gujarati, Hindi, English</li>
                                    <li><span>Email <b>:</b></span>  pratikdubariya1501@gmail.com</li>
                                    <li><span>Address <b>:</b></span>  Tankara, Morbi, Gujarat - 363650</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;