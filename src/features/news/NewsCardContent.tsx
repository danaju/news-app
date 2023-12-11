import { Grid } from "@mui/material"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"

type NewsCardContentProps = {
  title: string
  source: string
}

export default function NewsCardContent({
  title,
  source,
}: NewsCardContentProps) {
  return (
    <CardContent
      sx={{
        height: "8rem",
      }}
    >
      <Grid container>
        <Grid
          item
          xs={12}
          sx={{
            lineHeight: "1.2em",
            minHeight: "2.4em",
            maxHeight: "2.4em",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          <Typography variant="body2" fontWeight="bold" component="div">
            {title}
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            mt: "2.6rem",
          }}
        >
          <Typography
            variant="overline"
            component="div"
            color="text.secondary"
            sx={{
              fontSize: "0.6rem",
            }}
          >
            Source: {source}
          </Typography>
        </Grid>
      </Grid>
    </CardContent>
  )
}
