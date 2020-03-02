import React from 'react'

 function Navbar({navItems}) {
    return (
    <div className='navbar'>
      
           
                    <a href="#"> <img class=" navlogo"
                        src="https://www.docplanner.com/img/logo-default-group-en.svg" /></a>
<ul className='navitems'>{
    navItems.map((el,i)=>(
        
        <li key={i} className={el.hover}>
            <a className={el.name} href={el.link}> {el.text}</a>
            {el.subMenu && (
                <ul className='dropdown'>
                    {el.subMenu.map((el,i)=>(
                        <li key={i}>{el}</li>
                    ))}
                </ul>
            )}

        </li>
        
    ))
    }</ul>






      </div>
      )
    }
      
      
      
export default Navbar
