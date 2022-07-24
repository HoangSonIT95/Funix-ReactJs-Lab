import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
  Jumbotron,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <Navbar dark color='success' expand='md'>
      <div className='container'>
        <NavbarToggler />
        <NavbarBrand className='mr-5' href='/'>
          <img
            src='assets/images/staffManager.png'
            height='40'
            width='51'
            alt='Quan Ly Nhan Su'
          />
        </NavbarBrand>
        <Collapse navbar>
          <Nav navbar>
            <NavItem>
              <NavLink className='nav-link' to='/nhanvien'>
                <span className='fa fa-users fa-lg'></span> Nhân Viên
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='nav-link' to='/phongban'>
                <span className='fa fa-id-card fa-lg'></span> Phòng Ban
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='nav-link' to='/bangluong'>
                <span className='fa fa-money fa-lg'></span> Bảng Lương
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </div>
    </Navbar>
  );
}

export default Header;
