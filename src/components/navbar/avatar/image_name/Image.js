
export default function Image({
    IMAGE_AVATAR,
    handleClickSetClick
}) {
    return (
        <div className="avatar" onClick={handleClickSetClick}>
            <div className="navbar-avatar">
                <img alt="avarta" src={IMAGE_AVATAR} />
            </div>
        </div>
    );
}
