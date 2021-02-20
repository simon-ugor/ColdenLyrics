import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Footer from "../../components/Footer.js"
import Layout from "../../components/Layout.js"
import Head from "next/head"
import Link from "next/link"

import data from "../../data/data.js"

const Artist = () => {

    const [display, setDisplay] = useState([])
    const [lastLetter, setLastLetter] = useState("")

    const artists = []

    const router = useRouter()
    const { artist } = router.query

    useEffect(() => {

        let url = window.location.href
        let lastChar = (url.slice(-1)).toString()
        setLastLetter(lastChar.toUpperCase())

        data.map(d => {
            if (d.artist.charAt(0) === lastChar.toUpperCase() || d.artist.charAt(0) === lastChar.toLowerCase()) {
                if (artists.includes(d.artist) === false) {
                    artists.push(d.artist)
                }
            }
        })

        //turn artist names into links
        setDisplay(artists)
    }, [])

    return (
        <Layout>
            <div className="content-main-div">
                <div className="min-height-div">
                <h1 className="top-lyrics-heading">{lastLetter}</h1>
                {display.map(d => {
                    //console.log(d)
                    return(<Link href={"/artist/" + d.replaceAll(" ", "-")}><a className="letter-artists">{d}</a></Link>)
                })}
                </div>
                <Footer />
            </div>
        </Layout>
    )
}

export default Artist