import React, { useState, useEffect } from "react";
import "./styles.scss";
import { Grid, Card, CardContent, Typography, CardActions, Button, Divider, Modal, TextField } from "@material-ui/core";
import getCareer from "../gateways/get-career-info";
import { useHistory } from "react-router-dom";
import getProfessionals from "../gateways/get-career-professionals";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import image1 from "./../profilepics/maria.png";
import image2 from "./../profilepics/emma.png";
import image3 from "./../profilepics/rycole.png";
import image4 from "./../profilepics/angelica.png";


export default function CareerPage(props) {
  const career = props.match.params.careerName;
  const [details, setDetails] = useState({})
  useEffect(() => {
    setDetails(getCareer(career))
  }, [career])
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={"container"}>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby={`Send a message`}
        aria-describedby="simple-modal-description"
      >
        <div className="contact-form-container">
          <FormRow>
            <TextField
              id="standard-basic"
              label="Name"
              fullWidth
            />
          </FormRow>
          <FormRow>
            <TextField
              id="standard-basic"
              label="Email"
              fullWidth
            />
          </FormRow>
          <FormRow>
            <TextField
              id="standard-basic"
              label="Introduce yourself"
              fullWidth
              multiline
              rows={4}
              placeholder={`Tell them a bit about yourself`}
              InputLabelProps={{
                shrink: true,
              }} />
          </FormRow>
          <FormRow>
            <TextField
              id="standard-basic"
              label="Your Message"
              fullWidth
              multiline
              rows={4}
              placeholder="Ask away.. Do you have a question you would like answered or perhaps you need some more general advice?"
              InputLabelProps={{
                shrink: true,
              }} />
          </FormRow>
          <FormRow>
            <Button color="primary" onClick={handleClose}>Send</Button>
          </FormRow>
        </div>
      </Modal>
      <CareerHeader details={details} career={career} />
      <InfoCards details={details} />
      <Divider variant="middle" style={{ "margin": "20px 0" }} />
      <Grid container spacing={3}>
        <Grid item xs={8} className="career-header">
          <Typography variant="h5" component="h2">
            Meet the professionals
          </Typography>
        </Grid>
      </Grid>
      <ProfileCards career={career} openContantForm={handleOpen} />
      <Divider variant="middle" style={{ "margin": "20px 0" }} />
      <Grid container spacing={3}>
        <Grid item xs={8} className="career-header">
          <Typography variant="h5" component="h2">
            Testimonals
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}

const CareerHeader = ({ details, career }) => {
  const history = useHistory();

  const routeChange = () => {
    let path = `/career/${career}/insights/new`;
    history.push(path);
  }

  return (<Grid container spacing={3}>
    <Grid item xs={8} className="career-header">
      <Typography variant="h3" component="h2">
        {details.displayName}
      </Typography>
    </Grid>
    <Grid item xs={4}>
      Are you a {details.displayName}? <Button color="primary" variant="contained" onClick={routeChange} >Submit your insights</Button>
    </Grid>
  </Grid>
  )
}

const InfoCards = ({ details }) => {
  console.log(details)
  return (<Grid container spacing={3}>
    <Grid item xs={3}>
      <OverviewCard details={details} />
    </Grid>
    <Grid item xs={3}>
      {details.skills && <SkillsCard skills={details.skills} />}
    </Grid>
  </Grid>
  )
}

const ProfileCards = ({ career, openContantForm }) => {
  const [profiles, setProfiles] = useState([])
  console.log(profiles)
  useEffect(() => {
    setProfiles(getProfessionals(career))
  }, [career])

  return (
    <Grid container spacing={3}>
      {profiles.map((profile, index) => <ProfileCard profile={profile} index={index}  openContantForm={openContantForm}/>)}
    </Grid>
  )
}

const ProfileCard = ({ profile, index, openContantForm }) => {
  const profilcPics = [
    image1, image2, image3, image4
  ]
  return (
      <Grid item xs={3}>
        <Card className="root">
          <CardContent>
            <Typography color="body2" gutterBottom variant="h5">{profile.name}</Typography>
            <Typography variant="textSecondary" component="p">{profile.location}</Typography>
            <Typography variant="textSecondary" component="p">{profile.education}</Typography>
            <Typography color="textSecondary" variant="body2" component="p">{profile.coupleOfWords}</Typography>
            <img src={profilcPics[index]} alt={`${profile.name}'s profile`} className="profile-picture" />
            {/* <Typography variant="body2" component="p" style={{ "textAlign": "left" }}>Most reqrdin</Typography>
          <Typography variant="body2" component="p" style={{ "textAlign": "left" }}>{profile.mostRewardingAspect}</Typography>
          <Typography variant="body2" component="p" style={{ "textAlign": "left" }}>{profile.biggestChallenge}</Typography> */}

            <div className="social-media-icons" >
              <LinkedInIcon /> <TwitterIcon />
            </div>
            <Button color="primary" className="ask-for-help-button" onClick={openContantForm}>Connect with {profile.name}</Button>
          </CardContent>
        </Card>
      </Grid>

  )
}

const FormRow = (props) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={3} />
      <Grid item xs={6}>
        <div style={{ "textAlign": "left" }}>
          {props.children}

        </div>
      </Grid>
      <Grid item xs={3} />
    </Grid>
  )
}

const OverviewCard = ({ details }) => {
  return (
    <Card className="root" >
      <CardContent style={{ "textAlign": "left" }}>
        <Typography color="textSecondary" gutterBottom>
          On average people earn {details.averagePayAfter3Years} after 3 years
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          35% of people who work as this professions are women
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          On average people train for {details.averageYearsOfStudy} years to be a {details.displayName}
        </Typography>
      </CardContent>
    </Card>
  )
}

const SkillsCard = ({ skills }) => {
  return (
    <Card className="root" >
      <CardContent style={{ "textAlign": "left" }}>
        {Object.entries(skills).map(([skill, percentage]) => (
          <Typography variant="body2" component="p" key={skill}>
            {`${percentage}% rated ${skill} in their top 5 skills`}
          </Typography>
        ))}
      </CardContent>
    </Card>
  )
}

const CardExample = ({ details }) => {
  const bull = <span className="bullet">•</span>;
  return (
    <Card className="root" >
      <CardContent>
        <Typography className="title" color="textSecondary" gutterBottom>
          On average people earn {details.averagePayAfter3Years} after 3 year
        </Typography>
        <Typography variant="h5" component="h2">
          benev{bull}o{bull}lent
        </Typography>
        <Typography className="pos" color="textSecondary">
          adjective
    </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
      <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  )
}