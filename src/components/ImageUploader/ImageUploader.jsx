import React from "react";
import './styles.css';
import { Button, Container, Card, CardHeader, Input, CardContent } from "@mui/material";

const ImageUploader = ({handleFile, error}) => {

  return (
    <Container style={{marginTop: '8rem'}}>
      {Boolean(error) && <h4 style={{color: "red"}}>Ocurrió un error al momento de cargar tu imagen, inténtalo de nuevo...</h4>}
      <Card className='paperContainer'>
        <CardHeader title='Upload your image' subheader='File should be jpeg, png...' />
        <CardContent>
          <label htmlFor="contained-button-file">
            <div className="inputStyles">
              <Input style={{display: 'none'}} onChange={handleFile} accept="image/*"  id="contained-button-file" multiple placeholder="Drag Drop your image here..." type="file" />
            </div>
            <h2 style={{color: 'rgba(0, 0, 0, 0.6)'}}>Or</h2>
            <Button variant="contained" component="span">
              Upload
            </Button>
          </label>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ImageUploader;