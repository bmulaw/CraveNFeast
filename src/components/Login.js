import React, {useState, useRef, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import './Login.css'
import axios from 'axios';

const LOGIN_URL = 'http://localhost:5000/auth';

const Login = (prop) => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.get(LOGIN_URL,{
                params:{
                    user:user,
                    pwd:pwd
                }
            },
                JSON.stringify({ user, pwd }),
                {
                    headers: { 'Content-Type': 'application/json' }
                }
            );
            console.log(JSON.stringify(response));
            prop.setUsername(user)
            window.localStorage.setItem("user",user)
            setUser('');
            setPwd('');
            setSuccess(true);
        } catch (err) {
            if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }
    const navigate = useNavigate();

    return (
        <main>
    {success ? (
    navigate("/home")
    ) :  (
        <section className="auth-form-container-login">
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <h1 className="login-header">Login</h1>
            <form className="login-form"onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    placeholder="Username"
                    id="username"
                    ref={userRef}
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                    required
                />
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    placeholder="Password"
                    id="password"
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    required
                />
                <button onClick={(e)=>handleSubmit(e)}>Sign In</button>
            </form>
            <button className="link-btn-login" onClick={()=>navigate("/register")}>Don't have an account? Register here.</button>
        </section>
        )}
    </main>
)
}

export default Login
