import React from "react";

class Section extends React.Component  {
        
  render () {

    return (
        <section>            
            <h1>Please leave a feedback</h1> 
            {this.props.children}
        </section>
    )
  }
   
}

export default Section;