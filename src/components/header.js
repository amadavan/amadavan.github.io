import React from 'react';
import Navbar from 'react-bulma-components/lib/components/navbar';

export default () => (
    <Navbar>
        <Navbar.Menu>
            <Navbar.Container position="end">
              <Navbar.Item href="/">Home</Navbar.Item>
              <Navbar.Item href="/research">Research</Navbar.Item>
              <Navbar.Item href="/projects">Projects</Navbar.Item>
              <Navbar.Item href="/resume">Resume</Navbar.Item>
              <Navbar.Item href="/contact">Contact</Navbar.Item>
            </Navbar.Container>
        </Navbar.Menu>
    </Navbar>
)