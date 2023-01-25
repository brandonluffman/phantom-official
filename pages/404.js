import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Link from "next/link";

export default function Custom404() {
    return (
        <div>
        <Nav />
        <div className="four-container">
            <div className="four-div">
        <h1 className="four-header">404</h1>
        <h2 className="four-subheader">We can&apos;t seem to find the page you&apos;re looking for.</h2>
        <Link href='/'><button type='button' className="four-btn">Back Home?</button></Link>
        </div>
        </div>
        <Footer />
        </div>
    )
  }