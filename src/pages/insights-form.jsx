import React from "react";
import { Grid, TextField, Button, Checkbox, FormControlLabel, Divider, Slider, Typography } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab"
import getCareers from "../gateways/get-careers";

export default function InsightsForm() {
  return (
    <div>
      <FormRow>
        <TextField id="standard-basic" label="Name" fullWidth />
      </FormRow>
      <FormRow>
        <TextField id="standard-basic" label="Location" fullWidth />
      </FormRow>
      <FormRow>
        <TextField id="standard-basic" label="Job description" fullWidth />
      </FormRow>
      <FormRow>
      <Autocomplete
        id="combo-box-demo"
        options={getCareers("").map(c => c.displayName)}
        getOptionLabel={(option) => option}
        style={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Career" fullWidth />}
      />
      </FormRow>
      <FormRow>

      <Typography id="discrete-slider-custom" gutterBottom>
      Experience Level
      </Typography>
        <Slider
          defaultValue={0}
          marks={[
            {value: 0, label: "Beginner"},
            {value: 24, label: "Mid-Level"},
            {value: 48, label: "Senior"},
            {value: 72, label: "Associate"},
            {value: 100, label: "Director"},

          ]}
          step={null}
        />
      </FormRow>
      <Divider variant="middle" style={{ "margin": "20px 0" }} />
      <FormRow>
        <TextField
          id="standard-basic"
          label="Background"
          fullWidth
          multiline
          rows={4}
          helperText="Add any relevent experience, even if not related to your indutry"
          variant="outlined"
          />
      </FormRow>
      <FormRow>
        <TextField
          id="standard-basic"
          label="Couple of words about you"
          fullWidth
          multiline
          rows={2}
          helperText="We want to get to know you - Share your story"
          variant="outlined"
          />
      </FormRow>
      <FormRow>
        <TextField
          id="standard-basic"
          label="Working hours & Flexibility"
          fullWidth
          multiline
          rows={2}
          helperText="Is unpaid overtime common? Can you work remotely?"
          variant="outlined"
           />
      </FormRow>

      <Divider variant="middle" style={{ "margin": "20px 0" }} />
{/* 

      <FormRow>
        Key soft skills
      </FormRow>
      <FormRow>
        Key hard skills
      </FormRow>
      <FormRow>
        Key Values
      </FormRow>
      <FormRow>
        Key attitudes
      </FormRow>
      <FormRow>
        Key behaviours
      </FormRow>
      <FormRow>
        Related interests
      </FormRow>
 */}

      <Divider variant="middle" style={{ "margin": "20px 0" }} />

      <FormRow>
        <TextField
          id="standard-basic"
          label="Your industry insight"
          fullWidth
          multiline
          rows={4}
          helperText="What would you want to know before you chose this career"
          variant="outlined"
        />
      </FormRow>

      <FormRow>
        <TextField
          id="standard-basic"
          label="Biggest challenges for you"
          fullWidth
          multiline
          rows={4}
          helperText="What do you struggle with?"
          variant="outlined"
          />
      </FormRow>

      <FormRow>
        <TextField
          id="standard-basic"
          label="Most rewarding aspects for you"
          fullWidth
          multiline
          rows={4}
          helperText="What do you enjoy about you job?"
          variant="outlined"
         />
      </FormRow>
      <FormRow>
        <TextField
          id="standard-basic"
          label="How did you know this was your dream career?"
          fullWidth
          multiline
          rows={4}
          helperText="Have you ever considered changing careers?"
          variant="outlined"
        />
      </FormRow>
      <FormRow>
        <TextField
          id="standard-basic"
          label="Employers you would recommend"
          fullWidth
          multiline
          rows={4}
          helperText="Share the places worth applying for and explain why!"
          variant="outlined"
        />
      </FormRow>
      <FormRow>
        <TextField
          id="standard-basic"
          label="Biggest challenges for you"
          fullWidth
          multiline
          rows={4}
          helperText="What do you struggle with"
          variant="outlined"
        />
      </FormRow>
      <FormRow>
        <TextField
          id="standard-basic"
          label="What does your day to day look like?"
          fullWidth
          multiline
          rows={4}
          helperText="Describe a typical day for you. What sort of task will you be doing?"
          variant="outlined"
        />
      </FormRow>
      <FormRow>
        <TextField
          id="standard-basic"
          label="Anything else you would like to add"
          fullWidth
          multiline
          rows={4}
          helperText="Did we miss anything?"
          variant="outlined"
        />
      </FormRow>
      <FormRow>

      </FormRow>
      <FormRow>
        <div style={{ "textAlign": "left" }}>
          How can people connect with you?
        </div>
      </FormRow>
      <FormRow>
        <TextField id="standard-basic" label="Linkedin" fullWidth />
      </FormRow>
      <FormRow>
        <TextField id="standard-basic" label="Twitter" fullWidth />
      </FormRow>
      <FormRow>
        <FormControlLabel
          control={<Checkbox name="contactable" />}
          label="Are you happy for people to connect with you?"
        />
      </FormRow>
      <FormRow>
        <Button color="primary" variant="contained">Submit your story</Button>
      </FormRow>
    </div>
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
