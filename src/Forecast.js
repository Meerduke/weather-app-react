import React from "react";

export default function Forecast(){
return(
<div className="row Forecast">
                <div className="col-md-auto">
                    Monday
                    <br />
                    <i className="far fa-snowflake"></i>
                    <br />
                    <span>
                        4°C | -2°C
                    </span>
                </div>
                <div className="col-md-auto">
                    Tuesday
                    <br />
                    <i className="far fa-snowflake"></i>
                    <br />
                    <span>
                        4°C | -2°C
                    </span>
                </div>
                <div className="col-md-auto">
                    Wednesday
                    <br />
                    <i className="fas fa-cloud-sun"></i>
                    <br />
                    <span>
                        4°C | -2°C
                    </span>
                </div>
                <div className="col-md-auto">
                    Thursday
                    <br />
                    <i className="fas fa-cloud"></i>
                    <br />
                    <span>
                        4°C | -2°C
                    </span>
                </div>
                <div className="col-md-auto">
                    Friday
                    <br />
                    <i className="fas fa-cloud-rain"></i>
                    <br />
                    <span>
                        4°C | -2°C
                    </span>
                </div>
            </div>
);
}