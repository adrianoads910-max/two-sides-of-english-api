import jwt from 'jsonwebtoken';
import { env } from '../config/env.js';

export const ensureAuth = (req, _res, next) => {
  const header = req.headers.authorization;
  if (!header) {
    return next({
      message: 'Missing Authorization header',
      status: 401,
      code: 'UNAUTHORIZED'
    });
  }

  const [type, token] = header.split(' ');
  if (type !== 'Bearer' || !token) {
    return next({
      message: 'Invalid Authorization format',
      status: 400,
      code: 'BAD_REQUEST'
    });
  }

  try {
    const payload = jwt.verify(token, env.jwtSecret);

    // sessionId disponível em req.sessionId (novo padrão)
    // e também em req.session.sessionId (compatibilidade)
    const sessionId = payload.sub;
    req.sessionId = sessionId;
    req.session = req.session || {};
    req.session.sessionId = sessionId;

    return next();
  } catch (err) {
    return next({
      message: 'Invalid or expired token',
      status: 401,
      code: 'UNAUTHORIZED'
    });
  }
};
