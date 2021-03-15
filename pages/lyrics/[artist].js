
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Footer from "../../components/Footer.js"
import Layout from "../../components/Layout.js"
import Head from "next/head"

import data from "../../data/data.js"
import songInfo from "../../data/song-info.js"
import artistInfo from "../../data/artist-info.js"

const Lyrics = () => {

    const [display, setDisplay] = useState([])
    const [artistName, setArtistName] = useState("")
    const [songName, setSongName] = useState("")
    const [info, setInfo] = useState()
    const [about, setAbout] = useState()

    const router = useRouter()
    const { artist } = router.query

    const onlineLink = "https://coldenlyrics.com/"
    const localHost = "http://localhost:3000/"
    
    useEffect(() => {
        let url = window.location.href
        data.map(d => {
            if (("https://coldenlyrics.com/" + d.link) === url) {
                setDisplay([{"artist": d.artist, "song": d.song, "lyrics": d.lyrics, "snippet": d.snippet}])
                setArtistName(d.artist)
                setSongName(d.song)
            }
        })

        songInfo.map(i => {
            if(("https://coldenlyrics.com/lyrics/" + i.artist.replaceAll(" ", "-").toLowerCase() + "-" + i.songname.replaceAll(" ", "-").toLowerCase()) === url) {
                setInfo(<div><h1 style={{color: "black"}} className="song-lyrics-heading">Song info</h1><div className="song-lyrics-div"><p>Artist: {i.artist}</p><p>Song: {i.songname}</p><p>Produced by: {i.producedby}</p><p>Album: {i.album}</p></div></div>)
            }
        })

        songInfo.map(i => {
            if(("http://localhost:3000/lyrics/" + i.artist.replaceAll(" ", "-").toLowerCase() + "-" + i.songname.replaceAll(" ", "-").toLowerCase()) === url) {
                console.log(i.artist.toLowerCase())
                artistInfo.map(a => {
                    if (a.artist.toLowerCase() === i.artist.toLowerCase()) {
                        console.log("i got here")
                        setAbout(<div><h1 className="artist-lyrics-heading">About</h1><h1 className="song-lyrics-heading">{a.artist}</h1><div className="song-lyrics-div"><p>{a.about}</p></div></div>)
                    }
                })
            }
        })


    }, [])

    const toDisplay = display.map(d => {
        return (
            <Layout>
                <Head>
                    <title>{d.artist + " - " + d.song + " Lyrics"}</title>
                    <meta name="description" content={d.artist + " " + d.song + " Lyrics: " + d.snippet.substring(0,130) + "..."} />
                </Head>
                <div className="lyrics-main-div">
                    <div className="min-height-lyrics-div">
                    <h1 className="artist-lyrics-heading">{d.artist}</h1>
                    <h1 className="song-lyrics-heading">{d.song}</h1>
                    <div className="song-lyrics-div" dangerouslySetInnerHTML={{__html: d.lyrics}} />
                    {info}
                    {about}
                    <h1 className="artist-lyrics-heading">Other songs by</h1>
                    <h1 className="song-lyrics-heading">{artistName}</h1>
                    <div className="song-lyrics-div">{data.map(x => {
                        if (x.artist === artistName && x.song !== songName) {
                            return (<p><a href={"https://coldenlyrics.com/" + x.link} style={{cursor: "pointer", textDecoration: "underline", color: "black"}}>{x.song}</a></p>)
                        }
                    })}</div>
                    </div>
                    <Footer />
                </div>
            </Layout>
        )
    })

    return (
        <div>
            {toDisplay}
        </div>
    )
}

export default Lyrics