import CardSong from "./card_song/CardSong";
export default function SearchSong(props) {
    return (
        <div className="search-body">
            <div class="list_songs">
                <div class="media_left">
                    <p className="search-title" style={{fontSize: '20px', fontWeight: '500', padding: '15px 0'}}>Bài hát</p>
                </div>
                <CardSong />
                <CardSong />
                <CardSong />
                <CardSong />
                <CardSong />
                <CardSong />
                <CardSong />
                <CardSong />
                <CardSong />
                <CardSong />
                <CardSong />
                <CardSong />
            </div>
        </div>
    )
}