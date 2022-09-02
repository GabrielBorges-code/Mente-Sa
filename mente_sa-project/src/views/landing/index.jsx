import * as React from 'react'
import Box from "@mui/material/Box"
import { Button, Container, createTheme, CssBaseline, Paper, useMediaQuery, useTheme } from '@mui/material'
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

import Grid from '@mui/material/Grid'


import { styled } from '@mui/system'
import GlobalStyles from '@mui/material/GlobalStyles';
import Logo from '../../assets/logo.svg'
import { ThemeProvider } from 'styled-components';
import { LightTheme } from '../../themes';





function MyComponent(){
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('sm'))
    return <span>{`theme.breakpoints.up('sm') matches: ${matches}`}</span>
}



export default function Landing() {
    
    return (
        <>
            <GlobalStyles styles={{":root": {backgroundColor: '#5086C1'}, h1:{color: '#fff'}}}/>
            <Container   sx={{ display: 'flex', flexDirection: 'column',alignItems: 'center'}}>
                <Box >
                    <img src={Logo}/>
                </Box>
                <Box sx={{display: 'flex', gridRow:'1', gridColumn:'4/5'}}>
                    <Box><Button variant="contained" size="large" sx={{backgroundColor: '#94BDEB', color: '#fff', borderRadius:'1rem'}}><CalendarTodayIcon sx={{margin: '0.5rem'}}/>Agendar Sessão</Button></Box>
                    <Box sx={{}}><Button variant="contained" size="large" sx={{backgroundColor: '#143885', color: '#fff',  marginLeft: '2rem', borderRadius:'1rem'}}><VideocamOutlinedIcon sx={{margin: '0.5rem'}}/>Ofertar Sessão</Button></Box>
                </Box>
  
            </Container>
        </>
        
    )
}