import React, { useState, idx, variant } from "react";
import {
    Navbar, Nav, Button, Form, Modal,
    NavDropdown, FormControl, Alert, Container
    , Row, Col, Image
} from "react-bootstrap";

import "./Home_all_1.css"; //ดึงไฟล์ css มาใช้
import LogoIndex from "../กานบ้าน/5454.jpg";

import { Icon } from "react-icons-kit";

import { ic_person } from "react-icons-kit/md/ic_person";

function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            bsPrefix="modal_content"
            dialogAs="modal_content"
        >
            <Modal.Body style={{ margin: "auto" }}>
                <Container>
                    <Row>
                        <Col xs={6} md={4}>
                            <Image src={LogoIndex} roundedCircle
                                height="200"
                                width="200"
                                style={{ margin: "0px 56px 50px 56px" }} />

                        </Col>
                    </Row>
                </Container>
                <Form>
                    <Form.Label style={{ fontSize: '20px' }} >ลงสมัครนายก</Form.Label>
                    <Row>
                        <Col>
                            <Form.Label>ชื่อ</Form.Label>
                            <Form.Control placeholder="ชื่อ" />
                        </Col>
                        <Col>
                            <Form.Label>นามสกุล</Form.Label>
                            <Form.Control placeholder="นามสกุล" />
                        </Col>
                    </Row>
                </Form>
                <Form>
                    <Form>
                        <Row>
                            <Col>

                                <Form.Label>วันเกิด</Form.Label>
                                <Form.Control placeholder="กรุณากรอก" />

                            </Col>
                            <fieldset>
                                <Form.Group as={Row}>
                                    <Form.Label style={{ padding: '0px 45px 0px 0px' }}>เพศ</Form.Label>
                                    <Col sm={10}>
                                        <Form.Check
                                            inline
                                            type="radio"
                                            label="Male"
                                            name="formHorizontalRadios"
                                            id="formHorizontalRadios1"
                                        />
                                        <Form.Check
                                            inline
                                            type="radio"
                                            label="Female"
                                            name="formHorizontalRadios"
                                            id="formHorizontalRadios1"
                                        />
                                    </Col>
                                </Form.Group>
                            </fieldset>
                        </Row>
                    </Form>
                    <Button variant="primary" style={{ width: "100%", fontSize: '20px' }} href="/loginseccess">
                        submit
          </Button>
                </Form>
            </Modal.Body>
            <Modal.Footer style={{ justifyContent: "space-between" }}>
                <div>
                    <a href="#">สมัครสมาชิก</a>
                </div>
                <Button bsPrefix="lo-buttonClose" onClick={props.onHide}>
                    ปิด
        </Button>
            </Modal.Footer>
        </Modal>
    );
}

const Home_all_1 = () => {
    const [modalShow, setModalShow] = useState(false);

    return (
        <div className="hg-base-v2">
            <Navbar
                style={{
                    backgroundColor: "#AD2EFF",
                    height: "50px",
                    padding: "0px 0px 0px 8px"
                }}
            >
                {/* <img src={LogoIndex} height="40" width="40" style={{ float: "left" }} /> */}
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Navbar.Brand href="/home"
                            style={{
                                color: 'white',
                                fontSize: '33px',
                                paddingLeft: '20px'
                            }}>
                            เรารักลุงตู่.com
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                            </Nav>

                        </Navbar.Collapse>

                    </Nav>
                    <Form inline>

                        <div>
                            <a href="#">
                                <FormControl type="text" placeholder="ค้นหา" className="mr-sm-2" />
                                <Button variant="outline-light" >ค้นหา</Button>{' '}{' '}
                            </a>
                            <Button bsPrefix="nabl-button" onClick={() => setModalShow(true)}
                                style={{ backgroundColor: '#b918a5' }}>
                                {" "}
                                <Icon icon={ic_person} size="30" />เข้าสู่ระบบ</Button>
                        </div>
                        <MyVerticallyCenteredModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Home_all_1;
