
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Footer from "../../components/Footer.js"
import Layout from "../../components/Layout.js"
import Head from "next/head"

import data from "../../data/data.js"

const Lyrics = () => {

    const [display, setDisplay] = useState([])

    const router = useRouter()
    const { artist } = router.query
    
    useEffect(() => {
        let url = window.location.href
        data.map(d => {
            if (("https://coldenlyrics.com/" + d.link) === url) {
                setDisplay([{"artist": d.artist, "song": d.song, "lyrics": d.lyrics, "snippet": d.snippet}])
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