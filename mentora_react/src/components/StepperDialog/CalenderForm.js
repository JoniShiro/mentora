import React from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import Times from './Times.js';
import { CssBaseline, Grid, Paper, ThemeProvider, createTheme } from '@mui/material';
import images from '../../constants/images.js';

const theme = createTheme();

const CalenderForm = () => { 
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '60vh' }}>
        <CssBaseline />
          <Grid item 
          container
          xs={12}
          sm={8}
          md={6}
          py={4}
          justifyContent='space-evenly'
          component={Paper}
          elevation={6}
          square gap={2}
          gridTemplateAreas={'calender time'}>
              <Grid item gridArea='calender'>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DateCalendar />
                  </LocalizationProvider>
              </Grid>
              <Grid item gridArea='time' pl={3}>
                  <Times />
              </Grid>
          </Grid>
          <Grid
          item
          xs={false}
          sm={4}
          md={6}
          sx={{
            backgroundImage: `url(${images.letter})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </Grid>
    </ThemeProvider>
  )
}

export default CalenderForm