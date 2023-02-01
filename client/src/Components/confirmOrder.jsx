import React from "react";
import Navbar from './Navbar'

import {
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBContainer,
    MDBRow
} from "mdb-react-ui-kit";

export default function ConfirmOrder() {

    const [productName, setProductName] = React.useState("");
    const [productPrice, setProductPrice] = React.useState("");
    const [allProducts, setAllProducts] = React.useState([]);
    console.log(allProducts)

    let cart = JSON.parse(sessionStorage.getItem("checkoutInfo"));
    if (allProducts.length === 0) {
        setAllProducts(cart);
    }

    return (
        <>
            <Navbar />
            <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
                <MDBContainer className="py-5 h-100">
                    <MDBRow className="justify-content-center align-items-center h-100">
                        <MDBCol lg="8" xl="6">
                            <MDBCard className="border-top border-bottom border-3 border-color-custom">
                                <MDBCardBody className="p-5">
                                    <p className="lead fw-bold mb-5" style={{ color: "#f37a27" }}>
                                        Purchase Reciept
                                    </p>

                                    <MDBRow>
                                        <MDBCol className="mb-3">
                                            <p className="small text-muted mb-1">Date</p>
                                            <p>02 February 2021</p>
                                        </MDBCol>
                                        <MDBCol className="mb-3">
                                            <p className="small text-muted mb-1">Order No.</p>
                                            <p>0124553564</p>
                                        </MDBCol>
                                    </MDBRow>

                                    <div
                                        className="mx-n5 px-5 py-4"
                                        style={{ backgroundColor: "#f2f2f2" }}
                                    >
                                        <MDBRow>
                                            <MDBCol md="8" lg="9">
                                                {allProducts.map((product, index) => {
                                                    if (index === 0) {
                                                        return <>    </>
                                                    } else {
                                                        return (
                                                            <div>
                                                                <p>{product.productName} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Quantity:{product.orderQuantity} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{(product.price * product.orderQuantity) + '$'}</p>
                                                            </div>
                                                        )
                                                    }
                                                })}
                                            </MDBCol>
                                            <MDBCol md="4" lg="3">
                                            </MDBCol>
                                        </MDBRow>
                                        <MDBRow>
                                            <MDBCol md="6" lg="5">
                                                <p className="mb-0">Shipping</p>
                                            </MDBCol>
                                            <MDBCol md="4" lg="10">
                                                <p className="mb-0">free Shipping for hilma students</p>
                                            </MDBCol>
                                        </MDBRow>
                                    </div>
                                    <MDBRow className="my-4">
                                        <MDBCol md="4" className="offset-md-8 col-lg-3 offset-lg-9">
                                            <p
                                                className="lead fw-bold mb-0"
                                                style={{ color: "#f37a27" }}
                                            >
                                                {allProducts.map((product, index) => {
                                                    if (index === 0) {
                                                        return (
                                                            <p>{product.totalPrice + '$'}</p>
                                                        )
                                                    }
                                                })}
                                            </p>
                                        </MDBCol>
                                    </MDBRow>

                                    <p
                                        className="lead fw-bold mb-4 pb-2"
                                        style={{ color: "#f37a27" }}
                                    >
                                        Tracking Order
                                    </p>

                                    <MDBRow>
                                        <MDBCol lg="12">
                                            <div className="horizontal-timeline">
                                                <ul className="list-inline items d-flex justify-content-between">
                                                    <li className="list-inline-item items-list">
                                                        <p
                                                            className="py-1 px-2 rounded text-white"
                                                            style={{ backgroundColor: "#f37a27" }}
                                                        >
                                                            Ordered
                                                        </p>
                                                    </li>
                                                    <li className="list-inline-item items-list">
                                                        <p
                                                            className="py-1 px-2 rounded text-white"
                                                            style={{ backgroundColor: "#f37a27" }}
                                                        >
                                                            Shipped
                                                        </p>
                                                    </li>
                                                    <li className="list-inline-item items-list">
                                                        <p
                                                            className="py-1 px-2 rounded text-white"
                                                            style={{ backgroundColor: "#f37a27" }}
                                                        >
                                                            On the way
                                                        </p>
                                                    </li>
                                                    <li
                                                        className="list-inline-item items-list text-end"
                                                        style={{ marginRight: "-8px" }}
                                                    >
                                                        <p style={{ marginRight: "-8px" }}>Delivered</p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </MDBCol>
                                    </MDBRow>
                                    <p className="mt-4 pt-2 mb-0">
                                        Want any help?{" "}
                                        <a href="#!" style={{ color: "#f37a27" }}>
                                            Please contact us
                                        </a>
                                    </p>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>

        </>
    );
}