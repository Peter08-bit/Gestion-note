import './Registre.css'
import '../../App.scss'
import { Link, useNavigate } from 'react-router-dom'
import { FaUserShield } from "react-icons/fa6";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";
import { MdMarkEmailRead } from "react-icons/md";
import { useState } from 'react';
import Axios from 'axios';
// Import our assets
// 

 import video from '../LoginAsset/vi.mp4'
import logo from '../LoginAsset/student.png'


const Registre = () => {
    const [email, setEmail] = useState('')
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    
    const navigateTo = useNavigate()
    const createUser = (e)=>{
        e.preventDefault();
        Axios.post('http://localhost:8097/registre', {
            // creation de variable pour envois aux server vient de route
            Email: email,
            UserName:userName,
            Password: password
        }).then(()=>{
            console.log("L'utilisateur a été bien créer");
            navigateTo('/')
            setEmail('')
            setUserName('')
            setPassword('')

        })
        
    }

    return (
        <div className='registrePage flex'>
            {/* <a href="/registre"> Registre </a> <br />
        <a href="/dashboad"> dashboard </a>
        Page login */}
            <div className="container flex">
                <div className='videoDiv'>
                    <video src={video} autoPlay muted loop></video>

                    <div className="textDiv">
                        <h2 className="title"> Inscrirez-vous </h2>
                        <p> Gestion de note </p>
                    </div>

                    <div className="footerDiv flex">
                        <span className='text'> Si vous avez un compte </span>

                        <Link to={"/"}>
                            <button className='btn'> connectez-vous </button>
                        </Link>
                    </div>
                </div>
                <div className="formDiv flex">
                    <div className="headerDiv">
                        <img src={logo} />
                        <h3>Bienvenue !</h3>
                    </div>

                    <form action="" className='form grid'>
                        <span> Inscrirez </span>
                        <div className="inputDiv">
                            <label htmlFor='username'> Nom: </label>
                            <div className="input flex">
                                <MdMarkEmailRead className='icon' />
                                <input type="email" onChange={(event) =>{
                                    setEmail(event.target.value)
                                }} name="" id="email" placeholder='entre votre email' />
                            </div>
                        </div>
                        <div className="inputDiv">
                            <label htmlFor='username'> Nom: </label>
                            <div className="input flex">
                                <FaUserShield className='icon' />
                                <input type="text" onChange={(event) =>{
                                    setUserName(event.target.value)
                                }} name="" id="username" placeholder='entre votre nom' />
                            </div>
                        </div>
                        <div className="inputDiv">
                            <label htmlFor='password'> mot de pass: </label>
                            <div className="input flex">
                                <BsFillShieldLockFill className='icon' />
                                <input type="password" onChange={(event) =>{
                                    setPassword(event.target.value)
                                }} name="" id="password" placeholder='entre votre mot de pass' />
                            </div>
                        </div>
                        <button type='submit' className='btn flex' onClick={createUser}>
                            <span>Enregistre</span>
                            <AiOutlineSwapRight className='icon'/>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Registre