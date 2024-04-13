import { home } from "../data/dummydata"
import Typewriter from "typewriter-effect"

export const Hero = () => {
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
                  strings: [`${val.name}`, `${val.post}`, `${val.design}`],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h2>
            <a href="EmmanuellaDjeufa_CurriculumVitae-1.pdf" download="EmmanuellaDjeufa_CurriculumVitae-1.pdf">
            <button className='primaryBtn' data-aos='fade-up-right'>
             Télécharger le CV
            </button>
            </a>

          </div>
        ))}
      </section>
    </>
  )
}