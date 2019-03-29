import 'core-js/stable';
import config from './config';
import createAdmin from './admin';
import http from 'http';
import Koa from 'koa';
import middlewares from './logger';
import Routes from './controller';
import userAgentOverride from './userAgentOverride';

const koa = new Koa();

koa.use(userAgentOverride);
middlewares.forEach(m => koa.use(m));
koa.use(Routes.routes());

const server = http.createServer(koa.callback());

server.listen(config.webPort);

createAdmin();
