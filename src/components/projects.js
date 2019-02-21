import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
	constructor(props){
		super(props);
		this.state = { activeTab: 0 };
	}

toggleCategories() {
	if (this.state.activeTab === 0) {
		return(
	    <div className="projects-grid">
			<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
				<CardTitle style={{color: '#fff', height:'176px', background: 'url(https://udemy-images.udemy.com/course/750x422/1049092_8c52_2.jpg) center / cover'}}>React Project #1</CardTitle>
				<CardTitle>
					Smart-brain project
				</CardTitle>
				<CardActions border>
					<a href="https://github.com/shubhamd99/smart-brain" rel="noopener noreferrer" target="_blank"><Button colored>Github</Button></a>
					<a href="https://smart-brain-shubham.herokuapp.com/" rel="noopener noreferrer" target="_blank"><Button colored>Live Demo</Button></a>
				</CardActions>
				<CardMenu style={{ color: 'black' }}>
				    <IconButton name="share" />
				</CardMenu>
			</Card>

			<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
				<CardTitle style={{color: '#fff', height:'176px', background: 'url(https://udemy-images.udemy.com/course/750x422/1049092_8c52_2.jpg) center / cover'}}>React Project #2</CardTitle>
				<CardTitle>
					Robo Freinds Project
				</CardTitle>
				<CardActions border>
					<a href="https://github.com/shubhamd99/robofriends" rel="noopener noreferrer" target="_blank"><Button colored>Github</Button></a>
					<a href="https://shubhamd99.github.io/robofriends/" rel="noopener noreferrer" target="_blank"><Button colored>Live Demo</Button></a>
				</CardActions>
				<CardMenu style={{ color: 'black' }}>
				    <IconButton name="share" />
				</CardMenu>
			</Card>

			<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
				<CardTitle style={{color: '#fff', height:'176px', background: 'url(https://udemy-images.udemy.com/course/750x422/1049092_8c52_2.jpg) center / cover'}}>React Project #3</CardTitle>
				<CardTitle>
					Weather App project
				</CardTitle>
				<CardActions border>
					<a href="https://github.com/shubhamd99/weatherapp" rel="noopener noreferrer" target="_blank"><Button colored>Github</Button></a>
					<a href="https://shubhamd99.github.io/weatherapp/" rel="noopener noreferrer" target="_blank"><Button colored>Live Demo</Button></a>
				</CardActions>
				<CardMenu style={{ color: 'black' }}>
				    <IconButton name="share" />
				</CardMenu>
			</Card>

		</div>

		)
	} else if (this.state.activeTab === 1){
		return (
			<div className="projects-grid">
			<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
				<CardTitle style={{color: '#fff', height:'176px', background: 'url(https://udemy-images.udemy.com/course/750x422/405926_02c8_2.jpg) center / cover'}}>HTML/CSS #1</CardTitle>
				<CardTitle>
					HTML
				</CardTitle>
				<CardActions border>
					<a href="https://github.com/shubhamd99/shubhamd99.github.io" rel="noopener noreferrer" target="_blank"><Button colored>Github</Button></a>
					<a href="https://shubhamd99.github.io/" rel="noopener noreferrer" target="_blank"><Button colored>Live Demo</Button></a>
				</CardActions>
				<CardMenu style={{ color: 'black' }}>
				    <IconButton name="share" />
				</CardMenu>
			</Card>

			<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
				<CardTitle style={{color: '#fff', height:'176px', background: 'url(https://udemy-images.udemy.com/course/750x422/405926_02c8_2.jpg) center / cover'}}>HTML/CSS #2</CardTitle>
				<CardTitle>
					CSS
				</CardTitle>
				<CardActions border>
					<a href="https://github.com/shubhamd99/shubhamd99.github.io" rel="noopener noreferrer" target="_blank"><Button colored>Github</Button></a>
					<a href="https://shubhamd99.github.io/" rel="noopener noreferrer" target="_blank"><Button colored>Live Demo</Button></a>
				</CardActions>
				<CardMenu style={{ color: 'black' }}>
				    <IconButton name="share" />
				</CardMenu>
			</Card>

			<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
				<CardTitle style={{color: '#fff', height:'176px', background: 'url(https://udemy-images.udemy.com/course/750x422/405926_02c8_2.jpg) center / cover'}}>HTML/CSS #3</CardTitle>
				<CardTitle>
					CSS
				</CardTitle>
				<CardActions border>
					<a href="https://github.com/shubhamd99/shubhamd99.github.io" rel="noopener noreferrer" target="_blank"><Button colored>Github</Button></a>
					<a href="https://shubhamd99.github.io/" rel="noopener noreferrer" target="_blank"><Button colored>Live Demo</Button></a>
				</CardActions>
				<CardMenu style={{ color: 'black' }}>
				    <IconButton name="share" />
				</CardMenu>
			</Card>

		</div>
		)
	} else if (this.state.activeTab === 2){
		return (
			<div className="projects-grid">
			<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
				<CardTitle style={{color: '#fff', height:'176px', background: 'url(https://udemy-images.udemy.com/course/750x422/1342418_b2f3_16.jpg) center / cover'}}>JavaScript #1</CardTitle>
				<CardTitle>
					Element Selector
				</CardTitle>
				<CardActions border>
					<a href="https://github.com/shubhamd99/shubhamd99.github.io/tree/master/selectElement" rel="noopener noreferrer" target="_blank"><Button colored>Github</Button></a>
					<a href="https://shubhamd99.github.io/selectElement/" rel="noopener noreferrer" target="_blank"><Button colored>Live Demo</Button></a>
				</CardActions>
				<CardMenu style={{ color: 'black' }}>
				    <IconButton name="share" />
				</CardMenu>
			</Card>

			<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
				<CardTitle style={{color: '#fff', height:'176px', background: 'url(https://udemy-images.udemy.com/course/750x422/1342418_b2f3_16.jpg) center / cover'}}>JavaScript #2</CardTitle>
				<CardTitle>
					BG Generator
				</CardTitle>
				<CardActions border>
					<a href="https://github.com/shubhamd99/shubhamd99.github.io/tree/master/bgGenerator" rel="noopener noreferrer" target="_blank"><Button colored>Github</Button></a>
					<a href="https://shubhamd99.github.io/bgGenerator/" rel="noopener noreferrer" target="_blank"><Button colored>Live Demo</Button></a>
				</CardActions>
				<CardMenu style={{ color: 'black' }}>
				    <IconButton name="share" />
				</CardMenu>
			</Card>

			<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
				<CardTitle style={{color: '#fff', height:'176px', background: 'url(https://udemy-images.udemy.com/course/750x422/1342418_b2f3_16.jpg) center / cover'}}>JavaScript #3</CardTitle>
				<CardTitle>
					Countdown Date
				</CardTitle>
				<CardActions border>
					<a href="https://github.com/shubhamd99/Countdown" rel="noopener noreferrer" target="_blank"><Button colored>Github</Button></a>
					<a href="https://shubhamd99.github.io/Countdown/" rel="noopener noreferrer" target="_blank"><Button colored>Live Demo</Button></a>
				</CardActions>
				<CardMenu style={{ color: 'black' }}>
				    <IconButton name="share" />
				</CardMenu>
			</Card>

		</div>
		)
	} else if (this.state.activeTab === 3){
		return (
			<div className="projects-grid">
			<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
				<CardTitle style={{color: '#fff', height:'176px', background: 'url(https://udemy-images.udemy.com/course/750x422/1512772_649f_13.jpg) center / cover'}}>JSQL #1</CardTitle>
				<CardTitle>
					Smart Brain Backend API
				</CardTitle>
				<CardActions border>
					<a href="https://github.com/shubhamd99/smart-brain-api" rel="noopener noreferrer" target="_blank"><Button colored>Github</Button></a>
					<a href="https://smart-brain-shubham.herokuapp.com/" rel="noopener noreferrer" target="_blank"><Button colored>Live Demo</Button></a>
				</CardActions>
				<CardMenu style={{ color: 'black' }}>
				    <IconButton name="share" />
				</CardMenu>
			</Card>
			</div>
		)
	}
}
	

	render() {
		return(
			<div className="catergory-tabs">
				<Tabs activeTab={ this.state.activeTab } onChange={ (tabId) => this.setState({ activeTab: tabId }) } ripple >
					<Tab>React</Tab>
					<Tab>HTML/CSS</Tab>
					<Tab>JavaScript</Tab>
					<Tab>SQL</Tab>
				</Tabs>	
				
					<Grid >
						<Cell col={12}>
						   <div className="content">{this.toggleCategories()}</div>
						</Cell>
					</Grid>
					
					
			</div>
		)
	}
}

export default Projects;