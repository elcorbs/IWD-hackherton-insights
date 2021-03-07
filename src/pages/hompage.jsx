import React, { useState } from "react"
import getCareers from "../gateways/get-careers";
import { Grid, TextField, List, ListItem, ListItemText, Typography, Button } from "@material-ui/core";
import "./styles.scss";
import { useTheme } from '@material-ui/core/styles';
import FrontPageWomen from "./../profilepics/women-base.png";
export default function HomePage() {

  return (
    <div>
      <CareerSearch />
      <ActionButtons />
    </div>
  )
}

function ActionButtons() {
  return (
    <Grid container style={{"paddingBottom": "100px"}}>
      <Grid item xs={3}><Button color="primary" variant="contained">Join our community</Button></Grid>
      <Grid item xs={3}><Button color="primary" variant="contained">Share Your Insights</Button></Grid>
      <Grid item xs={3}><Button color="primary" variant="contained">Events</Button></Grid>
      <Grid item xs={3}><Button color="primary" variant="contained">About Us</Button></Grid>
    </Grid>
  )
}

function NewsletterSignup() {
  return (
    <Grid container spacing={3} style={{ "margin": "50px 0" }}>
      <Grid item xs={4} />
      <Grid item xs={4}>
        <TextField id="standard-basic" label="Sign up for our Newsletter" fullWidth placeholder='email' />
      </Grid>
      <Grid item xs={4} />
    </Grid>
  )
}

function Event() {
  const background = useTheme().palette.primary.light;

  return (
    <Grid container spacing={3} style={{ "backgroundColor": background, "minHeight": "500px" }}>
      <Grid item xs={4} />
      <Grid item xs={4}>
        <Typography variant="h5" component="h2">
          Checkout our upcoming events and webinars
        </Typography>
      </Grid>
      <Grid item xs={4} />
    </Grid>
  )
}

function CareerSearch() {
  const [careers, setCareers] = useState([])
  const refreshCareersList = ({ target }) => {
    const career = target.value
    if (career.length === 0) {
      setCareers([])
    } else {
      setCareers(getCareers(career.toLowerCase()))
    }
  }

  return (
    <div className={"container"}>
      <Grid container spacing={3}>
        <Grid item xs={4} />
        <Grid item xs={4}>
          <TextField onChange={refreshCareersList} label="I'm interested in.." margin="normal" fullWidth />
        </Grid>
        <Grid item xs={4} />
      </Grid>
      <Grid container spacing={3} className="career-list-container">
      <img src={FrontPageWomen} style={{"opacity": `${careers.length === 0 ? "100%": "30%"}`}} className="career-list-image" alt="three-women" />
      <Grid item xs={4} />
        <Grid item xs={6} className="career-list">
          <List component="nav" aria-label="career options" className="career-list">
            {careers.map(({ displayName, route }) => {
              return (
                <ListItemLink href={`/career/${route}`} key={route}>
                  <ListItemText primary={displayName} style={{}} />
                </ListItemLink>
              )
            })}
          </List>
        </Grid>
      </Grid>
    </div>
  )
}
function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}