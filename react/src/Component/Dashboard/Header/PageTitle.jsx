import { useState, useEffect } from "react"
import "./pageTitle.css"
function PageTitle() {
    const [cards, setCards] = useState([])

    const fetchData = () =>{
        fetch('http://localhost:400/cards')
        .then(res => res.json())
        .then(data =>{
            setCards(data);
        })
        .catch(e => console.log(e.message));
    };

    useEffect(() =>{

    })

  return (
    <div className="pagetitle">
        <h1>Dashboard</h1>
        <nav>
            <ol className="breadcrumb"> 
                <li className="breadcrumb-item">
                    <a href="/">
                        <i className="bi bi-house-door"></i>
                    </a>
                </li>
                <li className="breadcrumb-item active">Dashboard</li>
            </ol>
        </nav>
    </div>
  )
}

export default PageTitle