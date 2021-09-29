import React from 'react';
import {ThemeProvider} from 'styled-components'

import theme from './src/Components/global/styles/theme'
import { Dashboard } from './src/Components/screens/DashBoard';

 

export default function App() {
  return (
    <ThemeProvider theme={theme}>

      <Dashboard title = "Dashboard"/>
    </ThemeProvider>
  );
}
