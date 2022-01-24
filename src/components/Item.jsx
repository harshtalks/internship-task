import { Box } from "@mui/material";
import "@fontsource/roboto/300.css";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const Item = ({ item }) => {
  const randomNumber = () => {
    return Math.round(Math.random() * (250 - 50) + 50);
  };
  const number = randomNumber();
  return (
    <Box sx={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
      <img src={item.thumbnailUrl} alt="xx" style={{ width: "40px" }} />
      <Box
        sx={{
          width: "100%",
          marginLeft: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        <div>
          <Typography>{item.title}</Typography>
          <Link href={item.url} color="inherit" sx={{ display: "block" }}>
            <Typography variant="subtitle1" sx={{ color: "gray" }}>
              {item.url}
            </Typography>
          </Link>
        </div>
        <div>
          <Typography
            fontSize="16"
            sx={{
              textAlign: "right",
              color: `${number > 75 ? "green" : "red"}`
            }}
          >
            ${number}
          </Typography>
          <Typography
            fontSize="8"
            sx={{ textAlign: "right" }}
            variant="subtitle2"
            sx={{ color: "gray" }}
          >
            10:00 AM
          </Typography>
        </div>
      </Box>
    </Box>
  );
};

export default Item;
