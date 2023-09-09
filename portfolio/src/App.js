import './App.css';
import Header from './Components/Header';
import Followme from './Components/Followme';
import Aboutm from './Components/Aboutm';
import Mainabout from './Components/Mainabout';
import Aboutme from './Components/Aboutme';
import Myskills from './Components/Myskils'
import Skillcard from './Components/Skillcard';
import Webskills from './Components/Webskills';

function App() {
  const CartData = {
    Name: 'pythone',
    value: 80,
    persent: 80
  }
  return (
    <>
      <Header />
      <Mainabout />
      <Aboutme />
      <Myskills />
      <Skillcard CartData={CartData} />
      <Webskills />

    </>
  );
}

export default App;
