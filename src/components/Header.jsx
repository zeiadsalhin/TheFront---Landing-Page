import { useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import BedtimeOutlinedIcon from '@mui/icons-material/BedtimeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';

const menuItems = [
  {
    title: 'Landings',
    links: [
      { text: 'Mobile App', href: '#' },
      { text: 'Desktop App', href: '#' },
      { text: 'Startup', href: '#' },
      { text: 'Expo', href: '#' },
      { text: 'Marketing', href: '#' },
      { text: 'Service', href: '#' },
      { text: 'Enterprise', href: '#' },
      { text: 'Cloud Hosting', href: '#' },
      { text: 'Design Company', href: '#' },
      { text: 'Web Basic', href: '#' },
      { text: 'Overview', href: '#' },
      { text: 'Agency', href: '#' },
      { text: 'E-Learning', href: '#' },
      { text: 'Coworking', href: '#' },
      { text: 'Rental', href: '#' },
      { text: 'Job Listing', href: '#' },
      { text: 'Logistics', href: '#' },
      { text: 'E-commerce', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { text: 'Career Listing', href: '#' },
      { text: 'Job Opening', href: '#' },
      { text: 'Customer Stories', href: '#' },
      { text: 'Hire Us', href: '#' },
      { text: 'About: Startup', href: '#' },
      { text: 'About', href: '#' },
      { text: 'Pricing', href: '#' },
      { text: 'Terms', href: '#' },
      { text: 'Contact: Map', href: '#' },
      { text: 'Contact: Minimal', href: '#' },
      { text: 'Contact: Startup', href: '#' },
    ],
  },
  {
    title: 'Pages',
    links: [
      { text: 'Help Center: Overview', href: '#' },
      { text: 'Help Center: Article', href: '#' },
      { text: 'FAQ', href: '/faq' },
      { text: 'Error 404: Simple', href: '#' },
      { text: 'Error 404: Cover', href: '#' },
      { text: 'Career Page Minimal', href: '#' },
    ],
  },
  {
    title: 'Account',
    links: [
      { text: 'General Settings', href: '#' },
      { text: 'Security Settings', href: '#' },
      { text: 'Notifications Options', href: '#' },
      { text: 'Billing Options', href: '#' },
      { text: 'Sign up: Simple', href: '#' },
      { text: 'Sign up: Cover', href: '#' },
      { text: 'Sign in: Simple', href: '#' },
      { text: 'Sign in: Cover', href: '#' },
      { text: 'Password: Simple', href: '#' },
      { text: 'Password: Cover', href: '#' },
    ],
  },
  {
    title: 'Blog',
    links: [
      { text: 'Reach View', href: '#' },
      { text: 'Search', href: '#' },
      { text: 'Newsroom', href: '#' },
      { text: 'Article', href: '#' },
    ],
  },
  {
    title: 'Portfolio',
    links: [
      { text: 'Grid View', href: '#' },
      { text: 'Masonry', href: '#' },
      { text: 'Basic', href: '#' },
      { text: 'Parallax', href: '#' },
    ],
  },
];

// drawer control
const Header = ({darkMode, handleDarkModeToggle }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <header>
    <AppBar position="static" color='transparent' variant='dense' className='mb-2'>
      
      <Box className='flex justify-end items-center mt-2 mr-4.5'>
              <IconButton
                sx={{outline: 0.5, outlineColor: 'gray', borderRadius: 2, color: 'Primary' }}
                size="small"
                edge="start"
                color="inherit"
                aria-label="toggle dark mode"
                onClick={handleDarkModeToggle}
              >
                {darkMode ? <WbSunnyOutlinedIcon sx={{fontSize:18}} /> : <BedtimeOutlinedIcon sx={{fontSize:16}} />}
              </IconButton>
            </Box>
            <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          <img src={`https://assets.maccarianagency.com/the-front/logos/logo${ darkMode ? '-negative' : '' }.svg`} 
          className='w-[7rem]'
          width='100%' 
          height='100%' 
          alt="logo" />
        </Typography>

        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ outline: 0.25, outlineColor: 'gray', borderRadius: 2, color: 'Primary' }}
          onClick={handleDrawerOpen}
        >
          <MenuIcon color='primary' />
        </IconButton>
    <aside>
        <Drawer 
        anchor="left" 
        open={drawerOpen} 
        onClose={handleDrawerClose}>
          <Box sx={{ width: 280, backgroundColor: darkMode ? '#141827' : '#ffffff', height: '100%' }}>
            <Box sx={{ p: 2 }} className='min-h-[3.5rem]'>
            <a href="#" title="theFront">
                <img 
                className='max-w-[6rem]' 
                src={`https://assets.maccarianagency.com/the-front/logos/logo${ darkMode ? '-negative' : '' }.svg`}
                alt="theFront" />
              </a>
            </Box>

            <Box sx={{ p: 1, backgroundColor: darkMode ? '#141827' : '#ffffff' }}>
              {menuItems.map((menuItem, index) => (
                <Accordion key={index} 
                sx={{ backgroundColor: 'transparent','&:before':{height:'0px'} }} 
                elevation={0}>

                  <AccordionSummary expandIcon={<ExpandMoreIcon />} 
                    sx={{backgroundColor: "inherit"}}>
                    <Typography>{menuItem.title}</Typography>
                  </AccordionSummary>
                  
                  <AccordionDetails>
                    <Grid container spacing={1}>
                      {menuItem.links.map((link, linkIndex) => (
                        <Grid item xs={12} key={linkIndex}>
                          <Button fullWidth href={link.href}>{link.text}</Button>
                        </Grid>
                      ))}
                    </Grid>
                  </AccordionDetails>
                </Accordion>
              ))}
              <Box sx={{ p: 2 }}>
                <Button fullWidth variant="outlined" href="#" target="_blank">
                  Documentation
                </Button>
              </Box>
              <Box sx={{ px: 2 }}>
                <Button fullWidth variant="contained" href="#" target="_blank">
                  Purchase now
                </Button>
              </Box>
            </Box>
          </Box>
        </Drawer>
      </aside>
      </Toolbar>
    </AppBar>
    </header>
  );
};
Header.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  handleDarkModeToggle: PropTypes.func.isRequired,
};

export default Header;
