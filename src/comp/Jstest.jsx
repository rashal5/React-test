import React,{useState} from 'react'

function Jstest() {
    const [num,Checkup]=useState('') 
    const InputData1 = (e)=>{

        
        var a = e.target.value;
        console.log(a);
    }
    const InputData2 = (e)=>{

        
        var b = e.target.value;
        console.log(b);
    }
    const InputData3 = (e)=>{

        
        var c = e.target.value;
        console.log(c);
    }
    const InputData4 = (e)=>{

        
        var d = e.target.value;
        console.log(d);
    }
    const Check=(a)=>{
            Checkup(num)
            if(num !== ''){
                console.log('done')
            }
    
    }
    
    return (
        <div>
          <h2>Registration Form</h2>
          <form onSubmit={Check}>
            <div>
              <label htmlFor="name" >Name:</label>
              <input 
                type="text" 
                id="name" 
                name="name"  
                onChange={InputData1}
                required 
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                onChange={InputData2}
                required 
              />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input 
                type="password" 
                id="password" 
                name="password" 
                onChange={InputData3} 
                required 
              />
            </div>
            <div>
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <input 
                type="password" 
                id="confirmPassword" 
                name="confirmPassword" 
                onChange={InputData4}
                required 
              />
            </div>
            <button type="submit">Register</button>
          </form>
        </div>
      );
    };
    export default Jstest;