import React from 'react'
import pdf from '../../../Shravan-Seth-Resume.pdf'

export const about = () => {
	return (
		<section id="about">
			<div class="container">
				<br />
				<h2 className='title'>Little about me...</h2>
				<div class="row info">
					<div class="col-sm-7">
						<br />
						<p>I'm a third-year IT Undergrad student at the Institute of Engineering and Management in Kolkata. As a young and energetic enthusiast, I believe in innovative strategies and out-of-the-box solutions to problems. I have invaluable hands-on experience managing multiple concurrent Development projects in Web (MERN) and App (Flutter), making creative designs, and being an algorithmic coder. I have the ability to make things creative by utilising skills learned while working on various projects. Aside from that, my major qualities include the ability to identify opportunities, overcome objections, work under pressure, build long-term relationships, and establish a profitable company.
						</p>
						<a className='button workButton' href={pdf}>Download Resume</a>
					</div>
					<div class="col-sm-4">
						<img src="https://res.cloudinary.com/shravanseth/image/upload/v1648308202/samples/dev_t1xiby.png" alt="Shravan Seth" class="img-responsive img-circle" />
					</div>

				</div>

			</div>

		</section>
	)
}
