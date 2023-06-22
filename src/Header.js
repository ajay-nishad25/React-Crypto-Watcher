import "./Header.css";
import React from "react";

const Header = () => {

    return (
        <div className="card-header">
            <div className="card-holder-header">
                <div className="details-div-header">
                    <table className="table-header">
                        <thead>
                            <tr>
                                <th>Coin</th>
                                <th>Current price</th>
                                <th>Change in 24h</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Header;