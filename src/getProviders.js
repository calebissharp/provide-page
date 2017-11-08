import provideRouter from 'provide-router';
import createMemoryHistory from 'history/createMemoryHistory';

export default function getProviders(defaultProviders, request) {
  const providers = {};

  for (let key in defaultProviders) {
    providers[key] = { ...defaultProviders[key] };
  }

  if (!providers.router) {
    providers.router = provideRouter(createMemoryHistory({
      initialEntries: [ request.originalUrl ]
    }));
  }

  if (providers.page) {
    providers.page.state = {
      ...providers.page.state,
      requestSession: request.session,
      acceptJson: request.headers
        && request.headers.accept
        && request.headers.accept.indexOf('application/json') > -1
    };
  } else {
    console.error(
      'The `page` provider is missing from the `providers` object!'
    );
  }

  return providers;
}
