import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import Image from './img/dpp.png';

class Contact extends Component {
	render() {
		return(
			<div className="contact-body">
				<Grid className="contact-grid">
				   <Cell col={6}>
				   		<h2>Shubham Dhage</h2>
				   		<img 
					  	src={Image}
					  	alt="avatar"
					  	style={{height: '250px'}}
					  	className="avatar-img"
					  	 />
					  	 <p style={{ width: '75%', margin: 'auto', paddingTop: '1.5em' }}>
					  	   Currently, I am about to finish my final semester at Gyan Ganga College of Technology. In the course of these few years during graduation, we have been taught a lot of things. Since I am a fresher, I am still learning. But I can vouch for the fact that I am a fast learner. I am always open to learn.
					  	 </p>
				   </Cell>
				   <Cell col={6}>
				   	   <h2>Contact Me</h2>
				   	   <hr />
				   	   <div className="contact-list">
					   	   <List>
							  <ListItem>
							    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
							    <i className="fa fa-phone-square" aria-hidden="true"/>
							    (91) 831-9777-910
							    </ListItemContent>
							  </ListItem>

							  <ListItem>
							    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
							    <i className="fa fa-envelope-square" aria-hidden="true"/>
							    shubhamdhage930@gmail.com
							    </ListItemContent>
							  </ListItem>

							  <ListItem>
							    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
							    <i className="fa fa-twitter-square" aria-hidden="true"/>
							    @shubham__dhage
							    </ListItemContent>
							  </ListItem>

							  <ListItem>
							    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
							    <i className="fa fa-linkedin-square" aria-hidden="true"/>
							    @shubham_dhage
							    </ListItemContent>
							  </ListItem>
							</List>
				   	   </div>
				   	    
				   </Cell>
				</Grid>
			</div>
		)
	}
}

export default Contact;