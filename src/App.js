
import nkrumah from './DrNkrumah.jpg'
import queen from './queenElizabeth.jpg'
import './styles.css'
import './App.css';

function Profile(props) {
  return (
    <div className='container'>
      <img src={props.image} alt={props.alt} />
      <section>
        <h3> {props.name} </h3>
        <hr width='400px' />
        <p>{props.description}</p>
       <button><a href={props.link}></a>Wiki page</button>  
      </section>
    
    </div>

  )
}


function App() {
  return (
    <div className="App">
      <br />
      <div className='container'>
        <img src='kate.jpg' alt='kate' />
        <section>
          <h3>
            Katherine Johnson
          </h3>
          <hr width='400px' />
          <p>Creola Katherine Johnson (née Coleman; August 26, 1918 – February 24, 2020) was an American mathematician whose calculations of orbital mechanics as a NASA employee were critical to the success of the first and subsequent U.S. crewed spaceflights.
            During her 33-year career at NASA and its predecessor, she earned a reputation for mastering complex manual calculations and helped pioneer the use of computers to perform the tasks.
            The space agency noted her "historical role as one of the first African-American women to work as a NASA scientist"</p>
        </section>
      </div>
      <br />
      <div className='container'>
        <section>
          <h3>
            Queen ELizabeth
          </h3>
          <hr width='400px' />
          <p>Elizabeth II was Queen of the United Kingdom and other Commonwealth realms from 6 February 1952 until her death in 2022. She was queen regnant of 32 sovereign states over the course of her lifetime and remained the monarch of 15 realms by the time of her death.
          </p>
        </section>
        <img src={queen} alt='queen elizabeth' />
      </div>
      <br />
      <div className='container'>
        <img src={nkrumah} alt='nkrumah' />
        <section>
          <h3>
            Kwame Nkrumah
          </h3>
          <hr width='400px' />
          <p>Francis Kwame Nkrumah was a Ghanaian politician, political theorist, and revolutionary. He was the first Prime Minister and President of Ghana, having led the Gold Coast to independence from Britain in 1957.
          </p>
        </section>
      </div>
      <Profile
        image="kate.jpg"
        alt="a pic of carl"
        name="carl jung"
        description=" 
        Creola Katherine Johnson (née Coleman; August 26, 1918 – February 24, 2020) was an American mathematician whose calculations of orbital mechanics as a NASA employee were critical to the success of the first and subsequent U.S. crewed spaceflights.
          During her 33-year career at NASA and its predecessor, she earned a reputation for mastering complex manual calculations and helped pioneer the use of computers to perform the tasks.
          The space agency noted her historical role as one of the first African-American women to work as a NASA scientist "
        link="jhghjg" />
    </div>



  );
}

export default App;
