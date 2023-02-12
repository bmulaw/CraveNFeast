import React, {useState} from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import LinkIcon from '@mui/icons-material/Link';


const Recipe = (prop) => {
  const [liked, setLiked] = useState(false)
  console.log(prop)
  /*
{
    "cuisineType": [
        "world"
    ],
    "image": "https://edamam-product-images.s3.amazonaws.com/web-img/937/93766eaca6d47f1052af5a083b46cb19.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIAYUciIYEkeliARHQ1zHPQA0uTnp7%2Bo%2FYaS95oXte9%2BsAiBbODY5IFGElYOOtjRghPtO65No150HsRke68UgvsjkuyrMBAg4EAAaDDE4NzAxNzE1MDk4NiIMSKgcIDiUb%2FaGSadXKqkEsMy7ZgJbia6JHpvSpn3tFMH6lbXWDOsGID%2BMWKS5ud3ImbMHsEkdrzNzk%2FMtv6QKECHItHFO2xCbt%2B5Q24u5MVOKN5Kzm5DyL6IklW0EN1Vt2%2Fsdtw39h8a4k%2FyBomzMNmRWicoNnDMc%2FyYp%2Fn%2BfWqwgF6asvHef38r30AEdubJxa3%2FTmLA%2FQeKjmeFADroBVBy%2FT%2Fp9lMh8AQfgdob7ycAMs%2FAnGzRldDRYXDIKNq12D%2F3oSMf0OoYTOiGVxyLucEdIG9evAoxBfrFaJdXdM1K0O3x%2Bn54vi7IwUEVrLylOI%2Bw44hZveYHFc8v78Uj4%2Ft3wVch4FGIGSyqmfTr5Xo5ewbbX5qdR%2BSaJ4fM6TVY97lZa57vjzqJ%2B5vInOTTwlUBJk04%2B7eDTNVdrJE%2FdeQgJ1SrkZTrvfXtHOW1SJ7l4TZiTnqnc%2B4pH0zvE%2FdcYceLTfV2jWTnJpkC9SnfZHkOpULMMorE5IqrLz%2BqQ1ZAUQb4W5XqiC%2BlPjJFk8AnCPrWe%2Ft5LRycPHWzJy%2B4RHJu2Ppwl5XbQHvDgnpK1lvltOyI7RzyREK4QOfsaoO8wR1RAsBT1hgEFAJlUsXC7J0o%2B2mXccKRKqZfPYZGeJcqnOy6aGS5%2B%2BgFBnq9LbhLc%2BuLyPWg87vlyYNrjgy1m2sfPhtIxfooWbwfUMUf%2FchCnYs6RwbZM26nxZxSHzf61gbb7W%2B750nKPjYML8NmZkxAv3i0YpX2LkjCE5YCfBjqqAY7AHZy3b0nUo%2B9ceyAN5zOKZm%2FhwuDPsgz0zxKtZ7O%2BarJxdy0u5QY6ZQxNzR4LQ3OmLv7k9svP%2BjsmU1tuj72SXi9EPLialVJ0RLWvxIXpNTOezNY%2BVYmF2OxWXxK5mmMPryHjQ38KRVOZwiyiSOzsrV68I3I9Xtu2oGU63O4orJrgsNNldkhSvZ2BeAHetYOlp8BMtIc%2FKDGcNOcLu959cbGny3liuhLH&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230205T230656Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFOQCBACU5%2F20230205%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=a2494f1beae900da04b315c96458887b73db039ca9e0f454a438a23a50536f96",
    "ingredientLines": [
        "60 grams light rum (2 ounces)",
        "30 grams Key lime juice (1 ounce, about 5 Key limes)",
        "30 grams simple syrup (1 ounce; 1:1 sugar to water by weight)",
        "1/4 Key lime for garnish"
    ],
    "label": "Key Lime Daiquiri",
    "url": "http://ruhlman.com/2013/02/key-lime-daiquiri-recipe/"
}

  */
  const addToFavorites = (recipe) =>{
    setLiked(!liked) 
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ recipe: recipe })
  };
  const username = window.localStorage.getItem("user")
  fetch(`http://127.0.0.1:5000/account/${username}/favorite`, requestOptions)
      .then(response => response.json())
      .then(data =>console.log(data));
}

  return (
    <div style={{float: 'left', width:'25%', margin: "none" , padding: 'none', height: '600px'}}> 
    <Card sx={{ maxWidth: 345, height:575 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "#B08401" }} aria-label="recipe">
            CF
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title = {prop.prop.label}
        //capitalized first letter in cuisine type
        subheader={prop.prop.cuisineType[0].charAt(0).toUpperCase() + prop.prop.cuisineType[0].slice(1)}
      />
      <CardMedia
        component="img"
        height="194"
        image={prop.prop.image}
        alt= {prop.prop.label}
      />
      <CardContent>
        {//5 ingredients appear on card
            prop.prop.ingredientLines.slice(0,5).map((line,index)=>{
              return(
                <Typography key={index}>
                  {line}

                </Typography>
              )
            })
          }
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
              <FavoriteIcon onClick={
                (e)=>addToFavorites(prop.prop)}
                htmlColor={liked? "red":"grey"}/>
            </IconButton>
            <IconButton aria-label="share">
            <a href={prop.prop.url} ><LinkIcon /></a>
            </IconButton>
      </CardActions>
    </Card>
    </div>
    
  );
};

export default Recipe;
