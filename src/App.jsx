import { useState, useEffect, Suspense, lazy } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const Header = lazy(() => import('./components/Header'));
const HeaderDesktop = lazy(() => import('./components/HeaderDesktop'));
const Fold = lazy(() => import('./components/Fold'));
const Text = lazy(() => import('./components/Text'));
const Statistics = lazy(() => import('./components/Statistics'));
const Grids = lazy(() => import('./components/Grids'));
const Footer = lazy(() => import('./components/Footer'));

function App() {

  // Dark Mode
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(userPrefersDark);
  }, []);

  useEffect(() => {
    // console.log(`Current mode: ${darkMode ? 'Dark' : 'Light'}`);
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  // define themes
  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      
      <div className="overflow-hidden">
        <div className="main">
          
          <div className="md:hidden">
            <Suspense>
              <Header theme={theme} darkMode={darkMode} handleDarkModeToggle={handleDarkModeToggle} />
            </Suspense>
          </div>

          <div className={`hiddenm relative w-full z-20 ${darkMode ? 'bg-[#121212]' : 'bg-[#ffffff]'}`}>
            <div className='md:max-w-[90rem] mx-auto'>
              <Suspense>
                <HeaderDesktop theme={theme} darkMode={darkMode} handleDarkModeToggle={handleDarkModeToggle} />
              </Suspense>
            </div>
          </div>

          <div className={` bg-gradient-to-b ${darkMode ? 'from-[#121212] to-[#141827]' : 'from-white to-gray-100'}`}>
            <Suspense>
              <Fold theme={theme} darkMode={darkMode} />
            </Suspense>
          </div>

          <div className={` min-h-[3000px] md:min-h-[2100px] bg-gradient-to-b ${darkMode ? 'from-[#121212] to-[#141827]' : 'from-white to-gray-100'}`}>
            <div className="min-h-[1400px] md:min-h-[800px]">
              <Suspense>
                <Text theme={theme} />
              </Suspense>
            </div>

            <div className="min-h-[1200px] md:min-h-[700px]">
              <Suspense>
                <Statistics theme={theme} />
              </Suspense>
            </div>

            <div className="min-h-[700px] md:min-h-[500px]">
              <Suspense>
                <Grids theme={theme} darkMode={darkMode} />
              </Suspense>
            </div>
          </div>

          <div className=" px-4.5">
            <Suspense>
              <Footer theme={theme} darkMode={darkMode} />
            </Suspense>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;