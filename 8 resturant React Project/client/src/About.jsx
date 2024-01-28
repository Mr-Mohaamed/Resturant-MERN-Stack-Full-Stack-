import { useContext, useRef, useState } from 'react';
import { Context } from './Layout';

function About() {
	const scrollBar = useRef();

	// let [isDown, setIsDown] = useState(false);
	// let [startX, setStartX] = useState(null);
	// let [scrollX, setScrollX] = useState(null);
	// const scrollBarWheel = (e) => {
	// 	e.preventDefault();
	// 	scrollBar.scrollLeft += e.deltaY;
	// 	console.log(scrollBar.scrollLeft);
	// 	console.log(e.deltaY);
	// 	console.log(e.deltaY);
	// };
	// });

	// slider.addEventListener('mousedown', (e) => {
	// 	e.preventDefault();
	// 	isDown = true;
	// 	slider.classList.add('active');
	// 	startX = e.pageX - slider.offsetLeft;
	// 	scrollX = slider.scrollLeft;
	// 	console.log(startX, scrollX);
	// });
	// slider.addEventListener('mouseleave', () => {
	// 	isDown = false;
	// 	slider.classList.remove('active');
	// });
	// slider.addEventListener('mouseup', () => {
	// 	isDown = false;
	// 	slider.classList.remove('active');
	// });
	// slider.addEventListener('mousemove', (e) => {
	// 	if (!isDown) return;
	// 	e.preventDefault();
	// 	const x = e.pageX - slider.offsetLeft;
	// 	const walk = (x - startX) * 2;
	// 	slider.scrollLeft = scrollX - walk;
	// });

	return (
		<div className="home">
			<div className="full-page landing-page">
				<div className="welcome-text top-text">MEAT-FREE</div>
				<div className="img"></div>
				<div className="welcome-text bottom-text">YOUR MIND</div>
			</div>
			<div className="scrolling-box">
				<div
					ref={scrollBar}
					// onWheel={(e) => scrollBarWheel(e)}
					className="scroll-bar">
					<div className="pic"></div>
					<div className="pic"></div>
					<div className="pic"></div>
					<div className="pic"></div>
					<div className="pic"></div>
					<div className="pic"></div>
					<div className="pic"></div>
					<div className="pic"></div>
					<div className="pic"></div>
					<div className="pic"></div>
					<div className="pic"></div>
				</div>
			</div>
			<div className="about full-page page-one">
				<div className="left">
					<div className="text">
						<p>CURIOUS...?!</p>
						<p>
							ITS JUST <span className="animal-name">PENGIENS</span> !
						</p>
					</div>
				</div>
				<div className="right">
					<div className="img"></div>
				</div>
			</div>
			<div className="about full-page page-two">
				<div className="left">
					<div className="text">
						<p>STILL THERE... ?!</p>
						<p>IT CANT BE TRUE -_-</p>
					</div>
				</div>
				<div className="right">
					<div className="img"></div>
				</div>
			</div>
			<div className="about full-page page-three">
				<div className="left">
					<div className="text">
						<p>
							BRO ITS JUST <span className="animal-name">PENGIENS</span>...,
						</p>
						<p>
							I LOVE <span className="animal-name">PENGIENS</span>{' '}
						</p>
					</div>
				</div>
				<div className="right">
					<div className="img"></div>
				</div>
			</div>
		</div>
	);
}

export default About;
