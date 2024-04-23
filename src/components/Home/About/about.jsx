import React from 'react'
import pdf from '../../../Shravan-Seth-Resume.pdf'

export const about = () => {
	return (
		<section id="about">
			<div class="container">
				<br />
				<h2 className='title'>Little about me...</h2>
				<div class="info">
					<div class="col-sm-6">
						<br />
						<p>Robust Developer with a knack for collaborating with talented professionals to craft exceptional digital experiences. With expertise in both Backend and Frontend development, I specialize in leveraging cutting-edge technologies like Flutter, React Native, Node.js, and React.js to bring ideas to life.</p>
						<p>
							Armed with a Bachelor of Technology (BTech) degree in Information Technology from the esteemed Institute Of Engineering and Management, I have a solid foundation in software engineering principles. Throughout my career, I've honed my skills in creating robust APIs and microservices, crucial for building high-performing applications.
						</p>
						<p>My passion for staying at the forefront of technology has led me to constantly explore new solutions and innovations. Whether it's solving complex problems or keeping up with the latest industry trends, I'm always up for the challenge.</p>
						
						<p>This portfolio is a showcase of my journey in the world of development. Here, you'll find a collection of projects that highlight my skills, creativity, and dedication to delivering excellence. From sleek mobile applications to dynamic web platforms, each project reflects my commitment to quality and innovation.
						</p>
						<a className='button workButton' href={pdf}>Download Resume</a>
					</div>
					<br />
					<div class="col-sm-5">
						<img src="https://res.cloudinary.com/shravanseth/image/upload/v1648308202/samples/dev_t1xiby.png" alt="Shravan Seth" />
					</div>

				</div>

			</div>

		</section>
	)
}
