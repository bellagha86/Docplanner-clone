import React from 'react'
 function Statspresentation({statsItems}) {
    return (
        <div className="stats">
            <div className="firstpart">
            <div className="statspresentation">
                 <h1>The world's<br/>
                    biggest healthcare platform </h1>
                <p>We work from 6 offices all over the world, bringing Docplanner<br/> Group to life in almost 20
                    countries.
                </p></div>
                <div className="backgroundlogo">
                <img src="https://www.docplanner.com/img/logo.png"/>
                 </div></div>
            <div className="cardstats">
                {statsItems.map((el,i)=>(<div className={el.class} key={i}><img src={el.source} className="illustration"/><h3>{el.title}</h3><p>{el.stats}</p></div>))}
            </div>
        </div>
    )
}

export default Statspresentation
