import type { NextPage } from 'next'
import Header from '@components/Header';
import Main from '@components/Main';
import Footer from '@components/Footer';
import About from '@components/About';

const Home: NextPage = () => {
  return (
      <div>
			<Header />
            <div className="ml-auto mr-auto max-w-screen-2xl font-openSans">
                <Main />
                <About />
            </div>
            <Footer />
    </div>
  )
}

export default Home
