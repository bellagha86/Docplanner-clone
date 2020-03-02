import React from 'react'

 function Footer({footerItems}) {
    return (
        
        <div className="footnotes">
            
    <p> We are leaders in 10 countries: {footerItems.map((el,i)=>i===footerItems.length-1?<str><str> and </str><a href="#">{el}</a></str>:<str><a href="#">{el}</a><str>, </str></str> )}</p>
    <p>This site uses cookies to deliver services in accordance with this Privacy Policy. You can specify the conditions for storing or accessing cookies on your browser. www.docplanner.com © 2020</p>       
        </div>
    )
}
export default Footer
