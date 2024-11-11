import { Paper, Box } from "@mui/material";

const BackEnd = () => {
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
      <Paper>Back-End</Paper>
    </Box>
  );
};

export default BackEnd;
