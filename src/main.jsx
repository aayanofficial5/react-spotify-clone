import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
          <Router>
            <App />
          </Router>
        </Provider>
  </StrictMode>,
)
