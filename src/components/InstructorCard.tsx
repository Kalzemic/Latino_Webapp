
import './InstructorsPage.css'

interface InstructorProps {
    name: string;
    description: string;
    img: string;
}


function InstructorCard({ name, description, img }: InstructorProps) {
    return (
        <div className='instructor-card'>
            <img src={img} className="instructor-image" alt={name} />
            <div className="instructor-card-body">
                <h1>{name}</h1>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default InstructorCard;