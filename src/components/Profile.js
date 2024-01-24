// src/Profile.js
import React, { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import { IconButton, Container, Avatar, Typography, Button, Paper, Grid, TextField, Tabs, Tab, Box } from '@mui/material';
import axios from 'axios';

  function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

const Profile = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        street: '',
        postalCode: '',
        country: '',
        city: '',
        province: '',
      });
    const [formDataUpdate, setFormDataUpdate] = useState({
        id: '001Au00000PgjC1IAJ',
        name: 'LF Kaf Com',
        email: '',
        phone: '',
        street: '123 Main St',
        postalCode: '94104',
        country: 'United States',
        city: 'San Francisco',
        province: 'California',
      });
    const [editMode, setEditMode] = useState(false);
    const [editModeUpdate, setEditModeUpdate] = useState(false);
    const [value, setValue] = React.useState(0);

    const handleTabChange = (event, newValue) => {
        setValue(newValue);
      };

    const handleToggleEditMode = () => {
        setEditMode((prevEditMode) => !prevEditMode);
    };
    const handleToggleEditModeUpdate = () => {
        setEditModeUpdate((prevEditMode) => !prevEditMode);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };

    const handleInputChangeUpdate = (event) => {
        const { name, value } = event.target;
        setFormDataUpdate((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };

    const handleSubmit = async (event) =>  {
        if (editMode) {
            setEditMode(false)
            console.log('Form data submitted:', formData);
        } else {
            setEditMode(true)
        }
        event.preventDefault();
        // Handle form submission logic here
        const body = { 
            name: formData.name,
            lF_Kafka_Id__c: formData.name,
            billingStreet: formData.street,
            billingCity: formData.city,
            billingState: formData.province,
            billingPostalCode: formData.postalCode,
            billingCountry: formData.country
        };

        try {
              const response = await axios({
                method: 'post',
                url: 'https://hvpbysq62uk5wmlkyyzm3h4cxy0vziee.lambda-url.us-east-2.on.aws/',
                withCredentials: false,
                data: body,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Origin': "http://localhost:3000"
                }
              });
        } catch (ex) {
            console.error(ex);
        }
    };
    

    const handleSubmitUpdate = async (event) => {
        if (editMode) {
            setEditModeUpdate(false)
            console.log('Form data submitted:', formData);
        } else {
            setEditModeUpdate(true)
        }
        event.preventDefault();
        // Handle form submission logic here
        const body = { 
            id: formDataUpdate.id,
            name: formDataUpdate.name,
            lF_Kafka_Id__c: formDataUpdate.name,
            billingStreet: formDataUpdate.street,
            billingCity: formDataUpdate.city,
            billingState: formDataUpdate.province,
            billingPostalCode: formDataUpdate.postalCode,
            billingCountry: formDataUpdate.country
        };
        try {
            const response = await axios({
                method: 'post',
                url: 'https://hvpbysq62uk5wmlkyyzm3h4cxy0vziee.lambda-url.us-east-2.on.aws/',
                withCredentials: false,
                data: body
              });
        } catch (ex) {
            console.error(ex);
        }
    };

    return (
        <Container maxWidth="md">
            <Paper elevation={3} style={{ padding: 16, marginTop: 32 }}>
                <Grid container spacing={3} justifyContent="center" alignItems="center">
                    <Grid item xs={12} textAlign="-webkit-center">
                        <Avatar alt="Profile Image" sx={{ width: 156, height: 156 }} />
                    </Grid>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs value={value} onChange={handleTabChange} aria-label="basic tabs example">
                        <Tab label="New Account" />
                        <Tab label="Update Account" />
                        </Tabs>
                    </Box>
                    <CustomTabPanel value={value} index={0}>
                        <Grid item xs={12}>
                            <Typography variant="h4" gutterBottom padding={8}>
                            {!editMode && <IconButton aria-label="Example" onClick={() => { handleToggleEditMode() }}>
                                    <EditIcon />
                                </IconButton>}
                            </Typography>
                            <form onSubmit={handleSubmit}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            label="Company Name"
                                            name="name"
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                            variant="outlined"
                                            disabled={!editMode}
                                        // Add necessary props, like value and onChange
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            label="Email Address"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            variant="outlined"
                                            type="email"
                                            disabled={!editMode}
                                        // Add necessary props, like value and onChange
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            fullWidth
                                            label="Phone"
                                            name="phone"
                                            type='number'
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            variant="outlined"
                                            disabled={!editMode}
                                        // Add necessary props, like value and onChange
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            fullWidth
                                            label="Street"
                                            name="street"
                                            value={formData.street}
                                            onChange={handleInputChange}
                                            variant="outlined"
                                            disabled={!editMode}
                                        // Add necessary props, like value and onChange
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            fullWidth
                                            label="Postal Code"
                                            name="postalCode"
                                            value={formData.postalCode}
                                            onChange={handleInputChange}
                                            variant="outlined"
                                            disabled={!editMode}
                                        // Add necessary props, like value and onChange
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            fullWidth
                                            label="Country"
                                            name="country"
                                            value={formData.country}
                                            onChange={handleInputChange}
                                            variant="outlined"
                                            disabled={!editMode}
                                        // Add necessary props, like value and onChange
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            fullWidth
                                            label="City"
                                            name="city"
                                            value={formData.city}
                                            onChange={handleInputChange}
                                            variant="outlined"
                                            disabled={!editMode}
                                        // Add necessary props, like value and onChange
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            fullWidth
                                            label="Province"
                                            name="province"
                                            value={formData.province}
                                            onChange={handleInputChange}
                                            variant="outlined"
                                            disabled={!editMode}
                                        // Add necessary props, like value and onChange
                                        />
                                    </Grid>
                                    {editMode && <Grid item xs={12}>
                                        <Button type="submit" variant="contained" color="primary">
                                            Save
                                        </Button>
                                    </Grid>
                                    }
                                </Grid>
                            </form>
                        </Grid>
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={1}>
                    <Grid item xs={12}>
                            <Typography variant="h4" gutterBottom padding={8}>
                                LF Kaf Co
                            {!editModeUpdate && <IconButton aria-label="Example" onClick={() => { handleToggleEditModeUpdate() }}>
                                    <EditIcon />
                                </IconButton>}
                            </Typography>
                            <form onSubmit={handleSubmitUpdate}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            label="Email Address"
                                            name="email"
                                            value={formDataUpdate.email}
                                            onChange={handleInputChangeUpdate}
                                            variant="outlined"
                                            type="email"
                                            disabled={!editModeUpdate}
                                        // Add necessary props, like value and onChange
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            fullWidth
                                            label="Phone"
                                            name="phone"
                                            type='number'
                                            value={formDataUpdate.phone}
                                            onChange={handleInputChangeUpdate}
                                            variant="outlined"
                                            disabled={!editModeUpdate}
                                        // Add necessary props, like value and onChange
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            fullWidth
                                            label="Street"
                                            name="street"
                                            value={formDataUpdate.street}
                                            onChange={handleInputChangeUpdate}
                                            variant="outlined"
                                            disabled={!editModeUpdate}
                                        // Add necessary props, like value and onChange
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            fullWidth
                                            label="Postal Code"
                                            name="postalCode"
                                            value={formDataUpdate.postalCode}
                                            onChange={handleInputChangeUpdate}
                                            variant="outlined"
                                            disabled={!editModeUpdate}
                                        // Add necessary props, like value and onChange
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            fullWidth
                                            label="Country"
                                            name="country"
                                            value={formDataUpdate.country}
                                            onChange={handleInputChangeUpdate}
                                            variant="outlined"
                                            disabled={!editModeUpdate}
                                        // Add necessary props, like value and onChange
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            fullWidth
                                            label="City"
                                            name="city"
                                            value={formDataUpdate.city}
                                            onChange={handleInputChangeUpdate}
                                            variant="outlined"
                                            disabled={!editModeUpdate}
                                        // Add necessary props, like value and onChange
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <TextField
                                            fullWidth
                                            label="Province"
                                            name="province"
                                            value={formDataUpdate.province}
                                            onChange={handleInputChangeUpdate}
                                            variant="outlined"
                                            disabled={!editModeUpdate}
                                        // Add necessary props, like value and onChange
                                        />
                                    </Grid>
                                    {editModeUpdate && <Grid item xs={12}>
                                        <Button type="submit" variant="contained" color="primary">
                                            Save
                                        </Button>
                                    </Grid>
                                    }
                                </Grid>
                            </form>
                        </Grid>
                    </CustomTabPanel>
                </Grid>
            </Paper>
        </Container>
    );
};

export default Profile;
