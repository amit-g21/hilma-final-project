import React , {useState} from 'react';
import { Link, useParams, useNavigate, Outlet } from 'react-router-dom';
import '../index.css'
import Cookies from 'js-cookie';

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

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate()

    const signUp = () => {
        navigate('/signup')
    }

    const handleSubmit  = async (e) => {
        const data = await fetch('http://localhost:8000/login/', {
            method:'POST',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify({
                userName:username,
                password: password
            })
        })
        const json = await data.json();
        console.log(json);
        if(json.length > 0) {
            console.log(json);
            // localStorage.setItem('onlineUser', JSON.stringify({username:json[0].username , user_id:json[0].user_id}))
            // setUser(json[0].username);
            Cookies.set('onlineUser' , JSON.stringify(json[0].username));
            navigate(`/home`);
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

                            <MDBInput wrapperClass='mb-4' label='username' id='form1' type='username' value={username} onChange={e => setUsername(e.target.value)} />
                            <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' value={password} onChange={e => setPassword(e.target.value)}/>

                            <div className="d-flex justify-content-between mx-4 mb-4">
                                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                                <a href="!#">Forgot password?</a>
                            </div>

                            <MDBBtn onClick={handleSubmit} className="mb-4 w-100">Sign in</MDBBtn>

                            <MDBBtn onClick={signUp} className="mb-4 w-100">Sign up</MDBBtn>

                        </MDBCardBody>

                    </MDBCard>
                </MDBCol>

                <MDBCol col='6' className='h-100'>
                    <img src="/images/loginImg.jpg" className="h-100 rounded-4 shadow-4"
                        alt="" fluid style={{marginRight:30 + '%'}} />
                </MDBCol>
            </MDBRow>

        </MDBContainer>
    );
}

