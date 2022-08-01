import React from 'react';

type MainProps = {
    name: string
}

const Main: React.FC<MainProps> = ({ name }) => (
	<div className="text-left pt-32 mb-80 text-4xl leading-snug font-light tracking-wider">
			<p>Hello, <span className="text-indigo-700">I&apos;m {name}</span></p>
			<p>full stack web developer</p>
			<button className="font-light uppercase text-xl text-indigo-700 rounded px-10 mt-5 py-1 border-2 border-indigo-700">About Me</button>
	</div>
);

export default Main;
