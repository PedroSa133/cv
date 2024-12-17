import './App.css';
import HeaderMenu from './components/HeaderMenu/HeaderMenu';
import ProfileInfo from './components/ProfileInfo/ProfileInfo';
import SectionButtons from './components/SectionButtons/SectionButtons';

function App() {
  return (
    <div className="App">
      <HeaderMenu />
      <ProfileInfo />
      <SectionButtons />
    </div>
  );
}

export default App;