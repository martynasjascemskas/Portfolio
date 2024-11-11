import { Paper, Box } from "@mui/material";

const FrontEnd = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: 128,
          height: 128,
        },
      }}
    >
      <Paper elevation={0}>Front-End</Paper>
    </Box>
  );
};

export default FrontEnd;
