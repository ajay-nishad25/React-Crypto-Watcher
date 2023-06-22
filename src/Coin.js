import './Coin.css';

const Coin = (props) => {
    return (
        <div className="card">
            <div className="card-holder">
                <div className="details-div">
                    <table>
                        <thead>
                            <tr>
                                <th><img src={props.image} alt="img-of-coin"/></th>
                                <th>{props.name} </th>
                                <th>Rs. {props.currentPrice}</th>
                                {props.changeIn>0 ? <th style={{color:"#00eb00"}}>+{props.changeIn}%</th>:<th style={{color:"red"}}>{props.changeIn}%</th>}
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </div>
    )

}

export default Coin;