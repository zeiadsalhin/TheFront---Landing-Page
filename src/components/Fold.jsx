import { Box, Typography, Button, ImageList, ImageListItem } from '@mui/material';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@mui/material/styles';

const imageSrcs = [
  "https://assets.maccarianagency.com/screenshots/the-front/img1.png",
  "https://assets.maccarianagency.com/screenshots/the-front/img4.png",
  "https://assets.maccarianagency.com/screenshots/the-front/img13.png",
  "https://assets.maccarianagency.com/screenshots/the-front/img10.png",
  "https://assets.maccarianagency.com/screenshots/the-front/img7.png",
  "https://assets.maccarianagency.com/screenshots/the-front/img6.png",
  "https://assets.maccarianagency.com/screenshots/the-front/img24.png",
  "https://assets.maccarianagency.com/screenshots/the-front/img17.png",
  "https://assets.maccarianagency.com/screenshots/the-front/img12.png"
];

const Fold = ({ theme, darkMode}) => {
  return (
        <ThemeProvider theme={theme}>
    
    <Box>
      <Box className="flex max-w-[80rem] max-h-fit mx-auto relative">
        <Box className="md:my-20 my-10 md:min-h-[32rem]">
          <Box className="main flex">
            <Box className="text xl:max-w-[40rem] md:max-w-[34rem] px-5 md:p-10 z-20">
              <Typography variant="h2" sx={{fontSize: {xs: 48, sm: 48, md: 60}}} fontWeight='fontWeightMedium' gutterBottom className="font-black">
                Turn your ideas<br />into <span className="text-blue-500 underline underline-offset-4 decoration-yellow-300">success.</span>
              </Typography>
              <Typography variant="h6" fontWeight='fontWeightLight' color='gray'>
                theFront will make your product look modern and professional while saving you precious time.
              </Typography>
              <Box className="flex md:flex-row flex-col gap-4 mt-10">
                <Button 
                  disableRipple
                  variant="contained"
                  color="primary"
                  size="large"
                  className="w-full"
                  href="#"
                >
                  View pages
                </Button>
                <Box>
                  <Button
                    variant="outlined"
                    color="primary"
                    size="large"
                    className="w-full"
                    href="#"
                  >
                    Documentation
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>   
        </Box>
        <Box className="hiddenm rotate-[calc(22deg*-1)] absolute z-10 -top-70 right-0 transform translate-x-2/3 lg:translate-x-1/3 max-w-[50rem] lg:max-w-[50rem]">
              <ImageList variant="woven" cols={3} gap={10}>
                {imageSrcs.map((src, index) => (
                  <ImageListItem key={index}>
                    <img
                      className={`rounded-lg shadow-lg ${darkMode ? 'invert' : undefined}`}
                      width="100%"
                      height="100%"
                      src={src}
                      alt={`img${index + 1}`}
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </Box>
      </Box>
      <Box className='mb-10'>
      <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1920 100.1">
        <path fill={`${darkMode ? '#121212' : '#ffffff'}`} d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"></path>
      </svg>
      </Box>
    </Box>
    </ThemeProvider>
  );
};
Fold.propTypes = {
  theme: PropTypes.object.isRequired,
  darkMode: PropTypes.bool.isRequired,
};

export default Fold;
