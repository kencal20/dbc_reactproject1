import nkrumah from './DrNkrumah.jpg'
import queen from './queenElizabeth.jpg'
import './styles.css'
import './App.css';
import Profile1 from "./App.profile"
import { Profile2 } from './App.profile';


function App() {
  return (
    <div className="App">
      <br />
      <Profile1
        image="kate.jpg"
        alt="a pic of kate"
        name="Kate"
        description=" 
            Creola Katherine Johnson (née Coleman; August 26, 1918 – February 24, 2020) was an American mathematician whose calculations of orbital mechanics as a NASA employee were critical to the success of the first and subsequent U.S. crewed spaceflights.
              During her 33-year career at NASA and its predecessor, she earned a reputation for mastering complex manual calculations and helped pioneer the use of computers to perform the tasks.
              The space agency noted her historical role as one of the first African-American women to work as a NASA scientist "
        link="jhghjg"
      />

      <Profile2
        image={queen}
        alt="a pic of kate"
        name="Queen Elizabeth"
        description=" 
      Elizabeth II was Queen of the United Kingdom and other Commonwealth realms from 6 February 1952 until her death in 2022.
       She was queen regnant of 32 sovereign states over the course of her lifetime and remained the monarch of 15 realms by the time of her death."

      />


      <Profile1
        image={nkrumah}
        alt="Kwame Nkrumah"
        name="Kwame Nkrumah"
        description="Francis Kwame Nkrumah was a Ghanaian politician, political theorist, and revolutionary.
         He was the first Prime Minister and President of Ghana, having led the Gold Coast to independence from Britain in 1957."
      />
</div>

  );
}

export default App;
