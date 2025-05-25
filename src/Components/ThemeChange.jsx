import { useState } from 'react';
import { Offcanvas } from 'react-bootstrap';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import '../App.css';

const ThemeChanger = ({theme, setTheme}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const toggleTheme = (mode) => {
        setTheme(mode);
    };

    return (
        <>
            <button onClick={handleShow} className="btn theme-toggle-btn p-0 p-2">
                <SettingsRoundedIcon style={{ fontSize: '30px' }} className="rotate-icon" />
            </button>

            <Offcanvas show={show} onHide={handleClose} placement="end" className="custom-offcanvas" style={{ maxWidth: '250px' }}>
                <CloseOutlinedIcon className="close-btn" onClick={handleClose} />
                <Offcanvas.Body className="sidebar-body">
                    <h4 style={{ color: "#ff6f61" }}>Tools</h4>
                    <hr />
                    <div>
                        <h6 style={{ color: "white" }}>Modes</h6>
                        <div className="d-flex gap-3 mt-3">
                            <div
                                className={`theme-box ${theme === 'light' ? 'active' : ''}`}
                                onClick={() => toggleTheme('light')}
                            >
                                <div className="light-theme-preview" />
                                <div className="label">LIGHT</div>
                            </div>
                            <div
                                className={`theme-box ${theme === 'dark' ? 'active' : ''}`}
                                onClick={() => toggleTheme('dark')}
                            >
                                <div className="dark-theme-preview" />
                                <div className="label">DARK</div>
                            </div>
                        </div>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default ThemeChanger;