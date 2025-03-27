import './Page.css'
import './InstructorsPage.css'
import './InstructorCard'
import InstructorCard from './InstructorCard';
import { useEffect, useState } from 'react';
import cardsDataJson from '../data/InstructorData.json'


interface CardData {
    name: string;
    description: string; /* Make sure this matches your JSON key */
    img: string;
}



function InstructorsPage() {

    const [cardsData, setCardsData] = useState<CardData[]>([]);

    useEffect(() => {
        setCardsData(cardsDataJson); // Load JSON data into state
    }, [])
    return (
        <div className="page-content">
            <div className="cards-grid">
                {cardsData.map((card, index) => (
                    <InstructorCard key={index} name={card.name} description={card.description} img={card.img} />
                ))}
            </div>
        </div>

    );
}


export default InstructorsPage;