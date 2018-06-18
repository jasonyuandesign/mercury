import React, { Component } from 'react';
import './Home.css';

class Home extends Component {


 render() {
     return (
         <div className="Home">
            <p className="Home-intro dontTouch">
            Jason Yuan is a product designer currently playing with UX at Apple. <span> He eagerly anticipates graduating from RISD in Spring 2019. Bye haters! </span> <span> He used to act in the theatre, where he learned to observe, collaborate, and empathize. </span><span> Some say his personality is too strong. Imagine being that boring.</span> <span>He loves speaking, writing, and teaching. </span> <span>His greatest strength is his resilience. His greatest weakness is his impulsivity. (He's working on it, he swears.) </span><span>Confused? Curious? Please ping him here, here, or here. </span> <span> He will try to get back to you as soon as this Boba Guys line starts moving. Anytime now. </span><span>In the meantime, feel free to check out some of his work!</span>
            </p>
         </div>
     )
 }
}

export default Home;