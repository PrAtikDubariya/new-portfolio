import PorfolioImage from "../assets/1 (1).jpg";
import "../App.css";
import { projects } from "../Components/Content";

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
                    {projects.map((project, index) => (
                        <div className="col-lg-6 mb-3 h-100" key={index}>
                            <div className="project-box shadow w-100 p-3 h-100">
                                <h3>{project.title}</h3>
                                <div className="links w-100 d-flex gap-1" style={{color:'#777'}}>
                                    {project.technologies.map((tech, idx) => (
                                        <a key={idx} className="nav-link">{tech} |</a>
                                    ))}
                                </div>
                                <p>
                                    {project.description}
                                    <a style={{color:"#8c6fff", textDecoration:'none'}}>Read more</a>
                                </p>
                                <div className="info w-100 d-flex flex-column flex-sm-row justify-content-between align-item-center">
                                    <div className="w-100 mb-2"><img src={project.images[0]} /></div>
                                    <div className="portfolio-detail mb-2 py-2 w-100 d-flex flex-column justify-content-between align-items-start ps-4">
                                        <div>{project.date}</div>
                                        <div>Tech : {project.technologies.map((tech) => { tech + " "})}</div>
                                        <div>{project.type}</div>
                                        <div>GitHub URL : {project.gitHubLink}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Portfolio;