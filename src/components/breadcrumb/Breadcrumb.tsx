import { Breadcrumbs, Link, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";

export default function Breadcrumb() {
  const location = useLocation();
  const { nameEn } = location.state || {};

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link underline="hover" color="inherit" href="/">
        7 Ancient Wonder
      </Link>
      <Typography sx={{ color: 'text.primary' }}>{nameEn}</Typography>
    </Breadcrumbs>
  );
}