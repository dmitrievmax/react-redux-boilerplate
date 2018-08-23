import Loadable from 'react-loadable';
import LoadableIndicator from 'components/LoadableIndicator';

export default Loadable({
	loader: () => import('./index'),
	loading: LoadableIndicator,
});
