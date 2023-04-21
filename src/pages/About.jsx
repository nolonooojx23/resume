import React from 'react'

function About() {
	return (
		<div className='about'>
			<div className='about-main '>
				<div className="about_text animate__animated animate__fadeInLeft">
					<h1>A little thing about me...</h1>
					<p>My real name is Abdulaziz. I am a frontend developer from Uzbekistan. I have been studying for 6 months.  I am from the city of Fergana. At the age of 16, I decided to try my hand at IT.  I have been interested in computers since childhood.  And here I am.  A year ago, I could not have imagined that I would study and develop myself as a programmer. And I think this is a very big experience in my life. If you ask me why I chose this path and follow it to this day? I will answer that in our time, without technology, nowhere and time does not stand still. I decided to move with the times and I was interested in it. If you want to know more about me and my endeavors in IT, subscribe to my social networks. Share your experience I will be very glad to hear it from you. :)</p>
				</div>
				<div className="about_img animate__animated animate__fadeInRight">
					<img src="./images/ab1.png" alt="" />
				</div>
			</div>
			<div className="about_second">
				<div className="about_second_text">
					<h1>Trying to be like them:</h1>
					<img src="./images/arrow.png" alt="" />
				</div>
				<div className="about_second_img">
					<img src="https://media.ambito.com/p/a9d7eca16c3909ef32719b04400d2d17/adjuntos/239/imagenes/040/503/0040503332/elon-musk.jpg" alt="" />
					<img src="https://cdn.britannica.com/99/236599-050-1199AD2C/Mark-Zuckerberg-2019.jpg" alt="" />
					<img src="https://pbs.twimg.com/profile_images/1564398871996174336/M-hffw5a_400x400.jpg" alt="" />
					<img src="https://media.gq-magazine.co.uk/photos/5d13933c003d7597a4ae5dc5/master/pass/Steve-Jobs-GQ-21Aug15-Getty_b.jpg" alt="" />
				</div>
			</div>
		</div>
	)
}

export default About