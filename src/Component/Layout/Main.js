import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Sidenav from '../Sidenav/Sidenav';

const Main = () => {
    return (
        <div>

            <Container>
                <Header></Header>
                <Row>
                    <Col lg='4'>
                        <Sidenav></Sidenav>
                    </Col>
                    <Col lg="8">
                        <Outlet></Outlet>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Main;