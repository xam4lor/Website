'use client'

import About from './(home)/about/about'
import Header from './(home)/header/header'
import Navbar from './(home)/header/navbar'
import Separator from './ui/separator/separator'

export default function Home() {
    return <>
        <Navbar />
        <Header />

        <Separator />

        <About />

        {/* <Footer /> */}
    </>
}
