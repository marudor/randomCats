// @flow
import { middlewares } from './logger';
import config from './config';
import http from 'http';
import Koa from 'koa';
import Routes from './controller';
import userAgentOverride from './userAgentOverride';

const koa = new Koa();

koa.use(userAgentOverride);
middlewares.forEach(m => koa.use(m));
koa.use(Routes.routes());

// koa.use(Bodyparser());

const server = http.createServer(koa.callback());

server.listen(config.webPort);
