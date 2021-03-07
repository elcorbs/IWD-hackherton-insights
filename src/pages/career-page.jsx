import React, { useState, useEffect } from "react";
import "./styles.scss";
import { Grid, Card, CardContent, Typography, CardActions, Button, Divider, Modal, TextField, Select, MenuItem, Link } from "@material-ui/core";
import LanguageIcon from '@material-ui/icons/Language';
import getCareer from "../gateways/get-career-info";
import { useHistory } from "react-router-dom";
import getProfessionals from "../gateways/get-career-professionals";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import image1 from "./../profilepics/maria.png";
import image2 from "./../profilepics/emma.png";
import image3 from "./../profilepics/rycole.png";
import image4 from "./../profilepics/angelica.png";
import headerimage from "./../profilepics/career-page-image.png";
import SalaryGraph from "./../profilepics/salary-bar-graph.png";
import StarIcon from '@material-ui/icons/Star';
import { useTheme } from '@material-ui/core/styles';
import Map from "./../profilepics/global-map.png";
import Degrees from "./../profilepics/degrees.png";
import Skills from "./../profilepics/skills.png";
import Test1 from "./../profilepics/testimonal1.png";
import Test2 from "./../profilepics/testimonal2.png";
import Test3 from "./../profilepics/testimonal3.png";
import Test4 from "./../profilepics/testimonal4.png";

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

  if (details === {}) {
    return (
      <div className={"container"} />
    )
  }

  return (
    <div className={"container"}>
      {open && <ContactFormModal handleClose={handleClose} />}
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
        <Grid item xs={12} className="career-header">
          <Typography variant="h5" component="h2">
            Our Stories
          </Typography>
          <Testimonials />
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
    <Grid item xs={2}>
      <img src={headerimage} style={{"height": "100%"}} alt="woman-sitting" />
    </Grid>
    <Grid item xs={6} className="career-header">
      <Grid container spacing={3}>
        <Grid item xs={8} className="career-header" style={{ "textAlign": "left" }}>
          <Typography variant="h2" component="h2">
            {details.displayName}
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={6} className="career-header">
              <Typography variant="body2" component="p">{details.numberOfContributors} {details.displayName}'s contributed</Typography>
              <Typography variant="body2" component="p">{details.numberOfVisitors} Visitors</Typography>
            </Grid>
            <Grid item xs={4} className="career-header">
              {details.averageYearsOfExperience &&
                <Typography variant="body2" component="p">{details.averageYearsOfExperience[0]}-{details.averageYearsOfExperience[1]} Years of experience</Typography>
              }
              <LanguageIcon style={{ fontSize: 16 }} />&nbsp;<Select
                defaultValue={"global"}
                displayEmpty
                inputProps={{ 'aria-label': 'Select area' }}
              >
                <MenuItem value="global"><Typography variant="body2" component="p">Global</Typography></MenuItem>
                <MenuItem value="europe"><Typography variant="body2" component="p">Europe</Typography></MenuItem>
                <MenuItem value="asia"><Typography variant="body2" component="p">Asia</Typography></MenuItem>
                <MenuItem value="africa"><Typography variant="body2" component="p">Africa</Typography></MenuItem>
                <MenuItem value="na"><Typography variant="body2" component="p">North America</Typography></MenuItem>
                <MenuItem value="sa"><Typography variant="body2" component="p">South America</Typography></MenuItem>
                <MenuItem value="au"><Typography variant="body2" component="p">Australasia</Typography></MenuItem>
              </Select>
            </Grid>

          </Grid>
        </Grid>
      </Grid>
    </Grid>
    <Grid item xs={4}>
      <Button variant="contained" onClick={routeChange} className="share-insights-button" >Are you a {details.displayName}? &nbsp; <strong>Submit your insights here!</strong></Button>
    </Grid>
  </Grid>
  )
}

const InfoCards = ({ details }) => {
  console.log(details)
  return (<Grid container spacing={3}>
    <Grid item xs={6}>
      <OverviewCard details={details} />
    </Grid>
    <Grid item xs={6}>
      <SalaryCard details={details} />
    </Grid>
    <Grid item xs={6}>
      <EducationCard details={details} />
    </Grid>
    <Grid item xs={6}>
      <LocationCard />
    </Grid>
    <Grid item xs={6}>
      <SoftSkillsCard details={details} />
    </Grid>
    <Grid item xs={6}>
      <HardSkillsCard details={details} />
    </Grid>
  </Grid>
  )
}

