import { Paper, Box } from "@mui/material";

const VersionControl = () => {
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
      <Paper elevation={2}>Version Control</Paper>
    </Box>
  );
};

export default VersionControl;
