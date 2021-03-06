import React, { useState } from "react"
import getCareers from "../gateways/get-careers";
import { Grid, TextField, List, ListItem, ListItemText } from "@material-ui/core";
import "./styles.scss";

export default function HomePage() {


  return (
    <div>
      <CareerSearch />
      <NewsletterSignup />
      <Event />
    </div>
  )
}

function NewsletterSignup() {
  return (
    <div>
      Sign up for your newsletter here
    </div>
  )
}

function Event() {
  return (
    <div>
      Check out our
    </div>
  )
}

function CareerSearch() {
  const [careers, setCareers] = useState([])
  const refreshCareersList = ({ target }) => {
    const career = target.value
    setCareers(getCareers(career.toLowerCase()))
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
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <List component="nav" aria-label="career options" className="career-list">
            {careers.map(({ displayName, route }) => {
              return (
                <ListItemLink href={`/career/${route}`} key={route}>
                  <ListItemText primary={displayName} />
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