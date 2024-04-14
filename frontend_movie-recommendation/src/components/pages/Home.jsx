import Typewriter from "typewriter-effect"
import { home } from "../data/dummydata"

export const Home = () => {
  return (
    <>
      <section className='hero'>
        {home.map((val, i) => (
            <div className='heroContent'>
            <p arseInt className='fontSize' data-aos='fade-right'>
              {val.text}
            </p>
            <h2 style={{ fontSize: '30px', fontFamily: 'serif',fontWight: 'bold' }}>
             
              <Typewriter
                options={{
                  strings: [`${val.name}`],
                  autoStart: true,
                  loop: true,
                }}
              />
              <Typewriter
                options={{
                  strings: [`${val.post}`],
                  autoStart: true,
                  loop: true,
                }}
              />
              <Typewriter
                options={{
                  strings: [ `${val.design}`],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h2>
            <a href="/contenu" >
            <button className='primaryBtn' data-aos='fade-up-right'>
             Cliquez ici pour commencer!
            </button>
            </a>

          </div>
            ))}
          
      </section>
    </>
  )
}