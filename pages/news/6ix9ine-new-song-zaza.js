import Layout from "../../components/Layout"
import Head from "next/head"
import Footer from "../../components/Footer"
import Image from "next/image"

const Zaza = () => {
    return (
        <Layout>
            <Head>
                <title>6ix9ine - Zaza</title>
                <meta name="description" content="On 19th February 2021 6ix9ine has released his brand-new song called Zaza with a video on his official YouTube channel Tekashi 6ix9ine. The song surpassed 20 000 000 views in just one day on YouTube." />
            </Head>
            <div className="lyrics-main-div">
                <div className="min-height-lyrics-div">
                    <h1 className="artist-lyrics-heading">6ix9ine released new track ZAZA</h1>
                    <div className="song-lyrics-div">
                        <p>Daniel Hernandez, professionally known as Tekashi69 or 6ix9ine is an American rapper and songwriter. He was born on 8th May 1996 in New York and carries a lot of controversy throughout his career. His music is known for his aggressive rap style and rapper’s rainbow hair and tattoos. His rap career started in 2012 and until now rapper has released well-known albums like Tattle Tales in 2020, Redd69 in 2019, Dummy Boy in 2018 and more. He blew up with help of Slovak label FCK THEM. In 2019 rapper Tekashi 6ix9ine has been sentenced to two years in prison for crimes he carried out while he was a member of a violent gang. He was charged with racketeering, carrying a firearm, assault with a dangerous weapon and conspiracy murder charges. The rapper was released from prison early because he was vulnerable to the coronavirus. As soon as he got out he released his new track <a href="https://www.youtube.com/watch?v=pPw_izFr5PA" target="_blank" rel="noopener noreferrer">GOOBA</a>.</p>
                        <Image
                            src="/Tekashi1.jpg"
                            alt="Tekashi 6ix9ine"
                            width={600}
                            height={400}
                        />
                        <p>On 19th February 2021 6ix9ine has released his brand-new song called Zaza with a video on his official YouTube channel Tekashi 6ix9ine. The song surpassed 20 000 000 views in just one day on YouTube. It well follows up rapper’s aggressive rap style with a lot of shouting and screaming. Whether you like 6ix9ine or not, his songs are really doing numbers with latest released songs TUTU (117 000 000), PUNANI (145 000 000), TROLLZ featuring Nicki Minaj (329 000 000), YAYA with almost 200 000 000 views and a lot more.</p>
                        <Image
                            src="/Tekashi2.jpg"
                            alt="Tekashi 6ix9ine"
                            width={600}
                            height={400}
                        />
                        <p>Feel free to form your own opinion and listen to the song as well as check out the official video on YouTube <a href="https://www.youtube.com/watch?v=xdVknLqOM9A" target="_blank" rel="noopener noreferrer">here</a>.</p>
                    </div>
                </div>
                <Footer />
            </div>
        </Layout>
    )
}

export default Zaza