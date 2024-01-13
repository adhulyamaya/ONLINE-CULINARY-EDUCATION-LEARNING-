import React, {useState,useEffect} from "react"
import Heading from "../../common/heading/Heading"
import "./Hero.css"

const Hero = () => {
 
  const [headerText, setHeaderText] = useState('aspiring chefs');

 

  useEffect(() => {
    let count = 0;
    const texts = ['CULINARY TEAMS', 'HOME COOKS', 'INDIVIDUALS', 'PROFESSIONALS'];

    const changeHeaderText = () => {
      setHeaderText(<span style={{ color: 'red' }}>{texts[count]}</span>);
      count = (count + 1) % texts.length;
    };

    const intervalId = setInterval(changeHeaderText, 2000);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);


  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row' style={{ color: 'white' }}>
            <Heading  subtitle='WELCOME TO SK-Cooks' title='Best Online Culinary Expertise' />
            <p style={{ color: 'darkblack', fontWeight: 'bold' }}>SK Cooks trains {headerText} <br/> Offering courses in classic and next-gen technique <br/> Join our Live Class</p>
            <div className='button'>
              <button className='primary-btn'>
                GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button>
                VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
