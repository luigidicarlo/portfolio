import { useEffect } from 'react';

export const useWindowResize = handler => {
	useEffect(() => {
		window.addEventListener('resize', handler);
		handler();

		return () => window.removeEventListener('resize', handler);
	}, [handler]);
};
