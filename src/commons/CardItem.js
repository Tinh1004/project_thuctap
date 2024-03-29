import { Avatar, Box, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import { Card } from "react-bootstrap";
import CustomTooltip from "./CustomTooltip";

function CardItem({
  data,
  firstIcon,
  secondIcon,
  threeIcon,
  firstTitle,
  secondTitle,
  nameItem,
  nameAuthor,
  display = "none",
  ...rest
}) {
  return (
    <Card
      style={{
        border: "none",
        boxShadow: "none",
        marginRight: 20,
        marginBottom: 20,
        height: "40vh",
        overflow: "hidden",
      }}
    >
      <Box
        mb={1}
        sx={{
          width: "100%",
          height: "80%",
          overflow: "hidden",
          borderRadius: 2,
          cursor: "pointer",
          position: "relative",
          "&:hover .media": {
            visibility: "visible",
          },

          "&:hover img": {
            transform: "scale(1.1)",
          },
        }}
      >
        <Box
          className="media"
          sx={{
            width: "100%",
            height: "100%",
            position: "absolute",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            color: "#fff",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            visibility: "hidden",
            zIndex: 1,
          }}
        >
          <CustomTooltip icon={firstIcon} titleTooltip={firstTitle} />
          {secondIcon}
          <CustomTooltip icon={threeIcon} titleTooltip={secondTitle} />
        </Box>

        <CardMedia
          component="img"
          height="100%"
          image={data.image}
          alt="playlist image"
          sx={{
            position: "relative",
            borderRadius: 2,
            transition: "0.5s all ease-in-out",
          }}
        />
        <Typography
          sx={{
            display: { display },
            position: "absolute",
            color: "#fff",
            bottom: 0,
            right: 0,
            backgroundColor: "#000000b3",
            margin: "4px 8px",
            padding: "2px 12px",
            borderRadius: 2,
            fontSize: "0.8rem",
          }}
        >
          4:17
        </Typography>
      </Box>

      <Box sx={{ display: "flex", width: "100%", height: "20%" }}>
        <Avatar
          sx={{ display: { display }, marginRight: 2 }}
          alt="Image singer"
          src={data.image}
        />
        <Box>
          <Typography noWrap sx={{ fontSize: "1rem", color: "black" }}>
            {nameItem}
          </Typography>

          <Typography noWrap sx={{ fontSize: "0.9rem", color: "#00000099" }}>
            {nameAuthor}
          </Typography>
        </Box>
      </Box>
    </Card>
  );
}

export default CardItem;
