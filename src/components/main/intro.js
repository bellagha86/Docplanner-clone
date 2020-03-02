import React from 'react'

 function Intro({introItems}) {
    return (
        
        <div className="leadsection">  
            <div className="smalllogo">
                <img src='https://www.docplanner.com/img/sygnet.png'/></div>
                {introItems.map(el=> el.type==="paragraph" ? "" : <h2 className={el.class}>{el.content}</h2> )}
            <div className="offerdescription">
    {introItems.map(el=> el.type==="paragraph" ? <p className={el.class}>{el.content}</p>   : "")}
            {/* {introItems.type==='paragraph'?(introItems.map((el,i)=><p key={i} className={el.class}>{el.content}</p>)):(introItems.map((el,i)=><h2 key={i} className={el.class}>{el.content}</h2>))} */}
            </div>
            
        </div>
        
    )
}
export default Intro