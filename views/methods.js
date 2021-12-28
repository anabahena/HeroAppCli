import superagent from 'superagent';
import baseConfig from '../base.config';

const responseBody = res => res.body;

const requests = {
  get: url => superagent.get(url).then(responseBody),
};

const getHeroes = {
  create: () => requests.get(`${baseConfig.apiUrl}/all.json`),
};

export default {
  getHeroes,
};
