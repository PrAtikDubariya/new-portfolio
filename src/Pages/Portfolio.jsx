import PorfolioImage from "../assets/1 (1).jpg";
import "../App.css";

const Portfolio = () => {
    return (
        <div className="portfolio pt-5">
            <div className="container">
                <div className="row">
                    <div className="section-title">
                        <h2>My <span>Projects</span></h2>
                        <span className="d-none d-lg-block bg-title">Portfolio</span>
                    </div>
                </div>
                <div className="portfolio-content row mb-3">
                    <div className="col-lg-6 mb-3">
                        <div className="project-box shadow w-100 p-3">
                            <h3>BonzaMart - Super Market</h3>
                            <div className="links w-100 d-flex gap-1" style={{color:'#777'}}>
                                <a className="nav-link">C#</a>
                                |
                                <a className="nav-link">Web Dev</a>
                            </div>
                            <p>Fugiat fugiat deserunt eu cillum id nulla nulla dolore ut eu.
                                Fugiat fugiat deserunt eu cillum id nulla nulla dolore ut eu.
                                <a style={{color:"#8c6fff", textDecoration:'none'}}>Read more</a>
                            </p>
                            <div className="info w-100 d-flex flex-column flex-sm-row justify-content-between align-item-center">
                                <div className="w-100 mb-2"><img src={PorfolioImage} /></div>
                                <div className="portfolio-detail mb-2 py-2 w-100 d-flex flex-column justify-content-between align-items-start ps-4">
                                    <div>Date : 1 Jan - 2023</div>
                                    <div>Client : Symphony</div>
                                    <div>Tech : .NET</div>
                                    <div>eCommerce</div>
                                    <div>URL : www.google.com</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-3">
                        <div className="project-box shadow w-100 p-3">
                            <h3>BonzaMart - Super Market</h3>
                            <div className="links w-100 d-flex gap-1" style={{color:'#777'}}>
                                <a className="nav-link">C#</a>
                                |
                                <a className="nav-link">Web Dev</a>
                            </div>
                            <p>Fugiat fugiat deserunt eu cillum id nulla nulla dolore ut eu.
                                Fugiat fugiat deserunt eu cillum id nulla nulla dolore ut eu.
                                <a style={{color:"#8c6fff", textDecoration:'none'}}>Read more</a>
                            </p>
                            <div className="info w-100 d-flex flex-column flex-sm-row justify-content-between align-item-center">
                                <div className="w-100 mb-2"><img src={PorfolioImage} /></div>
                                <div className="portfolio-detail mb-2 py-2 w-100 d-flex flex-column justify-content-between align-items-start ps-4">
                                    <div>Date : 1 Jan - 2023</div>
                                    <div>Client : Symphony</div>
                                    <div>Tech : .NET</div>
                                    <div>eCommerce</div>
                                    <div>URL : www.google.com</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-3">
                        <div className="project-box shadow w-100 p-3">
                            <h3>BonzaMart - Super Market</h3>
                            <div className="links w-100 d-flex gap-1" style={{color:'#777'}}>
                                <a className="nav-link">C#</a>
                                |
                                <a className="nav-link">Web Dev</a>
                            </div>
                            <p>Fugiat fugiat deserunt eu cillum id nulla nulla dolore ut eu.
                                Fugiat fugiat deserunt eu cillum id nulla nulla dolore ut eu.
                                <a style={{color:"#8c6fff", textDecoration:'none'}}>Read more</a>
                            </p>
                            <div className="info w-100 d-flex flex-column flex-sm-row justify-content-between align-item-center">
                                <div className="w-100 mb-2"><img src={PorfolioImage} /></div>
                                <div className="portfolio-detail mb-2 py-2 w-100 d-flex flex-column justify-content-between align-items-start ps-4">
                                    <div>Date : 1 Jan - 2023</div>
                                    <div>Client : Symphony</div>
                                    <div>Tech : .NET</div>
                                    <div>eCommerce</div>
                                    <div>URL : www.google.com</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mb-3">
                        <div className="project-box shadow w-100 p-3">
                            <h3>BonzaMart - Super Market</h3>
                            <div className="links w-100 d-flex gap-1" style={{color:'#777'}}>
                                <a className="nav-link">C#</a>
                                |
                                <a className="nav-link">Web Dev</a>
                            </div>
                            <p>Fugiat fugiat deserunt eu cillum id nulla nulla dolore ut eu.
                                Fugiat fugiat deserunt eu cillum id nulla nulla dolore ut eu.
                                <a style={{color:"#8c6fff", textDecoration:'none'}}>Read more</a>
                            </p>
                            <div className="info w-100 d-flex flex-column flex-sm-row justify-content-between align-item-center">
                                <div className="w-100 mb-2"><img src={PorfolioImage} /></div>
                                <div className="portfolio-detail mb-2 py-2 w-100 d-flex flex-column justify-content-between align-items-start ps-4">
                                    <div>Date : 1 Jan - 2023</div>
                                    <div>Client : Symphony</div>
                                    <div>Tech : .NET</div>
                                    <div>eCommerce</div>
                                    <div>URL : www.google.com</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;