import React, { Component } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

export class Newsitems extends Component {
  render() {
    let { title, description,urlImage,url} = this.props;
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia component="img" height="140" image={!urlImage ? 'https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/e2118271bd2e1de00944c1a274b6e0f0.jpg' : urlImage} alt="newsImg" />
        <CardContent>
          <Typography>{title}...</Typography>
        </CardContent>
        <CardContent>
          <Typography>{description}...</Typography>
        </CardContent>
        <CardActions>
          <Button href={url} target="_blank">Read More</Button>
        </CardActions>
      </Card>
    );
  }
}

export default Newsitems;
