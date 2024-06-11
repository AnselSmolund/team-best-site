import {
  Typography,
  Grid,
  Container,
  ImageList,
  ImageListItem,
} from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { rides } from "../data/rides";

export const RideDetail = () => {
  const { id } = useParams();
  const ride = rides.find((ride) => ride.id === parseInt(id!));

  if (!ride) {
    return (
      <Typography variant="h5" component="div">
        Ride not found
      </Typography>
    );
  }

  return (
    <Container style={{ paddingTop: "20px", height: "100%" }}>
      <Typography variant="h2" component="h1" gutterBottom>
        {ride.title}
      </Typography>
      <Typography variant="h4" paragraph>
        {ride.summary}
      </Typography>
      <Grid container spacing={4} paddingTop={5}>
        <ImageList cols={3} variant="masonry">
          {ride.images.map((item) => (
            <ImageListItem key={item}>
              <img
                srcSet={`${item}?w=161&fit=crop&auto=format&dpr=2 2x`}
                src={`${item}?w=161&fit=crop&auto=format`}
                alt={"hi"}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Grid>
    </Container>
  );
};
