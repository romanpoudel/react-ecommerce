import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { store } from "./app/store"
import { Provider } from "react-redux"
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Auth0Provider
        domain="dev-0gkh7twnbrqgy5vc.us.auth0.com"
        clientId="IfrjynPnHD0EcKI0P64HmUYI7k44H9BG"
        authorizationParams={{
            redirect_uri: window.location.origin
        }}
    >
        <Provider store={store}>
            <App />
        </Provider>
    </Auth0Provider>
)
