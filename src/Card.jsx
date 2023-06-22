import "./Card.css";
import bitcoin from "./bitcoin.png"

const Card = (props) =>{
    return(
        <div className="card">
            <div className="card-holder">
                <div className="image-div">
                    <img src={bitcoin} alt="" />
                </div>
                <div className="details-div">
                    <ul>
                        <li>Name</li>
                        <li>Price</li>
                        <li>Change</li>
                    </ul>
                </div>
                
            </div>
        </div>
    )

}

export default Card;