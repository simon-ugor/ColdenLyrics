import Footer from "../components/Footer.js"
import Layout from "../components/Layout.js"
import LyricsContainer from "../components/LyricsContainer.js"
import NewsContainer from "../components/NewsContainer.js"
import Head from "next/head"
import Link from "next/link"

import lyricsData from "../data/data.js"

import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const index = () => {

    const router = useRouter()

    useEffect(() => {

        let url = window.location.href
        if (url === "https://www.coldenlyrics.com/") {
            router.push("https://coldenlyrics.com/")
        }
        
    }, [])

    const data = lyricsData.map(d => {
        if (d.top === true) {
            return <LyricsContainer key={d.link} artistName={d.artist} songName={d.song} link={d.link} />
        }
    })

    const [search, setSearch] = useState("")
    const [searchDiv, setSearchDiv] = useState("none")

    const handleSearch = (e) => {

        let searchedArtists = []

        let uniqueArtists = []

        let value = e.target.value

        if (!value) {
            setSearchDiv("none")
        } else if (value) {
            setSearchDiv("")
        }

        searchedArtists = lyricsData.filter(item => {
            return item.artist.toLocaleLowerCase().includes(value.toLocaleLowerCase())
        })
        
        searchedArtists.map(a => {
            if (uniqueArtists.includes(a.artist) === false) {
                uniqueArtists.push(a.artist)
            }
        })

        setSearch(uniqueArtists)
        
    }


    return (
        <Layout>
            <Head>
                <title>ColdenLyrics</title>
                <meta name="description" content="Colden Lyrics is a web page where you can find lyrics of your favorite songs. See our trending lyrics, search lyrics by artist or read fresh music industry news." />
            </Head>
            <div className="content-main-div">
                <input className="lyrics-search" onChange={handleSearch} placeholder="Search artists" type="text"></input>
                <div style={{display: searchDiv}} className="search-lyrics-div">
                    {search.length > 0 && search.map(a => {
                        return <LyricsContainer key={a} artistName="" songName={a} link={"/artist/" + a.replaceAll(" ", "-")} />
                    })}
                </div>
                <h1 className="top-lyrics-heading" >Trending Lyrics</h1>
                <div className="top-lyrics-div">
                    
                    {data}

                </div>
                <h1 className="news-heading">News</h1>
                <div className="top-lyrics-div">
                    <NewsContainer heading="6ix9ine released new track ZAZA" link="/news/6ix9ine-new-song-zaza" />
                </div>
                <Link href="all-artists"><a className="all-artists">All artists</a></Link>
                <Footer />
            </div>
        </Layout>
    )
}

export default index