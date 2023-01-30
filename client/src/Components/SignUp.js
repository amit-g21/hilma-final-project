import React , {useState} from 'react';
import { Link, useParams, useNavigate, Outlet } from 'react-router-dom';

import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBRow,
  MDBCol,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

export default function SignUp() {

  const [fullName, setUFullName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [birthDate, setbirthDate] = useState('');
  const [address, setAddress] = useState('');

  const navigate = useNavigate()


  const handleSubmit  = async (e) => {
    const data = await fetch('http://localhost:8000/userInfo/', {
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify({
            username:username,
            fullName: fullName,
            password:password,
            phoneNumber: phoneNumber,
            email: email,
            birthDate: birthDate,
            address: address,
            isAdmin:null
        })
    })
    const json = await data.json();
    // localStorage.setItem('onlineUser', JSON.stringify({username:json[0].username , user_id:json[0].user_id}))
    // setUser(json[0].username);
    navigate(`/`);
    

}

  


  return (
    <MDBContainer fluid className='my-5' style={{ height: 'calc(100vh - 6rem)' }}>

      <MDBRow className='g-0 align-items-center h-100'>
        <MDBCol col='6'>

          <MDBCard className='my-5 cascading-right' style={{background: 'hsla(0, 0%, 100%, 0.55)',  backdropFilter: 'blur(30px)'}}>
            <MDBCardBody className='p-5 shadow-5 text-center'>

              <h2 className="fw-bold mb-5">Sign up now</h2>

              {/* <MDBRow>
                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='First name' id='form1' type='text'/>
                </MDBCol>

                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='Last name' id='form2' type='text'/>
                </MDBCol>
              </MDBRow> */}
              <MDBInput wrapperClass='mb-4' label='full name' id='form3' value={fullName} type='text' onChange={e => setUFullName(e.target.value)}/>
              <MDBInput wrapperClass='mb-4' label='username' id='form3' value={username} type='text' onChange={e => setUsername(e.target.value)}/>
              <MDBInput wrapperClass='mb-4' label='Password' id='form4' value={password} type='text' onChange={e => setPassword(e.target.value)}/>
              <MDBInput wrapperClass='mb-4' label='phone number' id='form4' value={phoneNumber} type='text' onChange={e => setPhoneNumber(e.target.value)}/>
              <MDBInput wrapperClass='mb-4' label='email' id='form4' value={email} type='text' onChange={e => setEmail(e.target.value)}/>
              <MDBInput wrapperClass='mb-4' label='birth_date' id='form4' value={birthDate} type='date' onChange={e => setbirthDate(e.target.value)}/>
              <MDBInput wrapperClass='mb-4' label='address' id='form4' value={address} type='text' onChange={e => setAddress(e.target.value)}/>




              <div className='d-flex justify-content-center mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
              </div>

              <MDBBtn className='w-100 mb-4' size='md' onClick={handleSubmit}>sign up</MDBBtn>

              <div className="text-center">

                <p>or sign up with:</p>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='facebook-f' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='twitter' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='google' size="sm"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='github' size="sm"/>
                </MDBBtn>

              </div>

            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol col='6' className='h-100'>
          <img src="/images/loginImg.jpg" class="h-100 rounded-4 shadow-4"
            alt="" fluid/>
        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

