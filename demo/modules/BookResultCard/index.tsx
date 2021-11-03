import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";

interface CustomInputProps {
  description: string;
  title: string;
  imageLinks: object;
}

function BookResultCard<CustomInputProps>({
  data,
}: {
  data: {
    volumeInfo: {
      description: string;
      title: string;
      publishedDate: string;
      authors: any;
      imageLinks: { thumbnail: string };
    };
  };
}) {
  const { volumeInfo } = data;
  const {
    description = "",
    title = "",
    imageLinks,
    publishedDate = "",
    authors,
  } = volumeInfo;
  const { thumbnail } = imageLinks;
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        // avatar={
        //   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
        //     JFK
        //   </Avatar>
        // }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={title}
        subheader={`${authors} - ${publishedDate}`}
      />
      <CardMedia component="img" height="194" image={thumbnail} alt={title} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default BookResultCard;
