import Image from "next/image"
import Link from "next/link"

const NewsContainer = (props) => {

    return (
        <Link href={props.link}>
            <a className="lyrics-container">
                <div className="image-div">
                    <Image
                        src="/news.png"
                        alt="Song Image"
                        width={50}
                        height={50}
                    />
                </div>
                <div className="song-div">
                    <h2 className="song-heading">{props.heading}</h2>
                </div>
            </a>
        </Link>
    )
}

export default NewsContainer