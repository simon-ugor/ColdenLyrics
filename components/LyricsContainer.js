import Image from "next/image"
import Link from "next/link"

const LyricsContainer = (props) => {

    return (
        <Link href={props.link}>
            <a className="lyrics-container">
                <div className="image-div">
                    <Image
                        src="/mic.png"
                        alt="Song Image"
                        width={50}
                        height={50}
                    />
                </div>
                <div className="song-div">
                    <h2 className="song-heading">{props.artistName}</h2>
                    <h2 className="song-heading">{props.songName}</h2>
                </div>
            </a>
        </Link>
    )
}

export default LyricsContainer