import axios from "axios";
import { useState } from "react";


export const Register = () => {

    const [values, setValues] = useState({
        f_name: "",
        l_name: "",
        pass: "",
        email: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        let body = {
            f_name: values.f_name,
            l_name: values.l_name,
            pass: values.pass,
            email: values.email,
        };
        //console.log(values);
        //console.log(body);
        let res = await axios.post("http://localhost:8080/user/register2", values);
    };

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input type="text" placeholder="enter first name" name="f_name" id="name" onChange={handleChange}></input>
                <br></br><br></br>
                <input type="text" placeholder="enter last name" name="l_name" onChange={handleChange}></input>
                <br></br><br></br>
                <input type="password" placeholder="enter password" name="pass" onChange={handleChange}></input>
                <br></br><br></br>
                <input type="email" placeholder="enter email" name="email" onChange={handleChange}></input>
                <br></br><br></br>
                <input type='submit' value='register'></input>
            </form>
        </div>
    );
}