import React from 'react'
import swal from 'sweetalert';


export const ShowAlert = ({ title, text, buttonText, onSubmit, icon }) => {

    swal({
        title: title,
        text: text,
        buttons: buttonText,
        icon: icon
    }).then((event) => {

        onSubmit(event)
    });
}

export const ValidateEmail = (email) => {
    const regex =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!(!email || regex.test(email) === false)) {
        return false;
    } else {
        return true;
    }

}


export const ValidateNumber = (num) => {

    let mobilepattern = /^[0-9]{10}$/;
    // means 0 to 9 ni vacchevalue hovi joie and {10} means 10 number thi vdhare na hovi joie
    
    if(mobilepattern.test(num)){
        return true
    }else{
        return false
    }

}

// setTxtMobile(txtMobile.replace(/[^0-9]/g, ''))