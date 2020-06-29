
import { useCallback, useState } from 'react';
import useGlobalEventListner from '@hooks/useGlobalEventListner';

function useElementFocus(length) {
	const [currentFocus, setCurrentFocus] = useState(0);

	const handleKeyDown = useCallback(e => {

		if (e.key === 'ArrowDown') {
			e.preventDefault();
			setCurrentFocus(currentFocus === length - 1 ? 0 : currentFocus + 1);
		} else if (e.key === 'ArrowUp') {
			e.preventDefault();
			setCurrentFocus(currentFocus === 0 ? length - 1 : currentFocus - 1);
		}
	}, [length, currentFocus, setCurrentFocus]);

	useGlobalEventListner('keydown', handleKeyDown);


	return [currentFocus, setCurrentFocus];
}

export default useElementFocus;
