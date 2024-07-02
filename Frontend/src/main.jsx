import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';



const AppWrapper = () => {
 

  return (
    <context.Provider >
   
    </context.Provider>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <App />
  </React.StrictMode>,
  
);
