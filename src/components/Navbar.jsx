import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
	return (
		<div className='navbar'>
				<div className="logo animate__animated animate__fadeInDown">
					<Link to='/'><img src="https://sm.ign.com/ign_ap/cover/a/avatar-gen/avatar-generations_hugw.jpg" alt="" /></Link>
					<Link className='b' to='/'><b>Nolonooojx</b></Link> 
				</div>
				<div className="links animate__animated animate__fadeInDown">
						<Link className='link' to='/'>Home</Link>
						<Link className='link' to='/about'>About</Link>
						<Link className='link' to='/skills'>Skills</Link>
						<Link className='link' to='/create'>Create</Link>
				</div>
			<div className="navbar_bg">
			</div>
		</div>
	)
}

export default Navbar