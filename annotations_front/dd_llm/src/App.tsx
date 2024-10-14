import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@fluentui/react/lib/Theme';
import { NavBasic } from './componets/navigatorPane';
import { Stack } from '@fluentui/react';

import LandingPage from './pages/landing';
import Profile from './pages/profile';
import History from './pages/annotation_history'
import AnnotationPage from './pages/annotation';
import Footer from './componets/footer';


const lightGreen = createTheme({
  palette: {
    "themePrimary": "#78A083",
    "themeLighterAlt": "#f9fbf9",
    "themeLighter": "#e6f0e9",
    "themeLight": "#d2e3d7",
    "themeTertiary": "#a9c6b1",
    "themeSecondary": "#86ac91",
    "themeDarkAlt": "#6c9177",
    "themeDark": "#5c7a64",
    "themeDarker": "#435a4a",
    "neutralLighterAlt": "#f3f3f3",
    "neutralLighter": "#efefef",
    "neutralLight": "#e5e5e5",
    "neutralQuaternaryAlt": "#d6d6d6",
    "neutralQuaternary": "#cccccc",
    "neutralTertiaryAlt": "#c4c4c4",
    "neutralTertiary": "#b4c3cc",
    "neutralSecondary": "#758b98",
    "neutralPrimaryAlt": "#455b69",
    "neutralPrimary": "#344955",
    "neutralDark": "#273740",
    "black": "#1d282f",
    "white": "#FBFBFB"
  }});
//#region OLDCODE
// import axios from 'axios';
// import './CreateAnnotator.css'; // Import CSS file for styles for annotator page
// import './AnnotationPage.css';  // Import CSS file for styles for annotation page
// import pic_unimi from './assets/unimi.png'
// import pic_event from './assets/Evento6settMUSA-removebg-preview.png'


// const App = () => {
//   const [page, setPage] = useState(1);
//   const [randomAnnotation, setRandomAnnotation] = useState({});

//   useEffect(() => {
//     getRandomAnnotation();
//   }, []);

//   const getRandomAnnotation = async () => {
//     try {
//       const response = await axios.get('http://localhost:8000/annotations/random');
//       setRandomAnnotation(response.data);
//     } catch (error) {
//       console.error('Error fetching random annotation:', error);
//     }
//   };

//   const handleNext = () => {
//     setPage(2);
//     getRandomAnnotation();
//   };

//   const handleBack = () => {
//     setPage(1);
//   };

//   return (
//     <></>
//   );
// };

// export default App;
//#endregion


export const App = () => { 

  return ( 
    <ThemeProvider theme={lightGreen}> 
      <BrowserRouter>
          <Stack horizontal>
            <Stack.Item style={{
              width: '250px',
              height: '100%',
              position: 'fixed'
            }}>

              <NavBasic />
            </Stack.Item>
            <Stack.Item style={{
              marginLeft: '250px',
              width: '80%',
              padding: '10px'
            }}>
              <Routes >
                <Route path='/' element={<LandingPage />} />
                <Route path='/annotation' element={<AnnotationPage />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/history' element={<History />} />
              </Routes>
            </Stack.Item>
            <Footer/>
          </Stack>
      </BrowserRouter>
    </ThemeProvider> 
  );
};