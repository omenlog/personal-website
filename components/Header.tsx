import React from 'react';

const linkClasses = "text-xl transition-colors duration-200 cursor-pointer hover:text-gray-500";

const Header: React.FC = () => (
	<header className="flex justify-end py-4 pr-2">
		<div className="flex justify-around w-96 leading-10">
			<a className={linkClasses}>About</a>
			<a className={linkClasses}>Experience</a>
			<a className={linkClasses}>Contact</a>
		</div>
	</header>
);

export default Header;
