import Footer from "../components/Footer.js"
import Layout from "../components/Layout.js"
import LyricsContainer from "../components/LyricsContainer.js"
import NewsContainer from "../components/NewsContainer.js"
import Head from "next/head"
import Link from "next/link"

import lyricsData from "../data/data.js"

const index = () => {

    const data = lyricsData.map(d => {
        if (d.top === true) {
            return <LyricsContainer key={d.link} artistName={d.artist} songName={d.song} link={d.link} />
        }
    })


    return (
        <Layout>
            <Head>
                <title>ColdenLyrics</title>
                <meta name="description" content="Testing content meta desc" />
            </Head>
            <div className="content-main-div">
                <input className="lyrics-search" placeholder="Search lyrics" type="text"></input>
                <h1 className="top-lyrics-heading" >Trending Lyrics</h1>
                <div className="top-lyrics-div">
                    
                    {data}

                </div>
                <h1 className="news-heading">News</h1>
                <div className="top-lyrics-div">
                    <NewsContainer heading="Juice Wrld passed away" />
                </div>
                <Link href="all-artists"><a className="all-artists">All artists</a></Link>
                <Footer />
            </div>
        </Layout>
    )
}

export default index