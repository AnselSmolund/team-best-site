import {
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
  Container,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { rides } from "../data/rides";

export const Rides = () => {
  return (
    <Container style={{ padding: "20px", height: "100%" }}>
      <Typography variant="h2" component="h1" gutterBottom>
        lil taste of what we do
      </Typography>
      <Grid container spacing={4}>
        {rides.map((ride) => (
          <Grid item key={ride.id} xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                height="300"
                image={ride.headerImg}
                alt={ride.title}
              />
              <CardContent>
                <Typography variant="h5" component="h2">
                  {ride.title}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {ride.date}
                </Typography>
                <Typography variant="body2" component="p">
                  {ride.summary}
                </Typography>
                <Button
                  component={Link}
                  to={`/rides/${ride.id}`}
                  style={{ marginTop: "10px" }}
                  variant="outlined"
                >
                  read more
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
