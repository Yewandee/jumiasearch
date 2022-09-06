
import React,{useState,useRef} from 'react';
import { Link, useLocation, useNavigate} from 'react-router-dom';

const SignIn= ()=>{

    const [inputs,setInputs]= useState({
        userName:'',
        passWord:'',
    }); 
    const {state}= useLocation();
    const navigate= useNavigate();
    const paraRef= useRef()
    
    const {userName, passWord}= inputs;

    const handleFormSubmit=(event)=>{

        event.preventDefault();
        
        if (!localStorage.getItem('users')) {
            
            localStorage.setItem('users',JSON.stringify([]))

        }

        const usersArray= JSON.parse(localStorage.getItem('users'))

        const isRegistered= usersArray.find(user=>user.userName  === userName && user.passWord === passWord)

        console.log(isRegistered)

        if (usersArray.length && isRegistered) {
            
            sessionStorage.setItem('userLogin','yes')

            state &&  navigate(`/product/${state.searchTerm}`);
        }else paraRef.current.style.display='block';

    }

    const handleInputChange=(event)=>{

        const name= event.target.name;

        const value= event.target.value;

        setInputs(prevInputs=>{

            return ({...prevInputs,[name]:value})
        })
    }

    
    return(
        <div className='container-fluid d-flex justify-content-center align-items-center align-self-center' style={{position:'absolute', top:'50%', left:'0px',transform:'translate(0,-50%)'}}>

            <form onSubmit={handleFormSubmit} className='d-flex flex-column align-items-center ' style={{width:"40%", border:'solid thin grey', padding:'20px'}}>

                <h3 style={{textAlign:'center'}}>Sign In</h3>

                <div className="input-group mb-3 ">
                    <span className="input-group-text" id="basic-addon1" style={{height:'100%'}}>User Name</span>
                    <input onChange={handleInputChange} type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" name='userName' value={userName}/>
                </div>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1" style={{height:'100%'}}>Password</span>
                    <input onChange={handleInputChange} type="password" className="form-control" placeholder="*******" aria-label="Username" aria-describedby="basic-addon1" name='passWord' value={passWord}/>
                </div>
                <button className='bg-primary' type='submit' style={{padding:'0.5rem 2rem', border:'none', color:'white', fontWeight:'bold'}}>Submit</button>

                <p ref={paraRef} style={{marginTop:'20px', fontWeight:'bold', color:'red', display:'none'}}>You are not registered, please <Link to='/signup' style={{color:'green'}}>Signup</Link> to use our service</p>

            </form>

        </div>
    )
    
}

export default SignIn;