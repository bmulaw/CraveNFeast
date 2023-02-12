import React, {useState, useRef, useEffect} from "react";
import './Register.css'
import {AiOutlineStop, AiOutlineCheckSquare, AiFillInfoCircle} from 'react-icons/ai';
import { useNavigate } from "react-router-dom";
import axios from 'axios';



//reg expressions to validate username and password
const USER_REGEX = /^[A-z][A-z0-9-_']{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = 'http://localhost:5000/register';

const Register = (props) => {
const userRef = useRef();
const errRef = useRef();

const [user, setUser] = useState('');
const [validName, setValidName] = useState(false);
const [userFocus, setUserFocus] = useState(false);

const [pwd, setPwd] = useState('');
const [validPwd, setValidPwd] = useState(false);
const [pwdFocus, setPwdFocus] = useState(false);

const [matchPwd, setMatchPwd] = useState('');
const [validMatch, setValidMatch] = useState(false);
const [matchFocus, setMatchFocus] = useState(false);

const [errMsg, setErrMsg] = useState('');
const [success, setSuccess] = useState(false);

const navigate = useNavigate();


//Set focus when component loads
useEffect(() => {
userRef.current.focus();
}, [])
//Validate username
useEffect(() => {
const result = USER_REGEX.test(user);
console.log(result);
console.log(user);
setValidName(result);
// setValidName(USER_REGEX.test(user));
}, [user])
//Validate PWD and match
useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
}, [pwd, matchPwd])

  //Clear out error message when username or pwd is changed
useEffect(() => {
    setErrMsg('');
}, [user, pwd, matchPwd])


const handleSubmit = async (e) => {
e.preventDefault();
// if button enabled with JS hack
const v1 = USER_REGEX.test(user);
const v2 = PWD_REGEX.test(pwd);
if (!v1 || !v2) {
    setErrMsg("Invalid Entry");
    return;
}
try {
    const response = await axios.post(REGISTER_URL,
        JSON.stringify({ user, pwd }),
        {
            headers: { 'Content-Type': 'application/json' }
        }
    );
    console.log(response?.message);
    console.log(JSON.stringify(response))
    setSuccess(true);
    //clear state and controlled inputs
    //need value attribrutes on inputs for this
    props.setUsername(user)
    window.localStorage.setItem("user",user)
    setUser('');
    setPwd('');
    setMatchPwd('');
} catch (err) {
    if (!err?.response) {
        setErrMsg('Registration Failed');
    }
    errRef.current.focus();
}
}

return (
<section>
{success ? (
    navigate("/home")
) : (
<section className='auth-form-container-register'>
    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
    <h1 className="register-header">Register</h1>
    <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="username" >Username: 
            <AiOutlineCheckSquare className={validName ? "valid" : "hide"} />
            <AiOutlineStop className={validName || !user ? "hide" : "invalid"} />
        </label>
        <input
                            type="text"
                            id="username"
                            placeholder="Username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                            aria-invalid={validName ? "false" : "true"}
                            aria-describedby="uidnote"
                            onFocus={() => setUserFocus(true)}
                            onBlur={() => setUserFocus(false)}
                        />
                        {!validName &&<p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
                            <AiFillInfoCircle />
                            4 to 24 characters.<br />
                            Must begin with a letter.<br />
                            Letters, numbers, underscores, apostrophe, and hyphens allowed.
                        </p>}

                        <label htmlFor="password">
                            Password:
                            <AiOutlineCheckSquare className={validPwd ? "valid" : "hide"} />
                            <AiOutlineStop className={validPwd || !pwd ? "hide" : "invalid"} />
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                            aria-invalid={validPwd ? "false" : "true"}
                            aria-describedby="pwdnote"
                            onFocus={() => setPwdFocus(true)}
                            onBlur={() => setPwdFocus(false)}
                        />
                       {!validPwd &&<p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                            <AiFillInfoCircle/>
                            8 to 24 characters.<br />
                            Please use uppercase and lowercase letters, a number and a special character.<br />
                            Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                        </p>}

                        <label htmlFor="confirm_pwd">
                            Confirm Password:
                            <AiOutlineCheckSquare className={validMatch && matchPwd ? "valid" : "hide"} />
                            <AiOutlineStop className={validMatch || !matchPwd ? "hide" : "invalid"} />
                        </label>
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            id="confirm_pwd"
                            onChange={(e) => setMatchPwd(e.target.value)}
                            value={matchPwd}
                            required
                            aria-invalid={validMatch ? "false" : "true"}
                            aria-describedby="confirmnote"
                            onFocus={() => setMatchFocus(true)}
                            onBlur={() => setMatchFocus(false)}
                        />
                       {!validMatch &&<p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                        <AiFillInfoCircle/>
                            Must match the first password input field.
                        </p>}
                    <button onClick={(e)=>handleSubmit(e) }>Register</button>

        </form>
        <section className='button-class'>
        <button className="link-btn-register" onClick={()=>navigate("/login")}>Already have an account? Login here.</button>
        </section>
        </section>
  )}
  </section>
)
}

export default Register;