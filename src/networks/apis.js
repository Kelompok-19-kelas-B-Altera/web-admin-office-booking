import axios from 'axios';
import CONST from '../utils/constants';

const isDev = process.env.NODE_ENV === 'development';

const isLocalDev = (isDev) => {
	let axiosConfig;
	axiosConfig = axios.create();
	if (isDev) {
		const config = {
			baseURL: CONST.BASE_URL_API
		};
		axiosConfig = axios.create(config);
	}
	return axiosConfig;
};

const axiosInstance = isLocalDev(isDev);
axiosInstance.defaults.headers['Content-Type'] = 'application/json';

export default axiosInstance;
