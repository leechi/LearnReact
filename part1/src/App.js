import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {
  let post = 'Learn Ract'
  let [title, setTitle] = useState(['타자 코트 추천', '맛집 추천', '맛있는 과자 추천'])
  let [modal, setModal] = useState(false)
  console.log(title[0])
  let [like, setLike] = useState(0)
  const updateLike = () => {
    setLike(like += 1)
  }
  
  let count = 0
  return (
    <div className="App">
      <nav className="black-nav">
        <h4>leechi's blog</h4>
      </nav>
      <div className="list">
        <h4>{title[0]} <span onClick={updateLike}>❤️</span> {like} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list" onClick={() => {
        setModal(!modal)
      }}>
        <h4>{title[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <button onClick={() => {
        let copy = [...title]
        copy[0] = '여자코트추천'
        setTitle(copy)
        
      }}>change button</button>
      // 가나다순 정렬하기 버튼
      <button onClick={() => {
        let copy = [...title]
        console.log(copy)
        copy.sort()
        setTitle(copy)
      }
      }>정렬하기</button>
      {modal === true ? 
      <Modal />
      :
      null}
    </div>
  );
}

const Modal = () => {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}


export default App;
