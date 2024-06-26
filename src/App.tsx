import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Amplify } from 'aws-amplify';
import awsConfig from './aws-exports';
import { useIdToken } from './hooks/useIdToken';
import ErrorMessage from './components/ErrorMessage';
import IdTokenDisplay from './components/IdTokenDisplay';
import GrafanaDashboard from './components/GrafanaDashboard';

Amplify.configure(awsConfig);

function App() {
  const { idToken, error } = useIdToken();

  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user?.username}</h1>
          {error && <ErrorMessage message={error} />}
          {idToken && <IdTokenDisplay token={idToken} />}
          {idToken && <GrafanaDashboard token={idToken} />}
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}

export default App;
