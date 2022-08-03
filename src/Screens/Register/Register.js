import React, { useState, useEffect } from 'react'
import "./register.css";
import { ShowAlert, ValidateEmail, ValidateNumber } from '../../utils/CommonFunctions'
import Button from 'react-bootstrap/Button'
// import { NavLink } from "react-router-dom"
import Form from 'react-bootstrap/Form'
import { FaPen, FaPlus, FaTrash } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom"
import { FiEye, FiEyeOff } from "react-icons/fi"
import Select from 'react-select'


const options = [
    { value: 'Admin', label: 'Admin' },
    { value: 'User', label: 'User' },
]


const Register = () => {

    const history = useNavigate();
    // to use any varialble name , bt conventional is navigate

    const [show, setShow] = useState(false);


    const [ArrData, setArrData] = useState([]);


    // console.log(ArrData);
    // const [ArrEducation, setEducation] = useState([{ name: 'B.E', id: 1 }, { name: 'MBA', id: 1 }, { name: 'BCA', id: 1 },]);


    const [data, setData] = useState({
        fname: "",
        lname: "",
        email: "",
        mobile: "",
        pass: "",
        sel: ""
    });



    // console.log(data.mobile);
    // above bdhi field na define karie and khali null lakhi daie tob chale 
    // kmk direct aapde data set kraviej 6


    // const [selectedOption, setSelectedOption] = useState(null);


    const onAlertButtonTap = (data) => {
        console.log("all done" + JSON.stringify(data));
    }

    

    // const Validatenum = (n) => {
     
    // }

    const senddata = () => {
        //  e.preventDefault();
        // jo form use karsu to bydefault refresh nehaviour aavse

        console.log("User Data : " + JSON.stringify(data));




        // return
        if (data.fname == '') {
            ShowAlert({
                title: "enter fname", buttonText: "Submit",
                text: "sub text", onSubmit: (data) => onAlertButtonTap(data)
            })
        } else if (data.lname == '') {
            ShowAlert({
                title: "enter lname", buttonText: "Submit",
                text: "sub text", onSubmit: (data) => onAlertButtonTap(data)
            })
        } else if (data.email == '') {
            ShowAlert({
                title: "enter email", buttonText: "Submit",
                text: "sub text", onSubmit: (data) => onAlertButtonTap(data)
            })
        } else if (ValidateEmail(data.email)) {
            ShowAlert({
                title: "include @ provide", buttonText: "Submit",
                text: "sub text", onSubmit: (data) => onAlertButtonTap(data)
            })
        }else if(data.mobile == ""){
             ShowAlert({
                title: "number provide", buttonText: "Submit",
                text: "sub text", onSubmit: (data) => onAlertButtonTap(data)
            })
        } else if (data.pass == '') {
            ShowAlert({
                title: "enter password", buttonText: "Submit",
                text: "sub text", onSubmit: (data) => onAlertButtonTap(data)
            })
        }
        else {
            ShowAlert({
                title: "done", buttonText: "Submit",
                text: `${data.fname.toUpperCase()} Your Data Add Successfully`, onSubmit: (data) => onAlertButtonTap(data)
            });

            setArrData([...ArrData, data]);

            // console.log(ArrData);
            setData({ fname: "", lname: "", email: "", mobile: "", pass: "", sel: "" })
        }

    }

    const navigate = () => {
        history("/");
    }

    const gouserpage = () => {
        history("/userdata", { state: ArrData });
    }


    return (
        <section>
            <h1>React form</h1>
            <div className="main_part">

                {/* <form> */}

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>FirstName</Form.Label>
                    <Form.Control type="text" value={data.fname}
                        onChange={(e) => setData({ ...data, fname: e.target.value })}
                        name="fname" placeholder="FirstName" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>LastName</Form.Label>
                    <Form.Control type="text" value={data.lname} onChange={(e) => setData({ ...data, lname: e.target.value })} name="LastName" placeholder="lasttname" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} name="Email" placeholder="email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Mobile</Form.Label>
                    <Form.Control type="text" maxLength={10} value={data.mobile} onChange={(e) => setData({ ...data, mobile: e.target.value.replace(/[^0-9]/g, '')  })}  name="mobile" placeholder="Mobile" />
                </Form.Group>

                <Form.Group className="mb-4 foreye" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type={show ? "text" : "password"} value={data.pass} onChange={(e) => setData({ ...data, pass: e.target.value })} name="pass" placeholder="Password" />
                    {
                        show ? <FiEye className='icon' onClick={() => setShow(!show)} /> : <FiEyeOff className='icon' onClick={() => setShow(!show)} />
                    }
                </Form.Group>

                <Select options={options}
                    defaultValue={data}
                    onChange={(e) => setData({ ...data, sel: e.value })} name="sel" />

                {/* selct na onchange event ma target nalakhvu direct j value lakhsu to pn get thaijse value kmk aapde tene upr ek array ma store kryo 6 atle direct get thai jse */}

                <Form.Group className="mb-3 mt-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" defaultChecked />
                </Form.Group>


                <Form.Group className="mb-3 mt-3" controlId="formBasicCheckbox">
                    <p onClick={() => gouserpage()} style={{ cursor: "pointer" }}> view</p>
                </Form.Group>

                <Button variant='outline-primary' onClick={() => senddata()}>Submit</Button>

                <span className='mt-3 d-flex justify-content-center align-items-center'>Create Account
                    <FaPlus className='mx-3' style={{ color: "blue", fontSize: "20px", cursor: "pointer" }} onClick={() => navigate()} />
                </span>

                {/* </form> */}

            </div>


        </section>
    )
}

export default Register;


// {ArrData.map((data,key) => renderList(data,key))}


// onClick={()=>gouserpage()}


// else if (data.mobile == '') {
//     ShowAlert({
//         title: "enter mobile", buttonText: "Submit",
//         text: "sub text", onSubmit: (data) => onAlertButtonTap(data)
//     })
// } else if (data.mobile.length != 10) {
//     ShowAlert({
//         title: "enter 10 digit", buttonText: "Submit",
//         text: "sub text", onSubmit: (data) => onAlertButtonTap(data)
//     })
// }

















// for(let i = 0; i<data.length;i++){

//     console.log(JSON.stringify(data[i].fname));
// }

// above page ma input ma value add na karo to pn chale emj lakhyu 6 samajva mate

// my method for storing data
// {
//     setArrData((old)=>{
//         return [...old,data]
//     })
// }


{/* <NavLink to="/">login</NavLink>  */ }

{/* <i class={show ? "fas fa-eye icon icon" : "fas fa-eye-slash icon"} onClick={() => setShow(!show)}></i> */ }

{/* {ArrData.map(() => 
                <div>
                    <h4>

                    </h4>
                </div>
            )} */}


// const getdata = (e) => {
//     const { name, value } = e.target;
//     // console.log(value);

//     setData((preval) => {
//         return {
//             ...preval,
//             [name]: value
//         }
//     })
// };





// const [getdetails, setDetils] = useState([]);

{/* <i class=""></i> */ }


      // return
        // const { fname, lname, email, mobile, pass } = data
        // // console.log(fname);

        // if (!data) {
        //     swal("fill data!", "You clicked the button!", "error");
        // } else if (!email.includes("@")) {
        //     swal("please include @!", "You clicked the button!", "error");
        // } else {
        //     setDetils((old) => {
        //         return [...old, data]
        //     });

        //     swal({
        //         title: "Good job!",
        //         text: `name : ${fname}`,
        //         icon: "success",
        //     });
        // }



        //   console.log(getdetails);