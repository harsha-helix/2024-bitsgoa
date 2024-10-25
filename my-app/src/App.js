import React from 'react';

function App() {
  React.useEffect(() => {
    window.location.href = 'https://qff2024-bitsgoa.vercel.app';
  }, []);

  return (
    <div>
      {/* You can add a temporary message here while redirecting (optional) */}
      <p>Redirecting to QFF 2024...</p>
    </div>
  );
}

export default App;