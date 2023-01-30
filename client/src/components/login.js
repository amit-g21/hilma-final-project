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

    const handleSubmit  = async (e) => {
        e.preventDefault();
        const data = await fetch('http://localhost:8000/users/login', {
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify({
                username:username,
                password: password
            })
        })
        const json = await data.json();
        console.log(json);
        if(json){
            localStorage.setItem('onlineUser', JSON.stringify({username:json[0].username , user_id:json[0].user_id}))
            setUser(json[0].username);
            navigate(`/${user}/homePage`);
        }else{
            alert('user not found')
        }

    }

    return (
        <MDBContainer fluid className='my-5' style={{ height: 'calc(100vh - 6rem)' }}>

            <MDBRow className='g-0 align-items-center h-100'>

                <MDBCol col='6'>

                    <MDBCard className='my-5 cascading-right' style={{ background: 'hsla(0, 0%, 100%, 0.55)', backdropFilter: 'blur(30px)' }}>
                        <MDBCardBody className='p-5 text-center'>

                        <h2 className="fw-bold mb-5">Sign in </h2>

                            <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email' />
                            <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' />

                            <div className="d-flex justify-content-between mx-4 mb-4">
                                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                                <a href="!#">Forgot password?</a>
                            </div>

                            <MDBBtn onclick={handleSubmit} className="mb-4 w-100">Sign in</MDBBtn>

                            <MDBBtn onClick={signUp} className="mb-4 w-100">Sign up</MDBBtn>

                        </MDBCardBody>

                    </MDBCard>
                </MDBCol>

                <MDBCol col='6' className='h-100'>
                    <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg" class="h-100 rounded-4 shadow-4"
                        alt="" fluid />
                </MDBCol>
            </MDBRow>

        </MDBContainer>
    );
}

