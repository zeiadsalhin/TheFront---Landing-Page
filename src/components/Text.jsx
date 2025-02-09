import { Box, Typography, Grid, Avatar } from '@mui/material';

const items = [
    {
      title: "Built for developers",
      description: "theFront is built to make your life easier. Variables, build tooling, documentation, and reusable components.",
      icon: (
        <svg height="24" width="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"></path>
        </svg>
      )
    },
    {
      title: "Designed to be modern",
      description: "Designed with the latest design trends in mind. theFront feels modern, minimal, and beautiful.",
      icon: (
        <svg height="24" width="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
        </svg>
      )
    },
    {
      title: "Documentation for everything",
      description: "We've written extensive documentation for components and tools, so you never have to reverse engineer anything.",
      icon: (
        <svg height="24" width="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
        </svg>
      )
    }
  ];

const Text = () => {
  return (
    <Box>
      <Box className="md:max-w-[79rem] mx-auto min-h-fit px-4.5">
        <Box>
          <Box>
            
            <Box>
              <Typography variant="h4" align="center" fontWeight='fontWeightMedium' gutterBottom>
                Build accessible React apps with speed
              </Typography>
              <Typography variant="h6" align="center" fontWeight='300' gutterBottom>
                Build a beautiful, modern website with flexible, fully customizable, atomic MUI components.
              </Typography>
            </Box>
          
          </Box>

          <Grid container spacing={4}>
            {items.map((item, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Box>
                  <Box>
                    <Avatar className="mx-auto items-center justify-center my-5"  sx={{ width: 56, height: 56, backgroundColor: 'rgba(33, 150, 243, 0.1)', color: 'rgb(33, 150, 243)' }}>
                      {item.icon}
                    </Avatar>
                    <Typography variant="h6" align="center" gutterBottom>
                      {item.title}
                    </Typography>
                    <Typography variant="body1" align="center" fontWeight='300'>
                      {item.description}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>

        </Box>
        <Box className="md:max-w-[35rem] mx-auto mt-30">
            <Box className="space-y-8">
              <Box>
                
                <Box>
                  <Typography variant="h4" align="center" fontWeight='500' gutterBottom>
                    Build tools and full documentation
                  </Typography>
                  <Typography variant="h6" align="center" fontWeight='400'>
                    Components, plugins, and build tools are all thoroughly documented with live examples and markup for easier use and customization.
                  </Typography>
                </Box>
              
              </Box>
              
              <Box sx={{ display: 'block', overflowX: 'auto', padding: '0.5em', background: 'rgb(30, 30, 30)', color: 'rgb(220, 220, 220)' }}>
                <pre>
                  <code className="language-javascript" style={{ whiteSpace: 'pre' }}>
                    &gt; $ yarn install
                    <br />
                    <span style={{ color: 'rgb(87, 166, 74)', fontStyle: 'italic' }}>{'// Or'}</span>
                    <br />
                    &gt; $ npm install
                    <br />
                    <span style={{ color: 'rgb(87, 166, 74)', fontStyle: 'italic' }}>{'// Everything installed!'}</span>
                    <br />
                    <br />
                    &gt; $ yarn start
                    <br />
                    <span style={{ color: 'rgb(87, 166, 74)', fontStyle: 'italic' }}>{'// Or'}</span>
                    <br />
                    &gt; $ npm run start
                    <br />
                    <span style={{ color: 'rgb(87, 166, 74)', fontStyle: 'italic' }}>{'// LiveReload started. Opening localhost:3000'}</span>
                  </code>
                </pre>
              </Box>
           
            </Box>
          </Box>
        
      </Box>
    </Box>
  );
};

export default Text;