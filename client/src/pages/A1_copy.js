import React from 'react'
import {Button} from 'react-bootstrap';
import Img from '../images/logo/logo-index.png'

const A1 = () => {
    return (
        <div>
            <img
                    src={Img}
                    width="140px"
                    height="140px"
                    style={{margin:"12px 20px 12px 25px"}}
                />
            <Button href='/home' variant="primary">Primary</Button>{' '}
        </div>
    )
}

export default A1
