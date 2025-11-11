
import './App.css';
import Nav from './components/Nav';
import Intro from './components/Intro';
import Footer from './components/Footer';
import Greetings from './components/Greetings';
import Calc from './components/Calc';
import Example from './components/Example';
import avatar from './avatar.jpg'
function logo(){
  return <img src={avatar} alt="Userpic"/>;
}
const bool="false";
const strl="just";
function App() {
  return (
    <><div className="App">
      <Nav />
      <Intro />
      <logo/>
      <Calc/>
      <Example
        toggleBoolean={!bool}
        math={(10+20)/3}
        str={strl+"another"+"string"}
        />
      <Footer />
       <Greetings username="kev"/>
       <Greetings username="papi"/>
    </div><p>
        Hellow Edna
      </p></>
  );
}

export default App;
