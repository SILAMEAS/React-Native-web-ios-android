import KeycloakReactNativeClient from './util/client';

const Keycloak = new KeycloakReactNativeClient({
  url: 'http://10.2.50.146:8020/realms/signature-identification/protocol/openid-connect/auth',
  realm: 'signature-identification',
  clientId: 'signature-identification',
});

export default Keycloak;
