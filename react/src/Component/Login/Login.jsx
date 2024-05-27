import './Login.css'
import '../../App.scss'
import Axios from 'axios'
import { useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { FaUserShield } from "react-icons/fa6";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";
import { FaExclamationTriangle } from 'react-icons/fa';
// Import our assets
// 

import video from '../LoginAsset/vi.mp4'
import logo from '../LoginAsset/student.png'


const Login = () => {

    const [loginUserName, setLoginUserName] = useState('')
    const [loginPassword, setLoginPassword] = useState('')
    const navigateTo = useNavigate()
    const [ loginStatus, setLoginStatus] = useState('')
    const [ statusHolder, setStatusHolder] = useState('message')



    const LoginUser = (e)=>{
        e.preventDefault();
        Axios.post('http://localhost:8097/login', {
            // creation de variable pour envois aux server vient de route
            LoginUserName:loginUserName,
            LoginPassword: loginPassword
        }).then((response)=>{
            console.log(response.data.message);
            if(response.data.message || loginUserName == '' || loginPassword ==''){
                navigateTo('/')// il seb retoune sur la login si la credentialite est non match
                setLoginStatus(` Le credential n'existe pas`)
            }
            else{
                navigateTo('/dashboard') // il naviger aux dashboard s'il la credetial est match
            }
        })
    }

    useEffect(()=>{
        if(loginStatus !== ''){
            setStatusHolder('showMessage')

            setTimeout(() =>{
                setStatusHolder('message')   
            }, 4000)
        }
    },[loginStatus])
    const onSubmit = ()=>{
        setLoginUserName('')
        setLoginPassword('')
    }
    return (
        <div className='loginPage flex'>
            <div className="container flex">
                <div className='videoDiv'>
                    <video src={video} autoPlay muted loop></video>

                    <div className="textDiv">
                        <h2 className="title"> Inscrirez-vous </h2>
                        <p> Gestion de note </p>
                    </div>

                    <div className="footerDiv flex">
                        <span className='text'> Vous navez pas encore un compt? </span>

                        <Link to={"/registre"}>
                            <button className='btn'> Créer un compt  </button>
                        </Link>
                    </div>
                </div>
                <div className="formDiv flex">
                    <div className="headerDiv">
                        <img src={logo} />
                        <h3>Bienvenue !</h3>
                    </div>

                    <form action="" className='form grid'>
                        
                    <span className={statusHolder} onSubmit={onSubmit}>
                        <FaExclamationTriangle />
                        {loginStatus}</span>
                        <span> Se connecter </span>
                        <div className="inputDiv">
                            <label htmlFor='username'> Nom: </label>
                            <div className="input flex">
                                <FaUserShield className='icon' />
                                <input type="text"  onChange={(event) =>{
                                    setLoginUserName(event.target.value)
                                }} name="" id="username" placeholder='entre votre nom' />
                            </div>
                        </div>
                        <div className="inputDiv">
                            <label htmlFor='password'> mot de pass: </label>
                            <div className="input flex">
                                <BsFillShieldLockFill className='icon' />
                                <input type="password" onChange={(event) =>{
                                    setLoginPassword(event.target.value)
                                }} name="" id="password" placeholder='entre votre mot de pass' />
                            </div>
                        </div>
                        <button type='submit' onClick={LoginUser} className='btn flex'>
                            <span>Connecte</span>
                            <AiOutlineSwapRight className='icon'/>
                        </button>
                        <span className='forgotpassword'>
                            Mot de pass oublier? <a href="">Click ici</a>
                        </span>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login