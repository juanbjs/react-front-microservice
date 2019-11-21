import React from 'react';
import Keycloak from 'keycloak-js';

import { Store } from '../Provider/Store';
import { setSession } from '../Action/Action';

export function SecureApp(props) {
  const { dispatch } = React.useContext(Store);
  const [keycloak, setKeycloak] = React.useState();
  const [authenticated, setAuthenticated] = React.useState();

  React.useEffect(
    () => {
      const verifyLogin = () => {
        const keycloak = Keycloak('keycloak.json');
        keycloak
          .init(
            { onLoad: 'login-required' }
          )
          .success((auth) => {
            if (!auth) {
              window.location.reload();
            } else {
              setKeycloak(keycloak)
              setAuthenticated(auth)

              setSession(dispatch,
                {
                  keycloak,
                  auth
                }
              )
            }
          }).error((err) => {
            console.error("Authenticated Failed", err);
          });
      }
      verifyLogin()
    },
    // eslint-disable-next-line
    []
  )

  return (
  
    keycloak && authenticated
      ? props.children
      : <div>
        <h1>No Validate Session</h1>
      </div>
  )
}