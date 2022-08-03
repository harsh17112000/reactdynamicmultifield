import React, { useState } from 'react'
import "./home.css"

const Home = () => {

    const [formValues, setFormValues] = useState([{ email: "" }]);

    console.log(formValues);


    let handleChange = (i, e) => {
        let newFormValues = [...formValues];
        newFormValues[i][e.target.name] = e.target.value;
        setFormValues(newFormValues);
    }

    let addFormFields = () => {
        setFormValues([...formValues, { email: "" }])
    }

    let removeFormFields = (i) => {
        let newFormValues = [...formValues];
        newFormValues.splice(i, 1);
        setFormValues(newFormValues)
    }

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(formValues);

        let d = formValues.map((el,k)=> el.email);
        console.log(d);
        alert(JSON.stringify(formValues));
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                {formValues.map((element, index) => (
                    <div className="form-inline" key={index}>
                        <label>Email</label>
                        <input type="text" name="email" value={element.email || ""} onChange={e => handleChange(index, e)} />
                        {
                            index ?
                                <button type="button" className="button remove" onClick={() => removeFormFields(index)}>Remove</button>
                                : null
                        }
                    </div>
                ))}
                <div className="button-section">
                    <button className="button add" type="button" onClick={() => addFormFields()}>Add</button>
                    <button className="button submit" type="submit">Submit</button>
                </div>
            </form>
        </>
    )
}

export default Home