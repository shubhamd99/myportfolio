import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Image from './img/dpp.png';

class Landing extends Component {
	render() {
		return(
			<div style={{ width: '100%', margin: 'auto' }}>
				<Grid className="landing-grid">
				  <Cell col={12}>
				  	<img 
				  	src={Image}
				  	alt="avatar"
				  	className="avatar-img"
				  	 />

				  	 <div className="banner-text">
				  	 	<h1>Full Stack Web Developer</h1>

				  	 	<hr />

				  	 	<p>HTML/CSS | JavaScript | Bootstratp | React Js | Node Js | Express | Postgres</p>

				  	 	<hr />

				  	 	<p className="banner-p">I perceive my self as a confident and hardworking individual. I carry out any task assigned to me without hesitation, provided the instructions are clear. I am impatent which is the reason why i am quick learner. On the other hand, I am creative person and I love to test my boundaries. In order to do so, I keep pushing myself to think out of the box</p>

				  	 	<div className="social-links">
				  	 	   <a href="https://www.linkedin.com/in/shubham-dhage-57133a175/" rel="noopener noreferrer"  targte="_blank">
				  	 	     <i className="fa fa-linkedin-square" aria-hidden="true" />
				  	 	   </a>
				  	 	   <a href="https://github.com/shubhamd99" rel="noopener noreferrer"  targte="_blank">
				  	 	     <i className="fa fa-github-square" aria-hidden="true" />
				  	 	   </a>
				  	 	   <a href="https://twitter.com/shubham__dhage" rel="noopener noreferrer"  targte="_blank">
				  	 	     <i className="fa fa-twitter-square" aria-hidden="true" />
				  	 	   </a>
				  	 	    <a href="https://www.facebook.com/shubhamdhagejbp" rel="noopener noreferrer"  targte="_blank">
				  	 	     <i className="fa fa-facebook-square" aria-hidden="true" />
				  	 	   </a>
				  	 	   
				  	 	</div>
				  
				  	 </div>
				  </Cell>
				</Grid>
			</div>
		)
	}
}

export default Landing;