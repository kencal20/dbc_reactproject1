import logo from './logo.png';
import './styles.css'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <img src={logo} alt='kate' />
        <hr />
        <section>
          <h3>
            Katherine Johnson
          </h3>
          <hr width='400px' />
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime debitis eum repellendus modi similique ipsa. Beatae vitae similique aperiam accusantium temporibus eligendi aliquam delectus cumque veniam praesentium? Dolor, incidunt minus!</p>
        </section>
      </div>

      <div className='container'>
        <section>
          <h3>
            Queen ELizabeth
          </h3>
          <hr width='400px' />
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime debitis eum repellendus modi similique ipsa. Beatae vitae similique aperiam accusantium temporibus eligendi aliquam delectus cumque veniam praesentium? Dolor, incidunt minus!</p>
        </section>
        <hr />
        <img src={logo} alt='kate' />
      </div>
      <div className='container'>
        <img src={logo} alt='kate' />
        <hr />
        <section>
          <h3>
            Kwame Nkrumah
          </h3>
          <hr width='400px' />
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime debitis eum repellendus modi similique ipsa. Beatae vitae similique aperiam accusantium temporibus eligendi aliquam delectus cumque veniam praesentium? Dolor, incidunt minus!</p>
        </section>
      </div>
    </div>
  );
}

export default App;
