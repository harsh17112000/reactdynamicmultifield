import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import { FaPen, FaPlus, FaTrash } from "react-icons/fa";
import { NavLink, useLocation } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Navbar from 'react-bootstrap/Navbar'
import Container from "react-bootstrap/Container"
import FormControl from "react-bootstrap/FormControl"
import Nav from "react-bootstrap/Nav"
import Select from 'react-select'
import { ShowAlert, ValidateEmail } from '../../utils/CommonFunctions'
import Card from 'react-bootstrap/Card'


const options = [
    { value: 'Admin', label: 'Admin' },
    { value: 'User', label: 'User' },
]


const Usersdata = () => {


    const location = useLocation();
    // console.log(location.state);

    const [data, setData] = useState([]);

    const [filteredData, setFilteredData] = useState([]);
    console.log(data);

    const [show, setShow] = useState(false);

    const [index, setIndex] = useState(null); // for find uniqe user

    const [updatedata, setUpdatedata] = useState(null);
    // null means pchi tme koi pn field extra add kari sko jo directj tme input mathi
    // add karo to define karvani need nathi


    // console.log(updatedata.fname);

    // for api data handling 

    const [fetchdata, setFetchadata] = useState([]);
    console.log(fetchdata);


    const [newdata, setNewData] = useState("");
    // for new user addition


    const [searchdata, setSearchdata] = useState("");
    // console.log(searchdata.search);


    // storing search data
    // const [storedata,setStoredata] = useState([]);

    const finddata = (text) => {

        console.log(text);

        // setSearchdata(text)
        let finalSearch = text.toLowerCase()

        if (finalSearch == '') {

            setFilteredData(data)
        } else {
            const generatedata = filteredData.filter((sdata) => {
                let fname = sdata.fname.toLowerCase().match(finalSearch)
                let mobile = sdata.mobile.toLowerCase().match(finalSearch)

                return fname || mobile
            });


            setFilteredData(generatedata)
            console.log(JSON.stringify(generatedata));
        }

    }


    const handleClose = () => {
        setShow(false)
    };

    // data addtime open popup
    const handleopen = () => {
        setShow(true);
        console.log("open");
    }

    // update time open popup
    const handleShow = (d) => {
        setShow(true)
        setUpdatedata(d)
        // console.log(d.fname);
    }

    useEffect(() => {
        setData(location.state)
        setFilteredData(location.state)
        getapi()
    }, []);



    const dltuserdata = (id) => {
        console.log(id);

        const newdata = filteredData.filter((e, k) => {
            return k != id
        });

        // console.log(newdata);

        setFilteredData(newdata);
    };

    const update = () => {

        let newStateArr = data.map((el, ind) => ind == index ? updatedata : el); // means key match thay to update data ni je value 6 te set karo other wise as it is revado
        setFilteredData(newStateArr)
        setUpdatedata({ fname: "", lname: "", email: "", mobile: "", pass: "", sel: "" });

        console.log(newStateArr);



        setShow(false)

    };


    const addnewdata = () => {
        if (newdata.fname == "") {
            ShowAlert({
                title: "enter fname", buttonText: "Submit",
                text: "sub text"
            })
        } else if (newdata.lname == '') {
            ShowAlert({
                title: "enter lname", buttonText: "Submit",
                text: "sub text"
            })
        } else if (newdata.email == '') {
            ShowAlert({
                title: "enter email", buttonText: "Submit",
                text: "sub text"
            })
        } else if (ValidateEmail(newdata.email)) {
            ShowAlert({
                title: "include @ provide", buttonText: "Submit",
                text: "sub text"
            })
        } else if (newdata.mobile == '') {
            ShowAlert({
                title: "enter mobile", buttonText: "Submit",
                text: "sub text"
            })
        } else if (newdata.mobile.length != 10) {
            ShowAlert({
                title: "enter 10 digit", buttonText: "Submit",
                text: "sub text"
            })
        } else if (newdata.pass == '') {
            ShowAlert({
                title: "enter password", buttonText: "Submit",
                text: "sub text"
            })
        } else {
            setFilteredData([...filteredData, newdata]);
            setNewData({ fname: "", lname: "", email: "", mobile: "", pass: "", sel: "" });
            setShow(false);

            console.log(newdata);
        }

    }



    const getapi = async () => {

        // const data = await fetch("https://random-data-api.com/api/users/random_user?size=20");
        const data = await fetch("https://reqres.in/api/users");

        const users = await data.json();
        console.log(users.data);

        setFetchadata(users.data)
    }

    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1">Home</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="text"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                name='search1'
                                onChange={(e) => finddata(e.target.value)}
                            />
                            <Button variant="outline-success" onClick={() => finddata()}>Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


            <h1 className='text-center mt-2'>User Data</h1>

            <div className="add_user container-fluid d-flex justify-content-between">
                <NavLink to="/register" className="pl-3">Home</NavLink>
                <Button variant="primary col-lg-2" onClick={() => {
                    handleopen("")
                    setUpdatedata(null);
                }}>Add User</Button>
            </div>

            {/* <Table striped bordered hover className='mt-4'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Password</th>
                        <th>Role</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>

                    {
                        filteredData.map((data, key) => {
                            return (
                                <>

                                    <tr>
                                        <td>{key + 1}</td>
                                        <td>{data.fname}</td>
                                        <td>{data.lname}</td>
                                        <td>{data.email}</td>
                                        <td>{data.mobile}</td>
                                        <td>{data.pass}</td>
                                        <td>{data.sel}</td>
                                        <td className='text-center'>
                                            <FaPen className='mx-3'
                                                onClick={() => {
                                                    setIndex(key)
                                                    handleShow(data)
                                                }}
                                                style={{ color: "#03ad03", fontSize: "20px", cursor: "pointer" }} />
                                            <FaTrash className='mx-3'
                                                onClick={() => dltuserdata(key)}
                                                style={{ color: "red", fontSize: "20px", cursor: "pointer" }} />
                                        </td>
                                    </tr>
                                </>
                            )
                        })
                    }

                </tbody>
            </Table> */}


            {/* User Card */}

            <div className="container">
                <div className="row d-flex justify-content-evenly align-items-center flex-wrap">
                    {
                        filteredData.map((e, i) => {
                            return (
                                <>
                                    <div
                                        style={{ width: '16rem' }}
                                        className="mb-2 bg-dark text-light m-2 col-lg-2"
                                    >
                                        <h4 className='text-center pt-2 pb-2'>{e.fname.toUpperCase()}</h4>
                                        <Card.Body>
                                            <p>LastName : {e.lname}</p>
                                            <p>Email : {e.email}</p>
                                            <p>Mobile : {e.mobile}</p>
                                            <p>Password : {e.pass}</p>
                                            <p>Roll : {e.sel}</p>
                                        </Card.Body>
                                        <div className="icons_updatedlt pb-2">
                                            <FaPen className='mx-3'
                                                onClick={() => {
                                                    setIndex(i)
                                                    handleShow(e)
                                                }}
                                                style={{ color: "#03ad03", fontSize: "20px", cursor: "pointer" }} />
                                            <FaTrash className='mx-3'
                                                onClick={() => dltuserdata(i)}
                                                style={{ color: "red", fontSize: "20px", cursor: "pointer" }} />
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>

            </div>

            {/* <div className="container">
                <div className="row d-flex justify-content-evenly align-items-center flex-wrap">

                    {fetchdata.map((e, k) => {
                        return (
                            <>
                                <div
                                    style={{ width: '20rem' }}
                                    className="mb-2 bg-dark text-light m-2 col-lg-4"
                                >
                                  
                                    <Card.Body>
                                    <div className="img">
                                        <img src={e.avatar} alt="" />
                                    </div>
                                        <p>ID : {e.id}</p>
                                        <p>Username : {e.first_name}</p>
                                        <p>Lastname : {e.last_name}</p>
                                        <p>Email : {e.email}</p>

                                    </Card.Body>
                                    <div className="icons_updatedlt pb-2">
                                        <FaPen className='mx-3'
                                            style={{ color: "#03ad03", fontSize: "20px", cursor: "pointer" }} />
                                        <FaTrash className='mx-3'

                                            style={{ color: "red", fontSize: "20px", cursor: "pointer" }} />
                                    </div>
                                </div>
                            </>
                        )
                    })}

                </div>
            </div> */}


            {/* ----------- model part---------------- */}

            {/* {updatedata != null ? */}
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Update Data</Modal.Title>
                </Modal.Header>
                <Modal.Body>


                    <div className="container">
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>FirstName</Form.Label>
                            <Form.Control type="text"
                                name="fname"
                                value={updatedata ? updatedata.fname : newdata.fname}
                                onChange={(e) => updatedata ? setUpdatedata({ ...updatedata, fname: e.target.value }) : setNewData({ ...newdata, fname: e.target.value })}
                                placeholder="FirstName" />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>LastName</Form.Label>
                            <Form.Control type="text"
                                name="lname" value={updatedata ? updatedata.lname : newdata.lname}
                                onChange={(e) => updatedata ? setUpdatedata({ ...updatedata, lname: e.target.value }) : setNewData({ ...newdata, lname: e.target.value })}
                                placeholder="LastName" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text"
                                name="email" value={updatedata ? updatedata.email : newdata.email}
                                onChange={(e) => updatedata ? setUpdatedata({ ...updatedata, email: e.target.value }) : setNewData({ ...newdata, email: e.target.value })}
                                placeholder="EmailName" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Mobile</Form.Label>
                            <Form.Control type="text"
                                name="mobile" value={updatedata ? updatedata.mobile : newdata.mobile}
                                onChange={(e) => updatedata ? setUpdatedata({ ...updatedata, mobile: e.target.value }) : setNewData({ ...newdata, mobile: e.target.value })}
                                placeholder="Mobile" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="text"
                                name="pass" value={updatedata ? updatedata.pass : newdata.pass}
                                onChange={(e) => updatedata ? setUpdatedata({ ...updatedata, pass: e.target.value }) : setNewData({ ...newdata, pass: e.target.value })}
                                placeholder="Password" />
                        </Form.Group>

                        <Select options={options}
                            defaultValue={updatedata ? updatedata.sel : newdata.sel}
                            onChange={(e) => updatedata ? setUpdatedata({ ...data, sel: e.value }) : setNewData({ ...newdata, sel: e.value })} name="sel" />
                    </div>
                </Modal.Body>


                <Modal.Footer>
                    <Button variant="primary" onClick={() => { updatedata ? update() : addnewdata() }}>Submit</Button>
                </Modal.Footer>
            </Modal>
            {/* : null} */}
        </div>
    )
}

export default Usersdata;

// onClick={()=>dltuser(key)} 
