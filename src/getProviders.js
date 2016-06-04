import providePage from './index';
import provideRouter from 'provide-router';
import { createMemoryHistory } from 'react-router';

export default function getProviders(defaultProviders, request) {
  const providers = {};

  for (let key in defaultProviders) {
    providers[key] = { ...defaultProviders[key] };
  }

  if (!providers.router) {
    providers.router = provideRouter(createMemoryHistory(request.originalUrl));
  }

  if (!providers.page) {
    providers.page = providePage;
  }

  providers.page.state = {
    ...providers.page.state,
    requestSession: request.session,
    acceptJson: request.headers
      && request.headers.accept
      && request.headers.accept.indexOf('json') > -1
  };

  return providers;
}
