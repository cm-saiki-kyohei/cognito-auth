import { useEffect, useState } from 'react';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Amplify } from 'aws-amplify';
import awsConfig from './aws-exports';

Amplify.configure(awsConfig);

function App() {
  const [idToken, setIdToken] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchIdTokenFromLocalStorage = () => {
      const keyPrefix = `CognitoIdentityServiceProvider.${awsConfig.aws_user_pools_web_client_id}`;
      const lastAuthUser = localStorage.getItem(`${keyPrefix}.LastAuthUser`);
      const idToken = lastAuthUser ? localStorage.getItem(`${keyPrefix}.${lastAuthUser}.idToken`) : null;

      idToken ? setIdToken(idToken) : setError('Failed to retrieve ID token from localStorage');
    };

    fetchIdTokenFromLocalStorage();
  }, []);

  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user?.username}</h1>
          {error && (
            <div style={{ color: 'red' }}>
              <h2>Error:</h2>
              <pre>{error}</pre>
            </div>
          )}
          {idToken && (
            <div>
              <h2>ID Token:</h2>
              <pre>{idToken}</pre>
            </div>
          )}
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}

export default App;