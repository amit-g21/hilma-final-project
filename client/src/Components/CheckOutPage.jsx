import React, { useState } from 'react';
import '../clientCss/checkout.css';
import { Link, useParams, useNavigate, Outlet, json } from 'react-router-dom';



function CheckOutPage() {

    const [name, setName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [date, setDate] = useState('');
    const [city, setCity] = useState('');


    console.log(name, 'name')
    console.log(cardNumber, 'card_number')
    console.log(date, 'data')
    console.log(city, 'name')

    let totalPrice =  JSON.parse(sessionStorage.getItem('checkoutInfo')) ;
    


    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        const data = await fetch('http://localhost:8000/order/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                fullName: name,
                totalPrice : totalPrice[0].totalPrice ,
                orderQuantity : totalPrice[0].totalQuantity ,
                cardNumber: cardNumber,
                date: date,
                city: city ,
                orderNumber : Math.round(Math.random () * 10000)
            })
        })
        const json = await data.json();
        navigate('/home')
        // localStorage.setItem('onlineUser', JSON.stringify({username:json[0].username , user_id:json[0].user_id}))
        // setUser(json[0].username);


    }




    const Item = (props) => (
        <div className="item-container">
            <div className="item-image">
                <img src={props.img} />
                <div className="item-details">
                    <h3 className="item-name"> number of items: {props.Items}  </h3>
                    <h2 className="item-price"> {props.price}$ </h2>
                </div>
            </div>
        </div>
    );

    const Input = (props) => (
        <div className="input">
            <label>{props.label}</label>
            <div className="input-field">
                <input type={props.type} name={props.name} />
                <img src={props.imgSrc} />
            </div>
        </div>
    );

    const Button = (props) => (
        <button className="checkout-btn" type="button" onClick={handleSubmit}>{props.text}</button>
    );

    console.log('totalPrice[0]: ', totalPrice[0].totalPrice);

    return (
        <div className="app-container">
            <div className="row">
                <div className="col">
                    <Item name="Instax Mini 90 Neo Classic" price={totalPrice[0].totalPrice} Items={totalPrice[0].totalQuantity}  img="http://ecx.images-amazon.com/images/I/61%2BABMMN5zL._SL1500_.jpg" />
                </div>
                <div className="col no-gutters">
                    <div className="checkout">
                        <div className="checkout-container">
                            <h3 className="heading-3">Credit card checkout</h3>
                            {/* <Input label="Cardholder's Name" type="text" value={name} onChange={e => setName(e.target.value)} /> */}
                            <div className="input">
                                <label>{"Cardholder's Name"}</label>
                                <div className="input-field">
                                    <input type={"text"} value={name} onChange={e => setName(e.target.value)} />
                                    {/* <img src={imgSrc} /> */}
                                </div>
                            </div>
                            {/* <Input label="Card Number" type="number" name="card_number" value={cardNumber} onChange={e => setCardNumber(e.target.value)} imgSrc="https://seeklogo.com/images/V/visa-logo-6F4057663D-seeklogo.com.png" /> */}
                            <div className="input">
                                <label>{"Card Number"}</label>
                                <div className="input-field">
                                    <input type={"number"} value={cardNumber} onChange={e => setCardNumber(e.target.value)} />
                                    <img src={"https://seeklogo.com/images/V/visa-logo-6F4057663D-seeklogo.com.png"} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    {/* <Input label="Expiration Date" type="month" name="exp_date" value={date} onChange={e => setDate(e.target.value)} /> */}
                                    <div className="input">
                                        <label>{"Expiration Date"}</label>
                                        <div className="input-field">
                                            <input type={"date"} value={date} onChange={e => setDate(e.target.value)} />
                                            {/* <img src={imgSrc} /> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    {/* <Input label="CVV" type="number" name="cvv" /> */}
                                    <div className="input">
                                        <label>{"CVV"}</label>
                                        <div className="input-field">
                                            <input type={"number"} />
                                            {/* <img src={imgSrc} /> */}
                                        </div>
                                    </div>
                                </div>
                                {/* <Input label="city" type="text" name="city" value={city} onChange={e => setCity(e.target.value)} /> */}
                                <div className="input">
                                    <label>{"city"}</label>
                                    <div className="input-field">
                                        <input type={"text"} value={city} onChange={e => setCity(e.target.value)} />
                                        {/* <img src={imgSrc} /> */}
                                    </div>
                                </div>
                            </div>
                            <Button text="Place order" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )

}









export default CheckOutPage;
