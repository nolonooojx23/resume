import React from 'react'
import { Link } from 'react-router-dom'


function Home() {
	return (
		<div className='home'>
			<div className="home_logo animate__animated animate__fadeInLeft">
			<img src="https://sm.ign.com/ign_ap/cover/a/avatar-gen/avatar-generations_hugw.jpg" alt="" />
			</div>
			<div className="home_text animate__animated animate__fadeInRight">
				<h1>Hi! I am Nolonooojx.</h1>
				<p>It's my little page or resume. Maybe like mini-blog ok anyways. I am a Frontend developer from Uzbekistan. My real name is Abdulaziz! I am a student and I want to show you my little achievements as well as the process of becoming a programmer. <b>Interested? Click the button</b> and find out more about me.</p>
				<Link to='/about' className='button_link'><button>Read more</button></Link>
			</div>
		</div>
	)
}

export default Home