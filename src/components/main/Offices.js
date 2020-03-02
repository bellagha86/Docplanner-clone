import React from 'react'

function Offices({officesItems}) {
    return (
        <div>
            <div className="officespresentations">
                <h1> Improve the lives of millions. <br/>Change yours forever </h1>
                <p>More than 1000 team mates share our same vision, goals and passion.<br/> With offices in Warsaw,
                    Barcelona, Istanbul, Rome, Mexico City and<br/> Curitiba, our search for great talent never stops. </p>
            
        </div>
        <div className="officeslider">
            {officesItems.map((el,i)=><div className="officebutton" key={i}><img className="cityimage" src={el.source}/><div className="officebuttondescription"><p>{el.cityName}</p><input className="cityofficebutton"type="button" value="See openings"/></div></div>)}

        </div>

        </div>
    )
}
export default Offices 
