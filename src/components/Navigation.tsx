import { IoLogoMarkdown } from "react-icons/io";

function Navigation() {
	return (
		<nav className="flex items-center justify-between flex-wrap  bg-blue-600 p-6">
			<div className="flex items-center flex-shrink-0 text-white mr-6">
				<IoLogoMarkdown size={50} />
				<span className="font-semibold text-lg tracking-tight md:text-xl">
					README Project Generator
				</span>
			</div>

			<div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
				<div className="text-sm lg:flex-grow">
					<a
						href="#responsive-header"
						className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-4"
					></a>
					<a
						href="#responsive-header"
						className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-4"
					></a>
					<a
						href="#responsive-header"
						className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white"
					></a>
				</div>
				<div>
					<a
						target="_blank"
						href="https://www.joselatines.com"
						className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 lg:mt-0"
					>
						Made with <span className="text-red-500">❤️</span> by José Latines
					</a>
				</div>
			</div>
		</nav>
	);
}

export default Navigation;
