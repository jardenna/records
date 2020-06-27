import React from 'react';
import useKeyPress from '@hooks/useKeyPress';
import { ARROW_DOWN, ARROW_UP, ENTER, ESC } from '@common/constants/keyboard';

function useElementFocus(items, id) {
	const [selected, setSelected] = React.useState('');
	const [selectedItem, setSelectedItem] = React.useState(0);
	const downPress = useKeyPress(ARROW_DOWN);
	const upPress = useKeyPress(ARROW_UP);
	const enterPress = useKeyPress(ENTER);
	const escPress = useKeyPress(ESC);


	//Indsæt ref ref.current.focus();
	React.useEffect(() => {

		if (items.length && downPress) {

			setSelectedItem(prevState =>
				prevState < items.length - 1 ? prevState + 1 : prevState
			);


		}
	}, [downPress]);

	React.useEffect(() => {
		if (items.length && upPress) {
			setSelectedItem(prevState => (prevState > 0 ? prevState - 1 : prevState));
		}
	}, [upPress]);

	React.useEffect(() => {
		if (items.length && enterPress) {
			setSelected(items[selectedItem]);
		}
	}, [selectedItem, enterPress]);

	React.useEffect(() => {
		if (escPress) {
			setSelected(items[selectedItem]);
		}
	}, [escPress]);


	return [selected, selectedItem];
}

export default useElementFocus;
