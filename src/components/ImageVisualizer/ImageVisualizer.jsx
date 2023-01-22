import React, {useEffect, useState} from "react";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Button, Container, Card, CardHeader, TextField, CardContent } from "@mui/material";

const ImageVisualizer = ({imgUploaded, pathImg}) => {

  const [imgPreview, setImgPreview] = useState();
  
  useEffect(() => {
    if (!imgUploaded) {
        setImgPreview(undefined);
        return;
    }
    const objectUrl = URL.createObjectURL(imgUploaded);
    setImgPreview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
}, [imgUploaded]);

  return (
    <Container style={{marginTop: '8rem'}}>
      <Card className='paperContainer'>
        <CheckCircleIcon fontSize="large" style={{color: '#069706'}} />
        <CardHeader title='Uploaded Successfully!' />
        <CardContent>
          <div style={{width: "35%", margin: "0 auto"}}>
            <img src={imgPreview} alt='image_uploaded' style={{width: "100%"}}/>
          </div>
          <TextField
            disabled
            fullWidth
            variant='outlined'
            style={{marginTop: '2rem'}}
            value={pathImg}
            InputProps={{endAdornment: <Button variant="contained" onClick={() => navigator.clipboard.writeText(pathImg)} style={{width: '20%'}}>Copy Link</Button>}}
          />
        </CardContent>
      </Card>
    </Container>
  );
};

export default ImageVisualizer;