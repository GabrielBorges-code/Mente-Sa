import AppRoute from './routes'
import React from 'react';
import { AuthGoogleProvider } from './contexts/authGoogle';
import {Toaster} from 'react-hot-toast'


export const App = () => {
    return (
    <AuthGoogleProvider>
        <Toaster position='top-center' />

        <AppRoute/>
        
    </AuthGoogleProvider>
    
    )
}