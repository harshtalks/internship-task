import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { alpha, theme } from "@mui/material/styles";

const SearchBar = ({ setValue }) => {
  return (
    <Box
      sx={{
        position: "relative",
        backgroundColor: "rgba(255,182,193,0.3)",
        marginTop: "20px",
        borderRadius: "5px",
        paddingTop: "5px",
        paddingBottom: "5px"
      }}
    >
      <InputBase
        onChange={(e) => setValue(e.target.value)}
        placeholder="See your Financial Report"
        fullWidth={true}
        size="medium"
        sx={{
          paddingLeft: "8px",
          fontSize: "20px",
          fontWeight: 300,
          color: "primary.dark"
        }}
      />

      <ChevronRightIcon
        fontSize="large"
        sx={{ position: "absolute", right: 0 }}
      />
    </Box>
  );
};

export default SearchBar;
