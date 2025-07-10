import { Button, Card, CardActions, CardContent, CardMedia, Divider, Typography } from "@mui/material";
import { convertImageURL } from "~/helpers/converters/sanity/ConvertImageURL";
import { Link } from "react-router-dom";
import type { ICardList } from "~/@types/components/Card";

export default function CardList({ data }: ICardList) {
  return (
    <Card>
      <CardMedia
        sx={{ height: 200 }}
        image={convertImageURL(data?.image?.asset?._ref ?? "", { width: 600, height: 400, quality: 80, format: "jpg" })}
        title={data.nameEn}
      />
      <CardContent style={{ height: "200px" }}>
        <Typography variant="subtitle1" component="div">
          <h4 className="font-medium mb-3 leading-10">{data.nameEn}</h4>
        </Typography>
        <Typography variant="subtitle2" component="div">
          <p className="text-gray-500 line-clamp-3 leading-7">{data.detail}</p>
        </Typography>
      </CardContent>
      <CardActions style={{ justifyContent: "space-between" }}>
        <Typography variant="body2" component="div">
          Location: {data.locationName}
        </Typography>
        <Divider
          orientation="vertical"
          component="div"
          style={{ height: "30px", margin: "0 10px" }}
        />
        <Link to={data._id} state={{ nameEn: data.nameEn }}>
          <Button variant="contained">Learn More</Button>
        </Link>
      </CardActions>
    </Card>
  );
}