import { Box, Typography } from "@mui/material";
import "@fontsource/roboto/700.css";
import Item from "./Item";
import { nanoid } from "nanoid";
import { useEffect } from "react";

const Album = ({ albums, photos, value }) => {
  useEffect(() => {}, [value]);
  return (
    <Box>
      {albums
        .slice(0, 5)
        .filter((el) => {
          if (!value) return el;
          else {
            if (el.title.includes(value)) return el;
          }
        })
        .map((el) => {
          return (
            <>
              <Typography
                variant="h5"
                key={nanoid()}
                sx={{
                  marginTop: "40px",
                  fontSize: "20px",
                  marginBottom: "20px"
                }}
              >
                {el.title}
                {photos
                  .filter((item) => item.albumId === el.id)
                  .slice(0, 10)
                  .map((item) => (
                    <Item key={nanoid()} item={item} />
                  ))}
              </Typography>
            </>
          );
        })}
    </Box>
  );
};

export default Album;
