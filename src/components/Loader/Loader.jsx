import React from "react";
import "./styles.css";
import { Container, Card, CardHeader, CardContent, LinearProgress } from "@mui/material";

const Loader = () => {
  return (
    <Container style={{marginTop: '8rem'}}>
      <Card className='cardContainer'>
        <CardHeader title='Uploading...' />
        <CardContent>
          <LinearProgress/>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Loader;