import React, {useState} from 'react'

const Form = () => {

    // const [firstName, setFirstName] = useState("")
    // const [lastName, setlastName] = useState("")
    // const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")

    const [userInfo, setUserInfo] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""

    })

    const changeHandler = (e) => {
        setUserInfo({...userInfo, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userInfo.firstName, userInfo.lastName, userInfo.email, userInfo.password)
    }

    return (
        <div className="container">
            <form action="" className= "form col-md-4 mx-auto" onSubmit={handleSubmit}>
                <h1>New Applicant</h1>
                <h5 className="slide">*not sketchy*</h5>
                <div className= "form-group mt-3">
                    
                    <label htmlFor="" className="form-label">First Name:</label>
                    <input type="text" name="firstName" className="form-control" onChange={changeHandler}/>
                </div>
                    
                    {userInfo.firstName && userInfo.firstName.length < 2 ? <p className="text-danger">First Name must have 2 letters</p> : ""
                    }

                <div className= "form-group mt-3">
                    <label htmlFor="" className="form-label">Last Name:</label>
                    <input type="text" name="lastName" className="form-control" onChange={changeHandler}/>
                </div>
                
                    {userInfo.lastName && userInfo.lastName.length < 2 ? <p className="text-danger">Last Name must have 2 letters</p> : ""
                    }
                <div className= "form-group mt-3">
                    <label htmlFor="" className="form-label">Email:</label>
                    <input type="text" name="email" className="form-control" onChange={changeHandler}/>
                </div>
                
                    {userInfo.email && userInfo.email.length < 11 ? <p className="text-danger">Please Enter Valid Email Address</p> : ""
                    }
                <div className= "form-group mt-3">
                    <label htmlFor="" className="form-label">Password:</label>
                    <input type="password" name="password" className="form-control" onChange={changeHandler}/>
                </div>
                
                    {userInfo.password && userInfo.password.length < 8 ? <p className="text-danger">Password must have 8 Characters</p> : ""
                    }
                <div className= "form-group mt-3">
                    <label htmlFor="" className="form-label">Password Confirm:</label>
                    <input type="password" className="form-control" />
                </div>
            </form>
        </div>
    )
}

export default Form