import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, Grid, Paper, Avatar } from '@mui/material';

const items = [
  {
    title: "Themeable",
    description: "Customize any part of our components to match your design needs.",
    icon: (
      <svg height="24" width="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
      </svg>
    )
  },
  {
    title: "Light and dark UI",
    description: "Optimized for multiple color modes. Use light or dark, your choice.",
    icon: (
      <svg height="24" width="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
      </svg>
    )
  },
  {
    title: "Composable",
    description: "Designed with composition in mind. Compose new components with ease.",
    icon: (
      <svg height="24" width="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"></path>
      </svg>
    )
  },
  {
    title: "Developer experience",
    description: "Guaranteed to boost your productivity when building your app or website.",
    icon: (
      <svg height="24" width="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
      </svg>
    )
  },
  {
    title: "Continuous updates",
    description: "We continually deploy improvements and new updates to theFront.",
    icon: (
      <svg height="24" width="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
      </svg>
    )
  },
  {
    title: "Free support",
    description: "6 months of free technical support to help you build your website faster.",
    icon: (
      <svg height="24" width="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
      </svg>
    )
  }
];

// reveal on user scroll
const useIntersectionObserver = (callback, options) => {
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);
    const target = targetRef.current;

    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, [callback, options]);

  return targetRef;
};

const Grids = ({darkMode}) => {
  const [visible, setVisible] = useState(false);

  const handleIntersection = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setVisible(true);
    }
  };

  const targetRef = useIntersectionObserver(handleIntersection, { threshold: 0.1 });

  useEffect(() => {
    const reveal = () => {
      const elements = document.querySelectorAll(".reveal");
      elements.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
          element.classList.add("active");
        }
      });
    };

    if (visible) {
      reveal();
      window.addEventListener("scroll", reveal);
    }

    return () => {
      window.removeEventListener("scroll", reveal);
    };
  }, [visible]);

  return (
    <>
    <Box className="md:max-w-[77rem] md:min-h-[34rem]  px-4.5 mx-auto" ref={targetRef}>
      <Grid container spacing={4}>
        {items.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} className="reveal">
            <Paper
              className="md:max-w-[30rem] mx-auto p-8 "
              data-aos="fade-up"
              data-aos-delay={index * 100}
              style={{ '--Paper-shadow': '0 3px 6px 0 rgba(140, 152, 164, 0.25)' }}
            >
              <Box className="space-y-4 ">
                <Avatar>
                  {item.icon}
                </Avatar>
                <Typography variant="h6" gutterBottom>
                  {item.title}
                </Typography>
                <Typography variant="body1">
                  {item.description}
                </Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
    <svg className="mb-10a" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1920 100.1">
        <path fill={`${darkMode ? '#121212' : '#ffffff'}`} d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"></path>
      </svg>        
        </>
  );
};
Grids.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};

export default Grids;
