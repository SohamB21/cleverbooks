// src/components/Hero.jsx
import React from "react";

const Hero = () => (
	<>
		<header className="header bg-primary text-white py-3 flex justify-between items-center">
			<div className="logo flex items-center">
				<img
					src="vite.svg"
					alt="Vite Logo"
					className="w-8 h-auto ml-10 mr-2"
				/>
				<h1 className="text-3xl">CleverBooks</h1>
			</div>
			<nav className="sections font-semibold">
				<a href="#" className="mx-4 hover:text-salmon duration-300">
					Problems
				</a>
				<a href="#" className="mr-4 hover:text-salmon duration-300">
					Metrics
				</a>
				<a href="#" className="mr-4 hover:text-salmon duration-300">
					Reviews
				</a>
				<a href="#" className="mr-4 hover:text-salmon duration-300">
					Target
				</a>
				<a href="#" className="mr-4 hover:text-salmon duration-300">
					CTA
				</a>
				<a href="#" className="mr-4 hover:text-salmon duration-300">
					Footer
				</a>
			</nav>
			<div className="actions flex mr-10 font-semibold">
				<button className="btn mx-10 relative overflow-hidden">
					<span className="inset-0 bg-gradient-to-r from-medium-purple to-salmon bg-clip-text text-transparent hover:text-white transform transition-all duration-500">
						Login
					</span>
				</button>
				<button className="btn rounded-full px-6 py-3 bg-gradient-to-br from-salmon to-medium-purple hover:bg-gradient-to-r hover:from-medium-purple hover:to-salmon hover:text-gray transform transition-all duration-500">
					Talk to Us
				</button>
			</div>
		</header>
		<section className="bg-primary text-white py-20 flex items-center justify-center min-h-screen">
			<div className="container mx-auto flex items-center justify-between">
				<div className="max-w-2xl">
					<h1 className="text-5xl font-semibold leading-tight bg-clip-text text-transparent text-white">
						Revolutionize your library, with{" "}
						<span className="text-5xl font-semibold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-medium-purple-2 via-salmon to-medium-purple">
							CleverBooks.
						</span>
					</h1>
					<p className="mt-6 text-md font-semibold">
						Tired of chaotic book management? Meet CleverBooks –
						your solution for seamless and efficient library
						organization. Our advanced technology and design make
						tracking, organizing and accessing your collection a
						breeze. Empowering librarians and book lovers, we ensure
						every book is cataloged and instantly available.
						Discover the future of book management today!
					</p>
				</div>
				<div className="hidden md:flex justify-end w-full p-0 m-0">
					<img
						src="heroImage.svg"
						alt="Book Management Image"
						className="w-full h-auto"
					/>
				</div>
			</div>
		</section>
	</>
);

export default Hero;
