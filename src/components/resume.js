import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Image from './img/dpp.png';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
	render() {
		return(
			<div>
			   <Grid>
			   	 <Cell col={4}>
			   	 	<div style={{textAlign: 'center'}}>
				   	 	<img 
				   	 	  src ={Image}
				   	 	  alt="profile"
				   	 	  style={{height: '200px'}}
				   	 	 />
			   	 	 </div>
			   	 	 <h2 style={{paddingTop: '2em'}}>Shubham Dhage</h2>
			   	 	 <h4 style={{color: 'grey'}}>Web Developer</h4>
			   	 	 <hr style={{borderTop: '3px solid #833fb2', width:'50%'}} />
			   	 	 <p>I perceive my self as a confident and hardworking individual. I carry out any task assigned to me without hesitation, provided the instructions are clear. I am impatent which is the reason why i am quick learner. On the other hand, I am creative person and I love to test my boundaries. In order to do so, I keep pushing myself to think out of the box</p>
			   	 	 <hr style={{borderTop: '3px solid #833fb2', width:'50%'}} />
			   	 	 <h5 style={{color: 'grey'}}>Address</h5>
			   	 	 <p>A9 Shastri Nagar, Jabalpur (M.P.), India</p>
			   	 	 <h5 style={{color: 'grey'}}>Phone</h5>
			   	 	 <p>(831)-9777-910</p>
			   	 	 <h5 style={{color: 'grey'}}>Email</h5>
			   	 	 <p>shubhamdhage930@gmail.com</p>
			   	 	 <h5 style={{color: 'grey'}}>My Website</h5>
			   	 	 <p>https://shubhamd99.github.io/portfolio/</p>
			   	 	 <hr style={{borderTop: '3px solid #833fb2', width:'50%'}} />
			   	 </Cell>
			   	 <Cell className="resume-right-col" col={8}>
			   	 	<h2>Education</h2>

			   	 	<Education
			   	 	 startYear={2000}
			   	 	 endYear={2015}
			   	 	 schoolName="Marashi Vidya Mandir School"
			   	 	 schoolDescription="I took Maths Science Stream in my School. I got 7CGPA in my 10th class as well as 252/500 Grade in 12th Class respectively."
			   	 	/>
			   	 	<Education
			   	 	 startYear={2015}
			   	 	 endYear={2019}
			   	 	 schoolName="Gyan Ganga College of Technology"
			   	 	 schoolDescription="I'm pursuing my Last Year B.E from the Ganga College of Technology in Jabalpur in CS Stream with an aggregate 6.8 CGPA. "
			   	 	/>

			   	 	<hr style={{borderTop: '3px solid #e22947'}} />

			   	 	<h2>Experience</h2>

			   	 	<Experience
			   	 	 startYear="Jan 2019"
			   	 	 jobName="Microsoft Certification in JavaScript, HTML/CSS"
			   	 	 jobDescription="Microsoft Corporation is an American multinational technology company with headquarters in Redmond, Washington. It develops, manufactures, licenses, supports and sells computer software, consumer electronics, personal computers, and related services."
			   	 	/>

			   	 	<Experience
			   	 	 startYear="Feb 2019"
			   	 	 jobName="Udemy Certification in Full Stack Development"
			   	 	 jobDescription="Udemy.com is an online learning platform. It is aimed at professional adults. Unlike academic massive open online course programs which are driven by traditional collegiate coursework, Udemy uses content from online content creators to sell for profit. "
			   	 	/>

			   	 	<hr style={{borderTop: '3px solid #e22947'}} />

			   	 	<h2>Skills</h2>

			   	 	<Skills 
			   	 	 skills="HTML/CSS"
			   	 	 progress={90}
			   	 	/>
			   	 	<Skills 
			   	 	 skills="JavaScript"
			   	 	 progress={70}
			   	 	/>
			   	 	<Skills 
			   	 	 skills="React JS"
			   	 	 progress={40}
			   	 	/>
			   	 	<Skills 
			   	 	 skills="Node Js/Express Js"
			   	 	 progress={30}
			   	 	/>
			   	 	<Skills 
			   	 	 skills="Postgres SQL"
			   	 	 progress={60}
			   	 	/>

			   	 </Cell>
			   </Grid>
			</div>
		)
	}
}

export default Resume;