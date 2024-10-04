import React from 'react'
import { Container , Box , Typography , TextField, Grid2, Button} from '@mui/material'
import { Link } from 'react-router-dom';



const LoginPage = () => {

  document.body.style.backgroundColor = '#e6e6e6';

  return (
    <Container maxWidth='lg' >
        <Box sx={{
          backgroundColor: '#fff',
          borderRadius: 2,
          padding: 4,
          boxShadow: 'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
          mx:40,
          my:10,
          display: 'flex',
          flexDirection: 'column'
          }}>
            {/* Header SignIn */}
              <Typography variant='h4' sx={{marginBottom: 5 }}>Sign in</Typography>

            {/* Email */}
              <Typography sx={{marginBottom: 1 }}>Email</Typography>
              <TextField id="Email" variant="outlined" sx={{marginBottom: 4}} />

            {/* Email */}
              <Typography sx={{marginBottom: 1 }}>Password</Typography>
              <TextField id="Email" variant="outlined" sx={{marginBottom: 4}} /> 

              <Button variant="contained" color="success" sx={{fontSize: 16 , mb: 3}}>SignIn</Button>

              <Typography sx={{marginBottom: 1, textAlign: 'center'}}>Do you have any account?
                <Link>SignUp</Link>
              </Typography>
        </Box>
    </Container>
  )

}

export default LoginPage
