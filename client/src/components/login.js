import React from 'react';
import { Link, useParams, useNavigate, Outlet } from 'react-router-dom';
import '../index.css'

import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBInput,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';

export default function Login() {

    const navigate = useNavigate()

    const signUp = () => {
        navigate('/signup')
    }

    return (
        <MDBContainer fluid className='my-5' style={{height: 'calc(100vh - 6rem)'}}>

            <MDBRow className='g-0 align-items-center'>

                <MDBCol col='6'>

                    <MDBCard className='my-5 cascading-right' style={{ background: 'hsla(0, 0%, 100%, 0.55)', backdropFilter: 'blur(30px)' }}>
                        <MDBCardBody className='p-5 text-center'>

                            <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email' />
                            <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' />

                            <div className="d-flex justify-content-between mx-4 mb-4">
                                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                                <a href="!#">Forgot password?</a>
                            </div>

                            <MDBBtn className="mb-4 w-100">Sign in</MDBBtn>

                            <MDBBtn onClick={signUp} className="mb-4 w-100">Sign up</MDBBtn>

                        </MDBCardBody>

                    </MDBCard>
                </MDBCol>

                <MDBCol col='6'>
                    <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg" class="w-100  rounded-4 shadow-4"
                        alt="" fluid />
                </MDBCol>
            </MDBRow>

        </MDBContainer>
    );
}

