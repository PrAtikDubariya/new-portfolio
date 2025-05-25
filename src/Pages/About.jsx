import "../App.css";
import Progress from "../assets/react.svg"

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
                                <div className="col-md-6">
                                    <div
                                        className="skills-box shadow card position-relative d-flex flex-column justify-content-center align-items-center overflow-hidden p-3 mb-3">
                                        <div className="border rounded-circle py-2 p-2 mb-3">
                                            <img src={Progress} height={50}/>
                                        </div>
                                        <h3>DOTNET MVC</h3>
                                        <div className="text-center" style={{lineHeight:'0.3rem'}}>
                                            <p>lorem ipsum is simply dummy</p>
                                            <p>text of the printing.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div
                                        className="skills-box shadow card position-relative d-flex flex-column justify-content-center align-items-center overflow-hidden p-3 mb-3">
                                        <div className="border rounded-circle py-2 p-2 mb-3">
                                            <img src={Progress} height={50}/>
                                        </div>
                                        <h3>DOTNET MVC</h3>
                                        <div className="text-center" style={{lineHeight:'0.3rem'}}>
                                            <p>lorem ipsum is simply dummy</p>
                                            <p>text of the printing.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div
                                        className="skills-box shadow card position-relative d-flex flex-column justify-content-center align-items-center overflow-hidden p-3 mb-3">
                                        <div className="border rounded-circle py-2 p-2 mb-3">
                                            <img src={Progress} height={50}/>
                                        </div>
                                        <h3>DOTNET MVC</h3>
                                        <div className="text-center" style={{lineHeight:'0.3rem'}}>
                                            <p>lorem ipsum is simply dummy</p>
                                            <p>text of the printing.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div 
                                        className="skills-box shadow card position-relative d-flex flex-column justify-content-center align-items-center overflow-hidden p-3 mb-3">
                                        <div className="border rounded-circle py-2 p-2 mb-3">
                                            <img src={Progress} height={50}/>
                                        </div>
                                        <h3>DOTNET MVC</h3>
                                        <div className="text-center" style={{lineHeight:'0.3rem'}}>
                                            <p>lorem ipsum is simply dummy</p>
                                            <p>text of the printing.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-text">
                            <div className="mb-3 fw-bolder"
                                style={{ fontSize: '1.5rem' }}>
                                Hard work always pays off.</div>
                            <p className="about-self-paragraph mb-2">
                                Aliquip id ullamco do occaecat enim quis aute
                                duis ad ea sit ullamco pariatur aliquip. Deserunt
                                incididunt tempor in laborum incididunt irure ad id
                                ea non eu mollit laborum dolor. Id minim magna aute
                                occaecat pariatur fugiat sint nulla sit nulla nisi irure.
                                Consequat velit ut labore quis dolor ex minim reprehenderit
                                in laborum quis irure eiusmod. Do elit elit culpa sint
                                consequat nulla ea.
                            </p>
                            <p className="">
                                Exercitation occaecat consectetur ullamco duis laboris commodo do sint deserunt sunt excepteur qui eiusmod veniam.
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
    )
}

export default About;