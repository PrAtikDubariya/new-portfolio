import React, { useState } from 'react';
import { Offcanvas } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import '../App.css';

const Sidebar = ({ scrollToSection }) => {
  const [show, setShow] = useState(false);
  const [active, setActive] = useState('Home');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const menuItems = ['Home', 'About', 'Experience', 'Portfolio', 'Contacts'];

  return (
    <>
      <button onClick={handleShow} className="btn sidebar-toggle-btn rounded-circle p-0 p-2">
        <WidgetsOutlinedIcon style={{ fontSize: '30px' }} />
      </button>

      <Offcanvas show={show} onHide={handleClose} placement="end" className="custom-offcanvas" style={{ maxWidth: '250px' }}>
        <CloseOutlinedIcon className="close-btn" onClick={handleClose} />
        <Offcanvas.Body className="sidebar-body">
          <ul className="sidebar-menu">
            {menuItems.map((item) => (
              <li
                key={item}
                className={`sidebar-menu-item ${item === active ? 'active' : ''}`}
                onClick={() => {
                  setActive(item);
                  scrollToSection(item);
                  handleClose();
                }}
              >
                <span className={`dot-icon ${item === active ? 'active' : ''}`}></span>
                <span className="menu-label">{item}</span>
              </li>
            ))}
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Sidebar;