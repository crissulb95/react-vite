import axios from 'axios';
import { mainUrl } from 'src/adapters/env';
import { configNamesValidator } from './helpers/configNamesValidator';

/**
 * Función que permite inicializar correctamente una instancia de axios
 * con el baseUrl de la Api principal
 * @param {config} config Objeto que contiene la configuración para inicializar una Instancia de Axios
 * @returns AxiosInstance
 */
export const apiInstance = (config) => {
  const validatedConfig = configNamesValidator(config);

  return axios.create({
    baseURL: mainUrl,
    ...validatedConfig
  });
};
