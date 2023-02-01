import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";


function MenuDiv() {

    const navigate = useNavigate();

    const clickCol = (collection) => {
        navigate(`/home/${collection}`)
        window.location.reload();
    }

    return (
        <>
            <div className="menu-content">
                <div onClick={() => clickCol('jerseys')} >jerseys</div>
                <hr />
                <div onClick={() => clickCol('shoes')}>shoes</div>
                <hr />
                <div onClick={() => clickCol('baskts')}>baskts</div>
                <hr />
                <div onClick={() => clickCol('basketballs')}>basketballs</div>

            </div>

        </>
    );
}

export default MenuDiv;