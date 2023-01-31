// sessionStorage.setItem("cart", "{productName: abc, productPrice}");
import React, { useState } from "react";

const CheckOutPage = () => {
  const [adressFormData, setadressFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    city: "",
    country: "",
    street: "",
    cardHoldersName: "",
    CreditCardNumber: "",
    expirationDate: "",
    cvv: ""
  });

  const [paymentFormData, setPaymentFormData] = useState({});

  const handleInputChange = (event) => {
    setadressFormData({
      ...adressFormData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(adressFormData);
    // API call or other logic can go here
  };

  return (
    <div className="checkoutPage">
      <form onSubmit={handleSubmit}>
        <div className="checkoutAddressForm">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={adressFormData.firstName}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={adressFormData.lastName}
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={adressFormData.email}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="country"
            placeholder="Country"
            value={adressFormData.country}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={adressFormData.city}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="street"
            placeholder="Street"
            value={adressFormData.street}
            onChange={handleInputChange}
          />
        </div>
        <div className="creditCardForm">
        <input
            type="text"
            name="cardHoldersName"
            placeholder="Card Holder's Name"
            value={adressFormData.cardHoldersName}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="CreditCardNumber"
            placeholder="Credit Card Number"
            value={adressFormData.CreditCardNumber}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="expirationDate"
            placeholder="Expiration Date (DD/MM/YY)"
            value={adressFormData.expirationDate}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="cvv"
            placeholder="CVV"
            value={adressFormData.cvv}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CheckOutPage;
