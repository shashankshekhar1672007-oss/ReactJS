import './Card.css';

const Card = ({ name, rollNo, course, institute = "NIT Patna" }) => {
  return (
    <div className="id-card">
      <div className="id-card-header">
        <h2>{institute}</h2>
      </div>
      <div className="id-card-body">
        <h3>{name}</h3>
        <p><strong>Roll No:</strong> {rollNo}</p>
        <p><strong>Course:</strong> {course}</p>
      </div>
    </div>
  );
};

export default Card;
