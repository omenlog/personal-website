import type { NextPage } from "next"
import { About, Footer, Experience, Main, Header, Skills } from "components";
import { me } from "data";

const Home: NextPage = () => {
    return (
        <div>
            <Header />
            <div className="ml-auto mr-auto max-w-screen-xl font-openSans">
                <Main name={me.name}/>
                <About>
                    <Skills skills={me.skills}/>
                </About>
                <Experience />
            </div>
            <Footer />
        </div>
    )
}

export default Home
