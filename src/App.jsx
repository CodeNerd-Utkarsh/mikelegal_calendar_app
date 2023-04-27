import './App.css';
import Calendar from './component/Calendar';

function App() {
  return (
    <div className="app">
      <p>With ❤️ by:- <a href="https://www.npmjs.com/package/@syncfusion/ej2-react-schedule">
        @syncfusion/ej2-react-schedule
      </a>
      </p>
      <span>Refresh the Page, you got some important task to do 😊</span>
      <Calendar />
    </div>
  );
}

export default App;
