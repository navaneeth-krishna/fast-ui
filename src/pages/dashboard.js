import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import UserStatsTable from "../components/userStatsTable";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const userDetailStyles = {
    border: "1px solid #1E88E5",
    borderRadius: "16px",
    height: "calc(100% - 46px)",
    padding: "20px",
    margin: "10px",
    color: "#1E88E5",
  };

  const userDataStatsStyles = {
    height: "calc(100% - 46px)",
    padding: "20px",
    margin: "10px",
  };

  const textAreaStyles = {
    marginBottom: "50px",
  };

  const user = {
    name: "John Doe",
    helpingSince: "2000",
    noOfRenews: "10",
  };

  return (
    <>
      <Grid sx={{ height: "100vh" }} container spacing={2}>
        <Grid sx={{ height: "100%" }} item xs={12} md={4}>
          <div style={userDetailStyles}>
            <Typography variant="h5">User Details</Typography>
            <Avatar
              alt="User Image"
              src="/dude.jpg"
              sx={{ width: 150, height: 150, margin: "0 auto 50px auto" }}
            />
            <TextField
              id="name"
              label="Name"
              value={user.name}
              variant="outlined"
              fullWidth
              style={textAreaStyles}
            />
            <TextField
              id="helpingSince"
              label="Helping Since"
              value={user.helpingSince}
              variant="outlined"
              fullWidth
              style={textAreaStyles}
            />
            <TextField
              id="noOfRenews"
              label="Total No of Renews"
              value={user.noOfRenews}
              variant="outlined"
              fullWidth
              style={textAreaStyles}
            />
            <Link to="/recommendations">
              <Button fullWidth size="large" variant="contained">
                Recommend
              </Button>
            </Link>
          </div>
        </Grid>
        <Grid sx={{ height: "100%" }} item xs={12} md={8}>
          <div style={userDataStatsStyles}>
            <Typography variant="h5" gutterBottom>
              Restaurants Renewed by User
            </Typography>
            <UserStatsTable />
          </div>
        </Grid>
      </Grid>
    </>
  );
}
