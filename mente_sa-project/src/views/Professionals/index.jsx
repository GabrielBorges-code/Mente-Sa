import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';

import { TextField } from '@mui/material';
import { Button } from '@mui/material';

import Container from '../Container';

import styles from './Index.module.css';

function ProfessionalContent() {
  return (

      // <Container customClass="min_height">
      <Container>
        <CssBaseline/>
        <Box >

            <h1 className={styles.title}>Profissional</h1>

          <div className={styles.card}>
            <TextField fullWidth id="outlined-basic" label="Nome Completo" variant="outlined" />
            <TextField fullWidth id="outlined-basic" label="CRM / CRP" variant="outlined" />
            <TextField fullWidth id="outlined-basic" label="E-mail" variant="outlined" />
            <TextField fullWidth id="outlined-basic" label="Telefone" variant="outlined" />
            <TextField fullWidth id="outlined-basic" label="Data de Nascimento" variant="outlined" />
            <TextField fullWidth id="outlined-basic" label="Estado Civil" variant="outlined" />
            <TextField fullWidth id="outlined-basic" label="Logradouro" variant="outlined" />
            <TextField fullWidth id="outlined-basic" label="Número" variant="outlined" />
            <TextField fullWidth id="outlined-basic" label="Complemento" variant="outlined" />
            <TextField fullWidth id="outlined-basic" label="Bairro" variant="outlined" />
            <TextField fullWidth id="outlined-basic" label="Estado" variant="outlined" />
            <TextField fullWidth id="outlined-basic" label="Cidade" variant="outlined" />

            <Button color="primary">Cadastrar</Button>

          </div>

        </Box>
      </Container>
  );
}

export default function Professional() {
  return <ProfessionalContent />;
}