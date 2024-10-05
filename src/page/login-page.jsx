import React from 'react';
import { TextField, Button, Checkbox, FormControlLabel, Typography, Box, Link, Divider, Container } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {

  document.body.style.backgroundColor = "#009933";
  const navigate = useNavigate();

  return (
    <Container maxWidth="md" sx={{my:10}}>
        <Box sx={{textAlign :'center', color:'white' }}>
            <Typography variant='h2' 
            sx={{ 
              fontFamily: 'Noto Sans Thai, sans-serif',
              fontWeight: 'bold', 
              fontSize: '3rem', 
              color: '#fff', 
              textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)',
              marginTop: 4}}>
              CF ME
            </Typography>
        </Box>
      <Box
        sx={{
          width: { xs: '90%', sm: 400 }, // Responsive: xs สำหรับมือถือ, sm สำหรับแท็บเล็ตและใหญ่กว่า
          margin: 'auto',
          padding: { xs: 2, sm: 3 }, // Responsive padding
          backgroundColor: '#FFF',
          borderRadius: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mt: { xs: 2, sm: 5 }, // Responsive margin-top
        }}
      >
        <Typography variant="h4" sx={{ color: '	#000000', marginBottom: 2 ,fontFamily: 'Noto Sans Thai, sans-serif'}}>
          Sign In
        </Typography>
        <TextField
          label="Email"
          fullWidth
          margin="normal"
          variant="outlined"
          sx={{
            input: { color: '#000000' },
            label: { color: '#000000' },
            fieldset: { borderColor: '#000' },
            '& label.Mui-focused': {
              color: '#000', // เปลี่ยนสีเป็นขาวเมื่อถูกโฟกัส
            },
            '& .MuiOutlinedInput-root': {
              '&.Mui-focused fieldset': {
                borderColor: '#000', // เปลี่ยนสีของกรอบเมื่อถูกโฟกัส
              },
            },
          }}
        />
        <TextField
          label="Password"
          fullWidth
          margin="normal"
          variant="outlined"
          sx={{
            input: { color: '#000000' },
            label: { color: '#000000' },
            fieldset: { borderColor: '#000000' },
            '& label.Mui-focused': {
              color: '#000000', // เปลี่ยนสีเป็นขาวเมื่อถูกโฟกัส
            },
            '& .MuiOutlinedInput-root': {
              '&.Mui-focused fieldset': {
                borderColor: '#000000', // เปลี่ยนสีของกรอบเมื่อถูกโฟกัส
              },
            },
          }}
        />
        
        <Button
          variant="contained"
          fullWidth
          sx={{ backgroundColor: '#006600', color: '#fff', marginBottom: 2, marginTop : 2 }} onClick={()=> navigate('/')}
        >
          Sign In
        </Button>
        <Typography sx={{fontFamily: 'Noto Sans Thai, sans-serif'}}>
          Don't have any account?
          <Button sx={{fontFamily: 'Noto Sans Thai, sans-serif'}} onClick={()=> navigate('/signup')}>SingUp</Button>
        </Typography>
      </Box>
    </Container>
  );
}
