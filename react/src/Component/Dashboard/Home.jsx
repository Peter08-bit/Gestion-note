import {useState, useEffect} from 'react'
import Card from './Card';
import './home.css'
import Record from './Header/Record';
// import Table from './Table/Table';
// import Table from './Table/Table'
// import Enseignant from './Table/Enseignant/Enseignant';


function Home() {
    
const[cards, setCards] = useState([])
const fetchData =() => {
    fetch('http://localhost:400/cards')
    .then(res => res.json())
    .then(data => {
        setCards(data);
    })
    .catch(e => console.log(e.message));
} 
useEffect(() => {
    fetchData();
},[]);


  return (
    <section className="home section">
        <div className="row">
            <div className="col-lg-8">
                <div className="row">
                    {
                        cards && cards.length>0 && cards.map(card=> <Card key={card._id} card={card} />)
                    }
                </div>
            </div>
            <div className="col-12">
                    <Record/>
            </div>
            <div className="col-lg-4"></div>
        </div>
    </section>
  )
}

export default Home