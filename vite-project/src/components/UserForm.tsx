import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {Button,TextField } from "@mui/material";
import "../App.css";
const UserForm = () => {
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email,setEmail] = useState("");
    const navigate = useNavigate(); //declaring naviigate funct

    const handleSubmit =() =>{
        if(name && phoneNumber && email){
            const userData = {name, phoneNumber, email};
            localStorage.setItem("userData", JSON.stringify(userData));
            alert("Login successfull");

            setTimeout(() =>{
                navigate("/data");
            },2000);
        }
    };


    return(
        <>
        <div className="form-container">
            <h2>Fill in your details</h2>
            <TextField
                className="input-field"
                label="Name"
                value={name}
                onChange={(e)=> setName(e.target.value)}
                fullWidth
            />
            <TextField
                className="input-field"
                label="Phone Number"
                value={phoneNumber}
                onChange={(e)=> setPhoneNumber(e.target.value)}
                fullWidth
            />
            <TextField
                className="input-field"
                label="Email"
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                fullWidth
            />

            <Button className="submit-button" variant="contained" color="primary" onClick={handleSubmit}>Submit</Button>



        </div>
        
        </>
    );
}



export default UserForm