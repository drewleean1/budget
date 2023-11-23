import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

const root = createRoot(document.getElementById('root'));

root.render(
<Auth0Provider
    domain="dev-rswsnui2z8an8oex.us.auth0.com"
    clientId="ZGIf9dZmLAxD2gmPXhMvbcTbADQJwlU1"
    authorizationParams={{
      redirect_uri: "https://drewleean1.github.io/budget/#/"
    }}
  >
    <App />
  </Auth0Provider>,
);