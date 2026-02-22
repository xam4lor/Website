'use client'

import Footer from './components/footer/footer'
import Header from './components/header/header'
import HeaderAnimation from './components/header/header_animation'

export default function Home() {
    return <>
        <HeaderAnimation />

        <Header style={{ height: '115vh' }}>
        </Header>

        <Footer />
    </>
}
