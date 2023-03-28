import { Box } from "@mui/material";
import React from "react";
import { Typography } from "@mui/material";
import { Grid, Card } from "@mui/material";
import { CardMedia, CardContent } from "@mui/material";
const Content = () => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
      pt={2}
      marginTop={8}
    >
      <Grid item xs={6}>
        <Box>
          <Typography variant="h4" sx={{ mb: 1 }}>
            Welcome to My Website
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt.
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Grid container spacing={2}>
          <Grid item sm={12} md={6}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image="https://www.indiewire.com/wp-content/uploads/2020/09/Screen-Shot-2020-09-22-at-8.42.54-AM.png"
                alt="view image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Card Title
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item sm={6} md={6}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image="https://soranews24.com/wp-content/uploads/sites/3/2020/09/Studio-Ghibli-free-image-download-official-anime-movies-Japan-Spirited-Away-Japanese-news-.jpg"
                alt="black image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Card Title
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item sm={6} md={6}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image="https://cdn.domestika.org/c_fit,dpr_auto,f_auto,t_base_params,w_820/v1600662106/content-items/005/823/194/ponyo049-original.jpg?1600662106"
                alt="colorful image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Card Title
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Content;