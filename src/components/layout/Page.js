import React from 'react';
import { useWindowResize } from '../../hooks/useWindowResize';

export const Page = props => {
	const handleResize = React.useCallback(() => {
		const page = document.querySelector('.Page');

		if (window.innerWidth < 768) {
			page.style.paddingTop = '0';
			return;
		}

		const navbarHeight = document
			.querySelector('.Navbar')
			.getBoundingClientRect().height;
		page.style.paddingTop = `${navbarHeight}px`;
	}, []);

	useWindowResize(handleResize);

	return (
		<div className="Page animate__animated animate__fadeIn animate__faster">
			{props.children}
		</div>
	);
};
