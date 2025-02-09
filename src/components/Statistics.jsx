import { useEffect, useRef, useState } from 'react';
import { Box, Typography, Grid, Card, CardMedia } from '@mui/material';

const stats = [
  {
    value: 300,
    description: "300 + component compositions, which will help you to build any page easily."
  },
  {
    value: 45,
    description: "45 + landing and supported pages to Build a professional website."
  },
  {
    value: 99,
    description: "99% of our customers rated 5-star our themes over 5 years."
  }
];

// increase counter on user scroll
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

const Statistics = () => {
  const [visible, setVisible] = useState(false);
  const [displayValues, setDisplayValues] = useState(stats.map(() => 0));

  const handleIntersection = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setVisible(true);
    }
  };

  const targetRef = useIntersectionObserver(handleIntersection, { threshold: 0.01 });

  useEffect(() => {
    if (visible) {
      const duration = 2000; // duration in milliseconds
      const steps = 60; // number of steps to increment
      const interval = duration / steps;

      stats.forEach((stat, index) => {
        let currentStep = 0;
        const increment = stat.value / steps;

        const intervalId = setInterval(() => {
          currentStep += 1;
          setDisplayValues((prevValues) => {
            const newValues = [...prevValues];
            newValues[index] = Math.min(stat.value, Math.floor(currentStep * increment));
            return newValues;
          });

          if (currentStep >= steps) {
            clearInterval(intervalId);
          }
        }, interval);
      });
    }
  }, [visible]);

  return (
    <Box className="md:max-w-[77rem] mx-auto px-4.5 py-40">
      <Box ref={targetRef}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6} className="space-y-8">
            
            <Box>
              <Typography variant="h4" gutterBottom fontWeight='500'>
                The powerful and flexible theme for all kinds of businesses
              </Typography>
              <Typography variant="h6" fontWeight='400'>
                Whether you&apos;re creating a subscription service, an on-demand marketplace, an e-commerce store, or a portfolio showcase, theFront helps you create the best possible product for your users.
              </Typography>
            </Box>
            
            <Grid container spacing={2}>
              {stats.map((stat, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Typography variant="h4" gutterBottom color='primary' fontWeight='400'>
                    <span>{displayValues[index]}+</span>
                  </Typography>
                  <Typography variant="body1" fontWeight='300'>
                    {stat.description}
                  </Typography>
                </Grid>
              ))}
            </Grid>

          </Grid>

          <Grid item xs={12} md={6}>
            <Card sx={{ boxShadow: '0px 6px 12px 0 rgba(140, 152, 164, 0.4)' }}>
              <CardMedia
                className="max-h-[25.2rem]"
                component="img"
                width="100%"
                height="100%"
                image="https://assets.maccarianagency.com/backgrounds/img4.jpg"
                alt="success"
                sx={{ backgroundSize: 'cover', height: '100%' }}
                loading='lazy'
              />
            </Card>
          </Grid>
          
        </Grid>
      </Box>
    </Box>
  );
};

export default Statistics;
