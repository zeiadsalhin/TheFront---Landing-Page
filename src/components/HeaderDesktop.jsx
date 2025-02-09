import { ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import BedtimeOutlinedIcon from '@mui/icons-material/BedtimeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import PropTypes from 'prop-types';

const HeaderDesktop = ({ theme, darkMode, handleDarkModeToggle }) => {
  return (
    <header>
    <ThemeProvider theme={theme}>
      <AppBar position="static" color='transparent' variant='dense' className='md:max-w-[78rem] mx-auto'>
      <Box className='flex justify-end items-center mt-2 mr-8'>
              <IconButton
                sx={{outline: 0.5, outlineColor: 'gray', borderRadius: 2, color: 'Primary' }}
                size="small"
                edge="start"
                color="inherit"
                aria-label="toggle dark mode"
                onClick={handleDarkModeToggle}
              >
                {darkMode ? <WbSunnyOutlinedIcon sx={{fontSize:16}} /> : <BedtimeOutlinedIcon sx={{fontSize:16}} />}
              </IconButton>
            </Box>
        <Toolbar variant='dense' className='mb-2'>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            <img src={`https://assets.maccarianagency.com/the-front/logos/logo${ darkMode ? '-negative' : '' }.svg`} className='w-[7rem]' width='100%' height='100%' alt="logo" />
          </Typography>
            <Box sx={{ display: { md: 'flex' } }}>
              <Button color="primary" variant='text'>Home</Button>
              <Button color="primary" variant='text'>About</Button>
              <Button color="primary" variant='text'>Services</Button>
              <Button color="primary" variant='text'>Contact</Button>
              <Button color="primary" variant='text'>Login</Button>
            </Box>
        </Toolbar>

      </AppBar>
    </ThemeProvider>
    </header>
  );
};
HeaderDesktop.propTypes = {
  theme: PropTypes.object.isRequired,
  darkMode: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired,
  handleDarkModeToggle: PropTypes.func.isRequired,
};

export default HeaderDesktop;
