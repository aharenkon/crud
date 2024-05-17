import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

export default function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://axacode.ru">
        Мой сайт
      </Link>{" "}
      {new Date().getFullYear()}.
    </Typography>
  );
}
