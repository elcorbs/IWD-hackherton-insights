import './App.css';
import HomePage from './pages/hompage';
import React from "react";
import {
  Switch,
  Route,
} from "react-router-dom";
import CareerPage from './pages/career-page';
import InsightsForm from "./pages/insights-form";
import { Typography } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#FBE9E5",
      main: "#F9B8B0",
      dark: "#db9187"
    },
    secondary: {
      light: "#C3CdE8",
      main: "#7D96CD",
      dark: "#7D96CD",
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
    <header style={{"padding": "0 50px", "height": "auto", "position": "sticky", "top": "0", "background": "white"}}>
      <div style={{"line-height": "64px", "textAlign": "left"}}>
      <Typography variant="h5" component="h2" style={{"lineHeight": "64px"}}>
        GROW<span style={{"color": "#F9B8B0"}}>HER</span>KNOWLEDGE
      </Typography>
      </div>
    </header>
    <body style={{"backgroundColor": "#F6F6F6"}}>
    <Switch>
        <Route path="/career/:careerName/insights/new" component={InsightsForm} />
        <Route path="/career/:careerName" component={CareerPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </body>
    </div>
    </ThemeProvider>
  );
}

export default App;
