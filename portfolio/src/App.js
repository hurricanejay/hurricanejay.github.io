import './App.css';

import { Profile } from './Profile';
import { Projects } from './Projects';
import { Footer } from './Footer';
import { Navigation } from './Navigation';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Profile/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
