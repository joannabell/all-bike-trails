import { useState } from "react";


function SignUp() {
    const [ signUpData, setSignUpData ] = useState({ 
        firstName: "", 
        lastName: "", 
        email: "", 
        password: "" 
    });
    
    function handleFormChange(event){
        setSignUpData({...signUpData, [event.target.name]: event.target.value})
    }

    function handleSubmitForm(event){
        event.preventDefault()
        console.log(signUpData)
        fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json" 
            },
            body: JSON.stringify(signUpData)
        })
        .then(res => res.json())
        .then(user => console.log(user))
    }

    return (
        <div>
            <form onSubmit={handleSubmitForm} onChange={handleFormChange}>
                <input type="text" placeholder="First name" name="firstName" value={signUpData.firstName} required/>
                <input type="text" placeholder="Last name" name="lastName" value={signUpData.lastName} required/>
                <input type="text" placeholder="Email" name="email" value={signUpData.email} required/>
                <input type="text" placeholder="Password" name="password" value={signUpData.password} required/>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default SignUp;