import React from "react";

function MinorPrintables () {
             

    
      return(        
        
      <React.Fragment>
         <div className="TopMarginToDealWithNavBarAll">

         <br/>

            <div className="myContentsAreGrid1">
                                
                <div style={{marginBottom:"5vh"}}>
                    <a className="buttonPrintable" href="authorvsillustrator.pdf" target="_new">Author vs Illustrator!</a>
                </div>
                
                <div style={{marginBottom:"5vh"}}>
                    <a className="buttonPrintable"  href="patterns.pdf" target="_new">Patterns!</a>
                </div>                
                
                <div style={{marginBottom:"5vh"}}>
                    <a className="buttonPrintable" style={{textDecoration:"none"}} href="rhymes.pdf" target="_new">Rhyming Cards!</a>
                </div>  

                <div style={{marginBottom:"5vh"}}>
                <a className="buttonPrintable" style={{textDecoration:"none"}} href="startandendsounds.pdf" target="_new">Being/End Sounds!</a>
                </div> 

            </div>        
        </div>
      </React.Fragment>)
  };  
  
  export default MinorPrintables;