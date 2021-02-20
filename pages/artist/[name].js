import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Footer from "../../components/Footer"
import Layout from "../../components/Layout"
import LyricsContainer from "../../components/LyricsContainer"
import data from "../../data/data.js"

const Name = () => {

    const [artistSongs, setArtistSongs] = useState([])
    const [artistName, setArtistName] = useState("")

    const router = useRouter()

    useEffect(() => {

        let songs = []

        let url = window.location.href
        //console.log(url)

        data.map(d => {
            if (url === ("http://localhost:3000/artist/" + d.artist.replaceAll(" ", "-"))) {
                setArtistName(d.artist)
                songs.push({"song": d.song, "artist": d.artist, "link": d.link})
            }
        })

        setArtistSongs(songs)

    }, [])

    return (
        <Layout>
            <div className="content-main-div">
                <div className="min-height-div">
                <h1 className="top-lyrics-heading" >{artistName}</h1>
                <div className="top-lyrics-div">
                    {artistSongs.map(d => {
                        return (<LyricsContainer key={d.link} artistName={d.artist} songName={d.song} link={"/" + d.link} />)
                    })}
                </div>
                </div>
                <Footer />
            </div>
        </Layout>
    )
}

export default Name