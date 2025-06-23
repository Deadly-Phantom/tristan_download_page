"use client";
import { ITriscard } from "@/app/data";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

export default function Triscard({ data }: { data: ITriscard }) {
  return (
    <Grid>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{
            height: 140,
            backgroundSize: "contain",
          }}
          image={data.image}
          title={data.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {data.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={() => window.open(data.link)} size="small">
            {data.label}
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
