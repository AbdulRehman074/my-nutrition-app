import { useState } from "react";

const App = () => {
  const [message, setMessage] = useState("Hello World!");

  return (
    <div style={{ 
      padding: '50px', 
      textAlign: 'center', 
      backgroundColor: '#f0f9f0',
      minHeight: '100vh'
    }}>
      <h1 style={{ color: 'green', fontSize: '48px' }}>
        🎉 SUCCESS! 🎉
      </h1>
      <p style={{ fontSize: '24px', color: '#333' }}>
        Your React App is Working!
      </p>
      <p style={{ fontSize: '18px', color: '#666' }}>
        Message: {message}
      </p>
      <button 
        onClick={() => setMessage("You clicked the button!")}
        style={{
          padding: '10px 20px',
          backgroundColor: 'green',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          fontSize: '16px',
          cursor: 'pointer'
        }}
      >
        Click Me!
      </button>
    </div>
  );
};

export default App;