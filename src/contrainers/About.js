import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const About = ()  => {
    return (
        <div>
        <Header/>
        <div className="container col-md-5">
            <h3>สวัสดีครับ</h3>
            <p className="title text-justify mt-4 mb-4">
                เราคือร้านอาหาร
                 ที่เน้น
                  ของอร่อและมีสุขภาพดี
                   ครับผม
            </p>
            <h4 className="text-success">
                    เฮลตี้ คาเฟ่
            </h4>
        </div>
        <Footer company="kb" email="kkb@inwza.com" />
        </div>
    )
}

export default About
