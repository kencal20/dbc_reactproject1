import kate from './kate.jpg';
import nkrumah from './DrNkrumah.jpg'
import queen from './queenElizabeth.jpg'

import './styles.css'
import './App.css';

function App() {
  return (
    <div className="App">
      <br/>
      <div className='container'>
        <img src={kate} alt='kate' />
    
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
    </div>
  );
}

export default App;
