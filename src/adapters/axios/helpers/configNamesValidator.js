import configNames from '../constants/configNames';

/**
 * @param {Object} config Objecto que será validado y filtrado para comprobar que
 * 	tiene las configuraciones correctas según axios.
 * @returns {Object} Devuelve nueva configuración filtrada con los pares key/value disponibles
 * @example 
		const auxConfig = {
			data:'test',
			someRandom:'thing',
			decompress:''
		}

		console.log(configNamesValidator(auxConfig))
		// Object { data: "test", decompress: "" }
 */
export const configNamesValidator = (config) => {
  let newConfig = {};

  Object.entries(config)
    .filter((configName) => configNames.includes(configName[0]))
    .map((conf) => (newConfig[conf[0]] = conf[1]));

  return newConfig;
};
