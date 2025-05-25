import "../App.css";
import { GitHub, LinkedIn, X } from "@mui/icons-material";
import UpWork from "../assets/upwork.svg";

const Footer = () => {
    return (
        <div className="footer w-100 py-4">
            <div className="container">
                <div className="w-100 d-flex justify-content-between align-items-center">
                    <div className="">
                        <span>{"Made by"}</span><a href="/" style={{color:'#8c6fff', textDecoration: 'none'}}> Pratik</a>
                    </div>
                    <div className="d-flex justify-content-end align-items-center gap-1">
                        <a style={{textDecoration: 'none', color:'black'}} href="https://github.com/PrAtikDubariya"><GitHub/></a>
                        <a style={{textDecoration: 'none', color:'black'}} href="https://www.linkedin.com/in/pratik-dubariya-3a5570243/"><LinkedIn/></a>
                        <a style={{textDecoration: 'none', color:'black'}} href="https://x.com/pratik_dubariya"><X/></a>
                        <a style={{textDecoration: 'none', color:'black'}}><img height={25} src={UpWork}/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;