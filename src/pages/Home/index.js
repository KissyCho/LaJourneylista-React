import React from 'react'

import Header from '../../components/Header'
import { TopCarousel } from './styles'

const Home = () => {
    return (
        <>
            <Header />
            <TopCarousel>
                <div
                    style={{
                        backgroundImage:
                            'url(https://www.yotpo.com/wp-content/uploads/2020/05/helly.jpg)',
                        width: '33.33333%',
                        height: '380px',
                    }}
                ></div>
                <div
                    style={{
                        backgroundImage:
                            'url(https://www.yotpo.com/wp-content/uploads/2020/05/steve.jpg)',
                        width: '33.33333%',
                        height: '380px',
                    }}
                ></div>
                <div
                    style={{
                        backgroundImage:
                            'url(https://www.yotpo.com/wp-content/uploads/2020/05/bobs.jpg)',
                        width: '33.33333%',
                        height: '380px',
                    }}
                ></div>
            </TopCarousel>
        </>
    )
}
export default Home
