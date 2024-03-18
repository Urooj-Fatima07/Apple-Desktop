import gsap from 'gsap';
import { useState } from 'react';
import { useGSAP } from '@gsap/react';
import { heroVideo, smallHeroVideo } from '../utils';
import { useEffect } from 'react';

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(window.interWidth < 760 ? smallHeroVideo : heroVideo)
  
  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo)
    } else {
      setVideoSrc(heroVideo)
    }
  }

  useEffect (() => {
    window.addEventListener('resize', handleVideoSrcSet);
    return () => {
      window.removeEventListener('resize', handleVideoSrcSet);
    }
  })
  
  useGSAP(() => {
    gsap.to('#hero', { opacity: 1, delay: 1.5 })
}, [])

  return (
    <section className='w-full nav-height bg-black relative'>
      <div className="h-5/6 w-full flex-center flex-col">
        <p className="hero-title">iPhone 15 Pro</p>
        <div className="md:w-10/12 w-9/12">
          <video className='pointer-events-none' autoplay muted playsInline={true} key={videoSrc} >
            <source src={videoSrc} type='video/mp4' />
          </video>
        </div>
      </div>
    </section>
  )
}

export default Hero