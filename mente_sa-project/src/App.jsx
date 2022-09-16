import AppRoute from './routes'
import React from 'react';
import { AuthGoogleProvider } from './contexts/authGoogle';


export const App = () => {
    return (
    <AuthGoogleProvider>
    <AppRoute/>
    </AuthGoogleProvider>
    
    )
}