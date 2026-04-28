'use client'

import About from './(home)/about/about'
import Footer from './(home)/footer/footer'
import Header from './(home)/header/header'
import Highlights from './(home)/highlights/highlights'
import Navbar from './(home)/header/navbar'
import Publications from './(home)/publications/publications'
import Projects from './(home)/projects/projects'
import Separator from './ui/separator/separator'

export default function Home() {
    return <>
        <Navbar />
        <Header />

        <Separator />

        <About />
        <Highlights />
        <Publications />
        <Projects />

        <Footer />
    </>
}
