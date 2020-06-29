import { useContext } from 'react';
import Context from '@commonReact/context';

const useCustomContext = () => {
	return useContext(Context);
};

export default useCustomContext;