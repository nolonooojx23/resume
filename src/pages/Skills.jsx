import React from 'react'

function Skills() {
	return (
		<div className='skills'>
			<div className="skills_text animate__animated animate__fadeInLeft">
				<h1>Soooo what about my <br /> knowledge:</h1>
				<p>I have used all the markup and programming languages listed below and have done projects with most of them. Every day I improve my skills. ;)</p>
				<li>1. HTML</li>
				<li>2. CSS</li>
				<li>3. SASS</li>
				<li>4. Bootstrap</li>
				<li>5. Tailwind</li>
				<li>6. JavaScript</li>
				<li>7. React</li>
				<li>8. React + Redux</li>
				<li>9. React + Vite</li>
				<li>10. React + Firebase</li>
				<li>11. TypeScript</li>
			</div>
			<div className="skills_imgs ">
				<img className='animate__animated animate__fadeInRight' src="./images/platforms.png" alt="" />
			</div>
		</div>
	)
}

export default Skills