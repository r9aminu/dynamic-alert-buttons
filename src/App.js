import React from 'react';
import './style/CustomStyle.css';

// Alert button component with default prop values.
function AlertButton({ message = "Message is empty", children = "Click Me" }) {
  return <button className="alert-button" onClick={() => alert(message)}>{children}</button>;
}

function Toolbar() {
  // Button data, some with missing properties.
  const buttons = [
    { message: 'Downloading!', children: 'Download File' },
    { message: 'Sharing!', children: 'Share Document' },
    { message: 'Sharing!' }, 
    {}, 
    { children: 'Only button' }, 
  ];

  // Map buttons to components with checks for missing props.
  return (
    <div>
      {buttons.map((button, index) => (
        <AlertButton key={index} message={button.message} children={button.children || "Button " + (index + 1)} />
      ))}
    </div>
  );
}

// Main App component.
function App() {
  return (
    <div className="App">
      <Toolbar />
    </div>
  );
}

export default App;
