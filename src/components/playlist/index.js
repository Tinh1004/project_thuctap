import CardPlaylist from "./card_playlist/CardPlaylist";
import PlaylistTitle from "./play_list_title/PlaylistTitle";
import "./playlist.scss";

export default function PlayList() {
  return (
    <div className="play_list">
      <PlaylistTitle />
      <div className="wrapper_playlist">
        <CardPlaylist />
        <CardPlaylist />
        <CardPlaylist />
        <CardPlaylist />
      </div>
    </div>
  );
}
