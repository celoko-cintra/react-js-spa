import React, { Component } from 'react';
import { NavMenu } from './NavMenu';
import { Home } from './Home';
import { Empresa } from './Empresa';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import './Layout.css';

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
        <main>
            <NavMenu />
            <content>
              <Container className="h-100 pt-2 mx-0">
                <Routes>
                  <Route path="/" element={<Home/>} />
                  <Route path="empresa" element={<Empresa/>} />
                </Routes>
              </Container>
            </content>
        </main>
    );
  }
}
