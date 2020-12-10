import React from 'react';
import { useWindowResize } from '../../hooks/useWindowResize';

export const Page = ({ children, className = '' }) => {
	const handleResize = React.useCallback(() => {
		const page = document.querySelector('.Page');
		const navbarHeight = document
			.querySelector('.Navbar')
			.getBoundingClientRect().height;

		if (window.innerWidth < 768) {
			page.style.paddingTop = '0';
			page.style.paddingBottom = `${navbarHeight}px`;
			return;
		}

		page.style.paddingTop = `${navbarHeight}px`;
	}, []);

	useWindowResize(handleResize);

	return (
		<div
			className={`Page animate__animated animate__fadeIn animate__faster ${className}`}
		>
			{children}
		</div>
	);
};

export const PageTitle = ({ children }) => (
	<h1 className="PageTitle">{children}</h1>
);
