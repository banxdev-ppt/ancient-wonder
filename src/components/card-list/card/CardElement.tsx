import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import type { ICardElement } from "~/@types/components/Card";
import { convertImageURL } from "~/helpers/converters/sanity/ConvertImageURL";

export default function CardElement({ nameEn, nameTh, image, detail, locationName, map }: ICardElement) {
  return (
    <Card className="p-5 rounded-lg flex justify-center flex-col items-center">
      <CardMedia
        component="img"
        sx={{
          width: '50%',
          height: 'auto',
          objectFit: 'contain',
          borderRadius: "10px"
        }}
        image={convertImageURL(image ?? "")}
        title={nameEn + nameTh}
      />
      <CardContent>
        <Typography gutterBottom component="div">
          <p>{detail ?? ""}</p>
        </Typography>
        <Typography gutterBottom component="div">
          <h6><i className="fa-solid fa-location-dot pr-2" />{locationName ?? ""}</h6>
        </Typography>
        <div className="mt-6 w-full rounded-lg overflow-hidden shadow-md border border-gray-200">
          <iframe
            src={map}
            className="w-full h-[400px] border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            aria-label={`Map of ${nameEn}`}
          />
        </div>
      </CardContent>
    </Card >
  );
}