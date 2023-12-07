import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import { CardActionArea } from "@mui/material"

export default function NewsCard() {
  return (
    <Card style={{ height: "100%" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent style={{ overflow: "hidden" }}>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            style={{ overflow: "hidden", textOverflow: "ellipsis" }}
          >
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
