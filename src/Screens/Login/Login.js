
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { ShowAlert, ValidateEmail } from '../../utils/CommonFunctions'



const Login = () => {
    const [show, setshow] = useState(false)

    const [data, setData] = useState({
        email: "",
        password: ""
    });

    console.log(data.email);

    const onAlertButtonTap = (data) => {
        console.log("all done" + JSON.stringify(data));
    }

    const clicked = () => {
        // e.preventDefault();

        // const {email , password} = data 

        if (data.email == '') {
            ShowAlert({
                title: "enter email", buttonText: "Submit",
                text: "sub text", onSubmit: (data) => onAlertButtonTap(data)
            })
        }
        else if (ValidateEmail(data.email)) {
            ShowAlert({
                title: "include @ provide", buttonText: "Submit",
                text: "sub text", onSubmit: (data) => onAlertButtonTap(data)
            })
        } else if (data.password == '') {
            ShowAlert({
                title: "enter password", buttonText: "Submit",
                text: "sub text", onSubmit: (data) => onAlertButtonTap(data)
            })
        } else {
            ShowAlert({
                title: "Good job!",
                text: ` your email is ${data.email}`,
                icon: "success",
            });
        }

    }
    return (
        <>
            <section>
                <h1> React login from</h1>
                <div className='from'>
                    {/* <form action=""> */}
                    <div className='formData'>
                        <label htmlFor="">email</label>
                        <input type="text" name='email' value={data.email} onChange={(e) => { setData({ ...data, email: e.target.value }) }} />
                    </div>
                    <div className='formData'>
                        <label htmlFor="">password</label>
                        <div className='pass'>
                            <input type={show ? "text" : 'password'} name='password' value={data.password} onChange={(e) => { setData({ ...data, password: e.target.value }) }} />
                            <i class={show ? "fas fa-eye" : 'fas fa-eye-slash'} onClick={() => setshow(!show)}></i>

                        </div>
                    </div>
                    <div className='formData'>
                        <div className='checkbox'>
                            <input type="checkbox" defaultChecked name="" id="" className='cheked' />
                            <span>I accept condtion</span>
                        </div>
                    </div>

                    <button className='btn btn-primary' onClick={() => clicked()}> Login</button>
                    {/* </form> */}
                    <span className='mt-3'>create a account <NavLink to = "/register"> register</NavLink> </span>
                </div>

            </section>
        </>
    )
}

export default Login




// const getData = (e) =>{
//     const {name , value} = e.target
//     // console.log(value);
//     setData((prev)=>{
//         return {
//             ...prev,
//             [name] : value

//         }
//     })
// }