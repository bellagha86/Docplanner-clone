import React from 'react'

 function Pres({presItems}) {
    return (
    //     <div className="margin">
    //     <div className="servicespresentations">
    // {presItems.map((el)=>
    
    
    // <div className="clientspresentation">
    //     <div className={el.class}>
    //         <p>{el.paragraph}</p>
    //         <h2>{el.h2}</h2>
    //         {el.button==='y'?<div className="bottomelements">

    //             <select className={el.classSelect} data-id="domain-switcher">
    //     {el.select.map(el=>
    //     <option>{el}</option>
    //     )}

    // </select>
    // <img className={el.classimg} src={el.src}/>
    // </div>:
    // <img className={el.classimg} src={el.src}/>}
    // </div>
    // </div>)} 
    //     </div>
    //     </div>



    <div className="servicespresentations">
        
            {presItems.map(el=><div className="clientspresentation">
            <div className={el.class}>
                <p className="clientspresentationp">{el.paragraph}</p>
        <h2>{el.title}</h2>

        
            {!el.select ? null :
            
            <select className={el.classSelect}>{
            el.select.map(el=>
                <option>{el}</option>)}
        </select>}
        <img className={el.classImg}src={el.source} />



            </div>
    </div>)}
    
    
</div>)}
export default Pres