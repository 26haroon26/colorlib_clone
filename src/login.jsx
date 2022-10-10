import React from "react";
import './login.css';

const LoginPage =()=>{
return<>
<div className="main">
    <div className="leftSide">
        <img src="images/colorlib.jpg" alt="" />
    </div>
    <div className="rightSide">
        <form action="">
            <h1>Login to continue</h1>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
           <div className='check'>
            <div >
                <input type="checkbox" name="" id="checkbox"  />
             <label htmlFor="checkbox">Rember Me</label>
             </div>
              <a href="">Forgot Password ?</a>
           </div>
           <button>LOGIN</button>
           <span>or sign up using</span>
           <div className="images">
           <img src="images/facebook.png" alt="" className="facebook" />
           <img src="images/twitter.png" alt="" className="twitter" />
           </div>
        </form>
    </div>
</div>
</>
}
export default LoginPage;
