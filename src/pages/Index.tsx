
import { useState } from 'react';
import Login from '../components/Login';
import Terminal from '../components/Terminal';

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="min-h-screen">
      {!isLoggedIn ? (
        <Login onLogin={() => setIsLoggedIn(true)} />
      ) : (
        <Terminal />
      )}
    </div>
  );
};

export default Index;
