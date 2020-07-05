
import { useCallback, useState } from 'react';
import useGlobalEventListner from '@hooks/useGlobalEventListner';
import { ARROW_DOWN, ARROW_UP } from '@common/constants/keyboard';

function useFocus(length) {
	const [focus, setFocus] = useState(0);

	const handleKeyDown = useCallback(e => {

		if (e.key === ARROW_DOWN) {
			e.preventDefault();
			setFocus(focus === length - 1 ? 0 : focus + 1);
		} else if (e.key === ARROW_UP) {
			e.preventDefault();
			setFocus(focus === 0 ? length - 1 : focus - 1);
		}
	}, [length, focus, setFocus]);

	useGlobalEventListner('keydown', handleKeyDown);


	return [focus, setFocus];
}

export default useFocus;
