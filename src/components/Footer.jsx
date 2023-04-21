import React from 'react'
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import ShareIcon from '@mui/icons-material/Share';

function Footer() {
	return (
		<div className='footer'>
			<img src="https://sm.ign.com/ign_ap/cover/a/avatar-gen/avatar-generations_hugw.jpg" alt="" />
			<h1>If you want to learn more about me. <br /> Subsribe to my soical networks. ;)</h1>
			<div className="footer_icons">
				<a href="https://web.telegram.org/z/"><TelegramIcon/></a>
				<a href="https://www.instagram.com/"><InstagramIcon/></a>
				<a href="https://github.com/nolonooojx23"><GitHubIcon/></a>
				<a href="https://app.netlify.com/teams/nolonooojx23/overview"><ShareIcon/></a>
			</div>
			<p>Copyright © 2023-present Nolonooojx Contributor</p>
		</div>
	)
}

export default Footer