const Testimonials = () => {
  return (
    <Grid container spacing={3} style={{"background": "white", "width": "100%"}}>
      <Grid item xs={3}><img className="test-image" src={Test1} /></Grid>
      <Grid item xs={3}><img className="test-image" src={Test2} /></Grid>
      <Grid item xs={3}><img className="test-image" src={Test3} /></Grid>
      <Grid item xs={3}><img className="test-image" src={Test4} /></Grid>
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
    <Grid container spacing={3} style={{"background": "white"}}>
      {profiles.map((profile, index) => <ProfileCard profile={profile} index={index} openContantForm={openContantForm} />)}
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
          <Typography gutterBottom variant="h5">{profile.name}</Typography>
          <Typography color="textSecondary" component="p">{profile.location}</Typography>
          <Typography color="textSecondary" component="p">{profile.education}</Typography>
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
  const iconColor = useTheme().palette.primary.main;

  if (!details.descriptionLines) return <div />;
  return (
    <Card className="root" className="info-card">
      <Typography variant="h5" component="h2" className="card-header">What we do</Typography>
      <div style={{ "textAlign": "right", "paddingRight": "5px" }}><Typography component="span" variant="body2" style={{ "textAlign": "right" }}> <StarIcon style={{ color: iconColor }} />{details.votes} votes</Typography></div>
      <CardContent style={{ "textAlign": "left" }}>

        {details.descriptionLines.map(line => (
          <Typography variant="body2" gutterBottom>
            {line}
          </Typography>
        ))}
        <Typography style={{ "textAlign": "right", "color": iconColor }} >
          <Link href="#" variant="body2">
            see all answers
          </Link>
        </Typography>
      </CardContent>
    </Card>
  )
}

const LocationCard = () => {
  return (
    <Card className="root" className="info-card">
      <Typography variant="h5" component="h2" className="card-header">Our favourite locations</Typography>
      <CardContent style={{ "textAlign": "left" }}>
        <img src={Map} className="global-map" />
      </CardContent>
    </Card>
  )
}

const SoftSkillsCard = ({details}) => {
  const color = useTheme().palette.primary.light;

  if (!details.softSkills) return <div />;
  console.log(details)
  return (
    <Card className="root" className="info-card">
      <Typography variant="h5" component="h2" className="card-header">Our Soft Skills</Typography>
      <CardContent style={{ "textAlign": "left" }}>
        <Grid container spacing={3}>
          {details.softSkills.map(skill => (
            <Grid item xs={4}>
              <Typography className="skill-box" style={{"backgroundColor": color }}>{skill}</Typography>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  )
}

const HardSkillsCard = () => {
  return (
    <Card className="root" className="info-card">
      <Typography variant="h5" component="h2" className="card-header">Our Hard Skills</Typography>
      <CardContent style={{ "textAlign": "center" }}>
        <img src={Skills} alt="skills bubble graph" style={{ "maxWidth": "100%" }} />
      </CardContent>
    </Card>
  )
}

const SalaryCard = ({ details }) => {
  return (
    <Card className="root" className="info-card">
      <Typography variant="h5" component="h2" className="card-header">How much do we earn</Typography>
      <CardContent style={{ "textAlign": "left" }}>
        <div style={{ "textAlign": "right" }}>
          <Select
            defaultValue={"usd"}
            displayEmpty
            inputProps={{ 'aria-label': 'Select area' }}
          >
            <MenuItem value="usd"><Typography variant="body2" component="p">$</Typography></MenuItem>
            <MenuItem value="euro"><Typography variant="body2" component="p">€</Typography></MenuItem>
            <MenuItem value="gbp"><Typography variant="body2" component="p">£</Typography></MenuItem>
          </Select>
          <Select
            defaultValue={""}
            displayEmpty
            inputProps={{ 'aria-label': 'Select area' }}
            style={{ "marginLeft": "20px" }}
          >
            <MenuItem value=""><Typography variant="body2" component="p">Year</Typography></MenuItem>
            <MenuItem value="2019"><Typography variant="body2" component="p">2019</Typography></MenuItem>
            <MenuItem value="2018"><Typography variant="body2" component="p">2018</Typography></MenuItem>
            <MenuItem value="2017"><Typography variant="body2" component="p">2017</Typography></MenuItem>
          </Select>
        </div>
        <div>
          <img src={SalaryGraph} alt="salary-graph" style={{ "maxWidth": "100%" }} />
        </div>
      </CardContent>
    </Card>
  )
}

const EducationCard = ({ details }) => {
  return (
    <Card className="root" className="info-card">
      <Typography variant="h5" component="h2" className="card-header">Our education background</Typography>
      <CardContent style={{ "textAlign": "center" }}>
        <img src={Degrees} alt="degrees distribution graph" />
        <Typography variant="body2" component="p" style={{ "textAlign": "center" }}>
          45% mathematics <br />
                25% statistics <br />
                15% computer science <br />
                10% management information systems <br />
                5% economics
            </Typography>
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

const ContactFormModal = ({ handleClose }) => {
  return (
    <Modal
      open={true}
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
  )
}