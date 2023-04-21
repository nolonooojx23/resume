import React from 'react'

function Create() {
	return (
		<div className='create'>
			<div className="animate__animated animate__fadeInUp">
				<h1 className='title'>And finaly my projects...</h1>
			</div>
			<div className="create_box">
				<div className="create_text animate__animated animate__fadeInLeft">
					<h1>Linkedin clone...</h1>
					<p>LinkedIn Clone - built on react using redux and firebase.  Finished the login page as well as the comments page.</p>
					<a href="https://app.netlify.com/teams/nolonooojx23/overview"><button>Wtach now </button></a>
				</div>
				<div className="create_img animate__animated animate__fadeInRight">
					<img src="./images/i1.jpg" alt="" />
				</div>
			</div>
			<div className="create_box">
				<div className="create_text">
					<h1>Gmail clone...</h1>
					<p>Gmail Clone - built on react using redux and firebase. Finished the login page as well as the comments page and modal.</p>
					<a href="https://app.netlify.com/teams/nolonooojx23/overview"><button>Wtach now </button></a>
				</div>
				<div className="create_img">
					<img src="./images/i2.jpg" alt="" />
				</div>
			</div>
			<div className="create_box">
				<div className="create_text">
					<h1>Snapchat clone...</h1>
					<p>Snapchat Clone - built on react using redux and firebase.  Finished the login page as well as the comments page. Added a camera and the ability to take pictures and view them later on the comments page.</p>
					<a href="https://app.netlify.com/teams/nolonooojx23/overview"><button>Wtach now </button></a>
				</div>
				<div className="create_img">
					<img src="./images/i3.jpg" alt="" />
				</div>
			</div>
			<div className="create_box">
				<div className="create_text">
					<h1>TuoTown...</h1>
					<p>TuoTown - is the prototype of an online knife store.  Created using html , css, Tailwind and JavaScript.  Several pages added a lot of functionality.  For example implemented cart, adding to cart and much more.</p>
					<a href="https://app.netlify.com/teams/nolonooojx23/overview"><button>Wtach now </button></a>
				</div>
				<div className="create_img">
					<img src="./images/i4.jpg" alt="" />
				</div>
			</div>
			<h1 className='title-2'>If you want you will find more my projects in my netlify...</h1>
		</div>
	)
}

export default Create