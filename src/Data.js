import React from 'react' 
class Data extends React.Component{
    render(){
        return(
           <div> <h1>welcome</h1>
           <p>When I started out with React, I wrote a very messy table component that had a class component that did most of the work.
                Everything else such as sort, pagination and filters was pluggable by importing the appropriate util function 
                and binding it to the class. After that initialization was required which would call a function inside the
                 imported util function that set up some defaults in the component's state. It was hard to reason about and 
                 anyone else looking at the code would have be flabbergasted. With hooks though this can be written very cleanly.
                 This is what I'll be attempting to do in this, albeit a much much much more simplistic version.</p>
           </div>
        )
    }

    
} 
export default Data;