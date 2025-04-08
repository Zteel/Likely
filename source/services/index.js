/**
 * Social network services aggregated together
 */
import Service from '../service';

import facebook from './facebook';
import linkedin from './linkedin';
import pinterest from './pinterest';
import reddit from './reddit';
import telegram from './telegram';
import threads from './threads';
import viber from './viber';
import whatsapp from './whatsapp';
import xcom from './xcom';

const services = {
    facebook,
    linkedin,
    pinterest,
    reddit,
    telegram,
    threads,
    viber,
    whatsapp,
    xcom,
};

Object.entries(services).forEach((entry) => {
    const [serviceName, serviceObj] = entry;
    Service(serviceObj);
    serviceObj.name = serviceName;
});

export default services;
