import { Box } from "@mui/material";
import MenuTitle from "./menu_title/MenuTitle.tsx";

export default function MenuProfile({ arrayData, myArrayPlaylist }) {
  return (
    <Box sx={{ padding: "20px 60px 0 60px" }}>
      <MenuTitle arrayData={arrayData} myArrayPlaylist={myArrayPlaylist} />
    </Box>
  );
}
