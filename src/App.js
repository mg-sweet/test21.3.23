
import './App.css';
import Profile from './components/Profile';
import datas from './datas';

function App(props) {
  return (
    <div>
      
      <Profile 
        image={props.image}
        name='Phyo Ei'
        roll_no='5CS-20'
      />

      {/* <Profile 
        image='./images/pexels1.jpg'
        name='Phyo Ei'
        roll_no='5CS-20'
      />

      <Profile 
        image='./images/pexels1.jpg'
        name='Phyo Ei'
        roll_no='5CS-20'
      />

      <Profile 
        image='./images/pexels1.jpg'
        name='Phyo Ei'
        roll_no='5CS-20'
      />

      <Profile 
        image='./images/pexels1.jpg'
        name='Phyo Ei'
        roll_no='5CS-20'
      /> */}
    </div>
  );
}

export default App;
