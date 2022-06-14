import React, { Component } from 'react';
import { Navbar, Nav, NavItem, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';

import './NavMenu.css';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  render () {
    return (
        <Navbar bg="white" className="flex-column flex-shrink-0 shadow pt-0">
            <Navbar.Brand href="/" className="mx-auto">
            <Image
                src={logo}
                width="40"
                height="40"
            />
            </Navbar.Brand>
            <NavItem>
                <Nav.Link as={Link} to="/">H</Nav.Link>
                <Nav.Link as={Link} to="/empresa">E</Nav.Link>
            </NavItem>
        </Navbar>

    //   <nav>
    //     <div class="d-flex flex-column flex-shrink-0 bg-light" style="width: 4.5rem;">
    //         <a href="/" class="d-block p-3 link-dark text-decoration-none" data-bs-toggle="tooltip" data-bs-placement="right">
    //         <svg class="bi pe-none" width="40" height="32">a</svg>
    //         <span class="visually-hidden">Icon-only</span>
    //         </a>
    //         <ul class="nav nav-pills nav-flush flex-column mb-auto text-center">
    //         <li class="nav-item">
    //             <a href="#" class="nav-link active py-3 border-bottom rounded-0" aria-current="page" data-bs-toggle="tooltip" data-bs-placement="right">
    //             <svg class="bi pe-none" width="24" height="24" role="img" aria-label="Home">a</svg>
    //             </a>
    //         </li>
    //         </ul>
    //         <div class="dropdown border-top">
    //         <a href="#" class="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle" id="dropdownUser3" data-bs-toggle="dropdown" aria-expanded="false">
    //             <img src="https://github.com/mdo.png" alt="mdo" width="24" height="24" class="rounded-circle" />
    //         </a>
    //         <ul class="dropdown-menu text-small shadow" aria-labelledby="dropdownUser3" style="">
    //             <li><a class="dropdown-item" href="#">New project...</a></li>
    //             <li><a class="dropdown-item" href="#">Settings</a></li>
    //             <li><a class="dropdown-item" href="#">Profile</a></li>
    //             <li><hr class="dropdown-divider" /></li>
    //             <li><a class="dropdown-item" href="#">Sign out</a></li>
    //         </ul>
    //         </div>
    //     </div>
    //   </nav>
    );
  }
}
