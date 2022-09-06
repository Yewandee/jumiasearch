
import React,{useState, useRef} from 'react';

const formValidation=(inputs, event,element)=>{

    let paraTag, targetElement;

    if (event) {
        paraTag=event.target.parentElement.nextElementSibling; 
        targetElement= event.target;     
    }else{
        paraTag= element.parentElement.nextElementSibling;
        targetElement= element
    }

    switch (targetElement.name) {

        case 'firstName':

           if (!inputs.firstName) paraTag.style.display='block';
           else return true;
            break;
        case 'lastName':

            if(!inputs.lastName) paraTag.style.display='block'; 
            else return true;
            break;
        case 'email':

            const emailString=targetElement.value;
            const atSymbolIndex= emailString.indexOf('@');
            const dotSymbolIndex= emailString.indexOf('.');

            if(atSymbolIndex<1 || dotSymbolIndex<= atSymbolIndex + 2 || dotSymbolIndex === emailString.length - 1) paraTag.style.display='block';
            else return true;
            break;
        case 'userName':

            const userNameArray= targetElement.value.split('');
            const OddCharacter= userNameArray.find(char=>{ 
                const isNumber= (char.charCodeAt(0)>=48 && char.charCodeAt(0)<=57 );
                const isCapitalLetter= (char.charCodeAt(0)>=65 && char.charCodeAt(0)<=90);
                const isSmallLetter= (char.charCodeAt(0)>=97 && char.charCodeAt(0)<=122 );

                return !isNumber && !isCapitalLetter && !isSmallLetter;
            })
                
            if (OddCharacter || userNameArray.length<5 || userNameArray.length>12) paraTag.style.color='red';
            else return true;
            break;
        default:// for password
            if (targetElement.value.length<8 || targetElement.value.length>20) paraTag.style.color='red';
            else return true;
    }
}

const hideParaTag=(event)=>{
    const paraTag=event.target.parentElement.nextElementSibling;

    (event.target.name !=='userName' && event.target.name !=="passWord")? paraTag.style.display='none': paraTag.style.color='green'
}

const SignUp= ()=>{

    const [inputs,setInputs]= useState({

        firstName:'',
        lastName:'',
        email:'',
        userName:'',
        passWord:'',
    }); 

    const isFormValid= useRef(false);
    
    const {firstName, lastName, email, userName, passWord}= inputs

    const handleFormSubmit=(event)=>{

        event.preventDefault();

        const formInputObject= event.target.elements;
        const inputsNameArray=['firstName','lastName','email', 'userName','passWord'];

        const validInputArray = inputsNameArray.map(inputName=>{
             return formValidation(inputs, undefined,formInputObject[inputName]) === true;
        })


        if(validInputArray.length === Object.keys(inputs).length) isFormValid.current= true;

        if (isFormValid.current) {

            if (!localStorage.getItem('users')) {
            
                localStorage.setItem('users',JSON.stringify([]))
    
            }
    
            const usersArray= JSON.parse(localStorage.getItem('users'))
    
            const isRegistered= usersArray.find(user=> user.email === inputs.email && userName === inputs.userName)
    
            if (!isRegistered) {
               
                localStorage.setItem('users',JSON.stringify([...usersArray,inputs]));
                
                sessionStorage.setItem('userLogin','yes');
                alert('You have been registered');
            } else alert('The Username or email had been selected, try another.');         
        }
        
    }

    const handleInputChange=(event)=>{
        const name= event.target.name;

        const value= event.target.value;

        setInputs(prevInputs=>{

            return ({...prevInputs,[name]:value})
        })
    }

    
    return(
        <div className='conatiner-fluid d-flex justify-content-center align-items-center' style={{height:'100vh', marginBottom:'150px'}}>

            <form onSubmit={handleFormSubmit} className='d-flex flex-column align-items-center ' style={{width:"40%", border:'solid thin grey', padding:'20px'}}>
                <h3 style={{textAlign:'center', color:'red', fontWeight:'bold', display:'none'}}>Sign Up</h3>

                <div style={{width:'100%'}}>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1" style={{height:'100%'}}>First Name</span>
                        <input onFocus={hideParaTag} onBlur={(event)=>formValidation(inputs,event)} onChange={handleInputChange} type="text" className="form-control" placeholder="John" aria-label="Username" aria-describedby="basic-addon1" name='firstName' value={firstName}/>
                    </div>
                    <p style={{textAlign:'center', color:'red', fontWeight:'bold', display:'none'}}>Enter your first name</p>
                </div>

                <div style={{width:'100%'}}>

                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1" style={{height:'100%'}}>Last Name</span>
                        <input onFocus={hideParaTag} onBlur={(event)=>formValidation(inputs,event)} onChange={handleInputChange} type="text" className="form-control" placeholder="Wick" aria-label="Username" aria-describedby="basic-addon1" name='lastName' value={lastName}/>
                    </div>
                    <p style={{textAlign:'center', color:'red', fontWeight:'bold', display:'none'}}>Enter your last name</p>
                    
                </div>

                <div style={{width:'100%'}}>

                    <div className="input-group mb-3 ">
                        <span className="input-group-text" id="basic-addon1" style={{height:'100%'}}>Email</span>
                        <input onFocus={hideParaTag} onBlur={(event)=>formValidation(inputs,event)} onChange={handleInputChange} type="email" className="form-control" placeholder="examaple@gmail.com" aria-label="Username" aria-describedby="basic-addon1" name='email' value={email}/>
                    </div>
                    <p style={{textAlign:'center', color:'red', fontWeight:'bold', display:'none'}}>Ensure your email is entered correctly</p>

                </div>

                <div style={{width:'100%'}}>
                    <div className="input-group mb-3 ">
                        <span className="input-group-text" id="basic-addon1" style={{height:'100%'}}>User Name</span>
                        <input onFocus={hideParaTag} onBlur={(event)=>formValidation(inputs,event)} onChange={handleInputChange} type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" name='userName' value={userName}/>
                    </div>
                    <p style={{textAlign:'center', color:'green', fontWeight:'bold'}}>Username must be alphanumeric and contains 5-12 characters </p>
                </div>

                <div style={{width:'100%'}}>

                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1" style={{height:'100%'}}>Password</span>
                        <input onFocus={hideParaTag} onBlur={(event)=>formValidation(inputs,event)} onChange={handleInputChange} type="password" className="form-control" placeholder="*******" aria-label="Username" aria-describedby="basic-addon1" name='passWord' value={passWord}/>
                    </div>
                    <p style={{textAlign:'center', color:'green', fontWeight:'bold'}}> Password must be 8 to 20 characters long</p>

                </div>

                <button className='bg-primary' type='submit' style={{padding:'0.5rem 2rem', border:'none', color:'white', fontWeight:'bold'}}>Submit</button>

            </form>

        </div>
    )
    
}

export default SignUp;