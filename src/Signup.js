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

    function handleSubmitForm(){
        
    }

    return (
        <div>
            <form onSubmit={handleSubmitForm}>
                <input type="text" placeholder="First name" name="firstName" value={signUpData.firstName}/>
                <input type="text" placeholder="Last name" name="lastName" value={signUpData.lastName}/>
                <input type="text" placeholder="Email" name="email" value={signUpData.email}/>
                <input type="text" placeholder="Password" name="password" value={signUpData.password}/>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default SignUp;