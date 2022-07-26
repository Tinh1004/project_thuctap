import React from "react";
import { useSelector } from "react-redux";
import { dataSelector } from "../../../redux/selectors";
import CardPopularArtist from "./card_popular_artist/CardPopularArtist";

import "./styles.scss";
export default function ListPopularArtistItem() {
  const array = useSelector(dataSelector);
  return (
    <div className="listPopularArtistContainer">
      <h1>Nghệ sĩ nổi bật</h1>
      <div className="cardPopularArtist">
        {array.map((item) => (
          <CardPopularArtist
            key={item.id}
            image={item.links.images[0].url}
            author={item.author}
          />
        ))}
      </div>
    </div>
  );
}
