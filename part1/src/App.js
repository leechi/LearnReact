import logo from './logo.svg';
import './App.css';

function App() {
  let post = 'Learn Ract'
  return (
    <div className="App">
      <nav className="black-nav">
        <h4>leechi's blog</h4>
      </nav>
      <div className="list">
        <h4>글제목</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
