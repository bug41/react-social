import "./register.css"

export default function Register() {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">
                    LamaSocial                                        
                </h3>
                <span className="loginDesc">
                   Connect with friends and the world around you on Lamasocial. {" "} 
                </span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder="UserName" type="text" className="loginInput"/>
                    <input placeholder="Email" type="text" className="loginInput"/>
                    <input placeholder="Password" type="text" className="loginInput"/>
                    <input placeholder="Password Again" type="text" className="loginInput"/>
                    <button className="loginButton">Sign Up</button>
                    <span className="loginForgot">Forgot Password?</span>
                    <button className="loginRegisterButton">Log into Account</button>
                </div>
            </div>
        </div>
    </div>
  )
}
