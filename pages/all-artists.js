import Link from "next/link"
import Footer from "../components/Footer"
import Layout from "../components/Layout"

const allArtists = () => {
    return (
        <Layout>
            <div className="content-main-div">
                <div className="min-height-div">
                    <h1 className="top-lyrics-heading">All artists</h1>

                    <div className="three-letters">
                        <Link href="artists/a"><a className="letter-artists">A</a></Link>
                        <Link href="artists/b"><a className="letter-artists">B</a></Link>
                        <Link href="artists/c"><a className="letter-artists">C</a></Link>
                        <Link href="artists/d"><a className="letter-artists">D</a></Link>
                    </div>

                    <div className="three-letters">
                        <Link href="artists/e"><a className="letter-artists">E</a></Link>
                        <Link href="artists/f"><a className="letter-artists">F</a></Link>
                        <Link href="artists/g"><a className="letter-artists">G</a></Link>
                        <Link href="artists/h"><a className="letter-artists">H</a></Link>
                    </div>

                    <div className="three-letters">
                        <Link href="artists/i"><a className="letter-artists">I</a></Link>
                        <Link href="artists/j"><a className="letter-artists">J</a></Link>
                        <Link href="artists/k"><a className="letter-artists">K</a></Link>
                        <Link href="artists/l"><a className="letter-artists">L</a></Link>
                    </div>

                    <div className="three-letters">
                        <Link href="artists/m"><a className="letter-artists">M</a></Link>
                        <Link href="artists/n"><a className="letter-artists">N</a></Link>
                        <Link href="artists/o"><a className="letter-artists">O</a></Link>
                        <Link href="artists/p"><a className="letter-artists">P</a></Link>
                    </div>

                    <div className="three-letters">
                        <Link href="artists/q"><a className="letter-artists">Q</a></Link>
                        <Link href="artists/r"><a className="letter-artists">R</a></Link>
                        <Link href="artists/s"><a className="letter-artists">S</a></Link>
                        <Link href="artists/t"><a className="letter-artists">T</a></Link>
                    </div>

                    <div className="three-letters">
                        <Link href="artists/u"><a className="letter-artists">U</a></Link>
                        <Link href="artists/v"><a className="letter-artists">V</a></Link>
                        <Link href="artists/w"><a className="letter-artists">W</a></Link>
                        <Link href="artists/x"><a className="letter-artists">X</a></Link>
                    </div>

                    <div className="three-letters">
                        <Link href="artists/y"><a className="letter-artists">Y</a></Link>
                        <Link href="artists/z"><a className="letter-artists">Z</a></Link>
                    </div>
                </div>
                <Footer />
            </div>
        </Layout>
    )
}

export default allArtists