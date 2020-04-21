import React, { useState } from 'react'
import { Button, Navbar, Form, InputGroup, FormControl, Modal, Card, Accordion } from 'react-bootstrap';
import Img from '../images/logo/logo-index.png';
import { Icon } from "react-icons-kit";

import { ic_person } from "react-icons-kit/md/ic_person";
import "./Home_all_1.css";// ดึงไฟ css มาใช้
import _A1_copy from '../pages/A1_copy'

function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
        
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            bsPrefix="modal-login"
            dialogAs="modal-login"
        >
            
            <Modal.Header closeButton>
            </Modal.Header >
            <Modal.Body style={{ margin: "auto" }}>
                <img
                    src={Img}
                    width="140px"
                    height="140px"
                    style={{margin:"12px 20px 12px 25px"}}
                />
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>ชื่อผู้ใช้</Form.Label>
                        <Form.Control type="text" placeholder="ชื่อผู้ใช้" />
                        <Form.Text className="text-muted">

                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>รหัสผ่าน</Form.Label>
                        <Form.Control type="password" placeholder="รหัสผ่าน" />
                    </Form.Group>


                    <Accordion>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                    ลืมรหัสผ่าน
                            </Accordion.Toggle>
                            </Card.Header>
                        </Card>

                    </Accordion>

                    <Button  href='/homesick' variant="primary" type="submit">
                        ตกลง
  </Button>

                </Form>

            </Modal.Body>
            <Modal.Footer>
            <Accordion>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                    สมัครสมาชิก
      </Accordion.Toggle>
                            </Card.Header>
                        </Card>

                    </Accordion>
                <Button onClick={props.onHide}>ปิด</Button>
            </Modal.Footer>
        </Modal>
    );
}

const A1 = () => {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <div className="hg-base" >
            <Navbar className="justify-content-between"
                style={{
                    backgroundColor: '#003171',
                    height: '50px',
                    padding: "0px 0px 0px 8px"
                }} >
                <Form inline>
                    <img
                        src={Img}
                        width="40px"
                        height="40px"
                    />
                    <Navbar.Brand href="/homesick"
                        style={{
                            color: 'white',
                            fontSize: '23px',
                            paddingLeft: '20px'
                        }}>
                        ระบบจัดการฟาร์ม
                    </Navbar.Brand>
                    <Navbar.Brand href="/homeWork"
                        style={{
                            color: 'white',
                            fontSize: '23px',
                            paddingLeft: '20px'
                        }}>
                        การบ้าน
                    </Navbar.Brand>
                </Form>
                <Form inline>
                    <Button bsPrefix="nabl-button" onClick={() => setModalShow(true)}>
                        {" "}
                        <Icon icon={ic_person} size="30" />
              เข้าสู่ระบบ
            </Button>
                    <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                </Form>
            </Navbar>

        </div>
    )
}

export default A1
