import React from 'react'
import { Container,Box,Typography } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid';
import cfme from './assets/cfme.jpeg'


const columns = [
    { field: 'id', headerName: 'NO.', width: 101 },
    
    {
      field: 'Activity_list',
      headerName: 'Activity list',
      width: 156,
      editable: true,
    },
    {
      field: 'Total',
      headerName: 'Total',
      type: 'number',
      width: 90,
      editable: true,
    }
  ];


  const rows = [
    { id: 1, Activity_list: 'Snow', Total: 14 },
    { id: 2, Activity_list: 'Lannister', Total: 31 },
    { id: 3, Activity_list: 'Lannister', Total: 31 },
    { id: 4, Activity_list: 'Stark', Total: 11 },
    { id: 5, Activity_list: 'Targaryen', Total: null },
    { id: 6, Activity_list: 'Melisandre', Total: 150 },
    { id: 7, Activity_list: 'Clifford', Total: 44 },
    { id: 8, Activity_list: 'Frances', Total: 36 },
    { id: 9, Activity_list: 'Roxie', Total: 65 },
    { id: 10, Activity_list: 'Roxie', Total: 65 },
  ];

const HomePage = () => {
    document.body.style.backgroundColor = "#F5F5DC";
    return (
        
        <Container sx={{ }} >

            <div>
            <img src={cfme} alt="cfme" style={{ width: '300px', height: 'auto' }} />
            </div>

        <Box sx={{textAlign :'center', color:'Black', marginTop:5,marginBottom:3}}>
            <Typography variant='h2' sx={{fontFamily: 'Noto Sans Thai, sans-serif'}}>CF ME</Typography>
        </Box>

        <Box sx={{textAlign :'center', color:'Black'}}>
            <Typography variant='h6' sx={{fontFamily: 'Noto Sans Thai, sans-serif'}}>Hello xxx this is your carbon footprint today.</Typography>
        </Box>
        
        <Box sx={{ height: '640px', width: '100%',maxHeight: '90%' ,backgroundColor: '#DCDCDC'}}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[10]}
        //checkboxSelection
        disableRowSelectionOnClick
        sx={{
            '.MuiDataGrid-columnHeaders': {
              backgroundColor: '#DCDCDC',  // กำหนดสีพื้นหลังของหัวตาราง
              color: '#000000',            // กำหนดสีของข้อความในหัวตาราง
              fontSize: '0.9rem', 
              fontFamily: 'Noto Sans Thai, sans-serif'
            },
            '.MuiDataGrid-columnHeaderTitle': {
              fontWeight: 'bold',          // กำหนดให้หัวตารางเป็นตัวหนา
            },
          }}
        />
        </Box>

        </Container>
    )
}

export default HomePage
