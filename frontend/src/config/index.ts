import devConfig from './dev.config';
import prodConfig from './prod.config';

export type ConfigType = {
	API_URL: string;
	TOKEN_NAME: string;
};

export const config: ConfigType = {
	...(process.env.NODE_ENV === 'production' ? prodConfig : devConfig),
	TOKEN_NAME: 'access_token',
};

export default config;
