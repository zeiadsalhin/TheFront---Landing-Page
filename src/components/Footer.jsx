import { Box, Typography, Grid, Divider, Button, Link } from '@mui/material';
import PropTypes from 'prop-types';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = ({darkMode}) => {
  return (
    <Box className="mt-12 mb-8">
      <Box className="my-20">
        <Typography variant="h4" align="center" fontWeight='500' gutterBottom style={{ '--Typography-textAlign': 'center' }}>
          Get started with theFront today
        </Typography>
        <Typography variant="h6" align="center" fontWeight='400' style={{ '--Typography-textAlign': 'center' }}>
          Build a beautiful, modern website with flexible, fully customizable, atomic MUI components.
        </Typography>
        <Box className="flex justify-center my-8 gap-4">
          <Button variant="contained" color="primary" size="large" href="#">
            View pages
          </Button>
          <Box className="MuiBox-root css-np4b2e">
            <Button variant="outlined" color="primary" size="large" href="#">
              Documentation
            </Button>
          </Box>
        </Box>
      </Box>

      <Divider />

      <Box className="md:max-w-[75rem] mx-auto">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Box className="flex md:flex-row flex-col gap-4 justify-between items-center mt-8">
              <Link href="/" title="theFront">
                <img className={`max-w-[5rem] ${darkMode ? 'invert-50 ' : undefined }`} src="https://assets.maccarianagency.com/the-front/logos/logo.svg" alt="theFront Logo" />
              </Link>
              <Box className="flex justify-center gap-4 my-auto">
                  <Link href="#" className="pt-1">
                    Home
                  </Link>
                  <Link href="#" className="pt-1">
                    Documentation
                  </Link>
                  <Button variant="outlined" color="primary" size="small" className="my-auto" href="#">
                    Purchase now
                  </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} className="text-center">
          <Typography variant="subtitle1" align="center" fontWeight='400' gutterBottom className="my-auto" >
          <Link href="https://github.com/zeiadsalhin" target="_blank" color="inherit">
          Developed by Alfa
                <GitHubIcon sx={{ verticalAlign: 'top', ml: 1 }} />
              </Link>
            </Typography>
            <Typography variant="subtitle2" align="center" fontWeight='400' gutterBottom style={{ '--Typography-textAlign': 'center' }}>
             Credits: © theFront. 2021, Maccarian. All rights reserved
            </Typography>
            <Typography variant="caption" align="center" fontWeight='300' style={{ '--Typography-textAlign': 'center' }}>
              When you visit or interact with our sites, services or tools, we or our authorised service providers may use cookies for storing information to help provide you with a better, faster and safer experience and for marketing purposes.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
Footer.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};

export default Footer;
