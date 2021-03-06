import React, { Component } from 'react';
import './Home.css';
import {Motion, spring} from 'react-motion';


  
class Navbar extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            showing: window.pageYOffset < 100
        }
        this.handleScroll = this.handleScroll.bind(this)
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }

    handleScroll(event) {
        console.log(window.pageYOffset)
        var scrollTop = window.pageYOffset
        // let notification = document.getElementById('notification')
        if(scrollTop < 100) {
            this.setState({ showing: false });
            // notification.classList.add('show-me')
            // console.log('is more than zero')
        } else {
            this.setState({ showing: true });
        }
        console.log(this.state.showing)
    }

    render () {
        console.log('hello')
        const config = { stiffness: 220, damping: 15};
        // const toCSS = (translateY) => ({ transform: `translateY:${translateY}px`});

        return (
        <Motion
        defaultStyle={{ translateY: -100 }}
        style={{
            translateY: spring(this.state.showing ? 0 : -100, config) }} >
        {
            (value) => <div className="Home-nav" style={{ transform: `translateY(${value.translateY}px)`}}> 
            <p className="Card-text dontTouch">
            Back to top
            </p>
            </div>
        }
        </Motion> 
        )
    }

}


class Home extends Component {

 render() {
     return (
         <div className="Home">
          <Navbar />

          <div className="Overlay"> 
          </div>
            <p className="Home-intro dontTouch">
            Jason Yuan is a product designer currently playing with UX at Apple. 
            <hr />
            He eagerly anticipates graduating from RISD in Spring 2019. Bye haters! 
            <hr />
            He used to act in the theatre, where he learned to observe, collaborate, and empathize.
            <hr />
            He loves speaking, writing, and teaching. 
            <hr />
            Some say his personality is too strong. But he'd rather not be boring.
            <hr />
            His greatest strength is his resilience. His greatest weakness is his impulsivity. (He's working on it, he swears.) 
            <hr /> 
            Confused? Curious? Please ping him here here, or here.
            <hr /> 
            He will try to get back to you as soon as this Boba Guys line starts moving.
            <hr /> 
            In the meantime, feel free to check out his résumé.
            </p>
         </div>
     )
 }
}

export default Home;