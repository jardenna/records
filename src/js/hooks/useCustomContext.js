import { useContext } from 'react';
import Context from '@commonReact/context';


//Import file in component ad´nd display values = useCustomContext()
const useCustomContext = () => {
	return useContext(Context);
};

export default useCustomContext;