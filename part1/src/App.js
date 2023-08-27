import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {
  let post = 'Learn Ract'
  let [title, setTitle] = useState(['타자 코트 추천', '맛집 추천', '맛있는 과자 추천'])
  let [modal, setModal] = useState(false)
  let [like, setLike] = useState([0, 0, 0])
  let [change, setChange] = useState(0)
  const updateLike = () => {
    setLike(like +=1)
  }
  
  return (
    <div className="App">
      <nav className="black-nav">
        <h4>leechi's blog</h4>
      </nav>
      {title.map((data, i) => {
        return (
          <div key={i} className="list" >
            <h4 onClick={() => {
              setModal(true) 
              setChange(i)
            }}>{data} <span onClick={() => {
              let copy = [...like]
              copy[i] = copy[i] + 1
              setLike(copy)
            }}>❤️</span> {like[i]}</h4>
        <p>2월 17일 발행</p>
      </div>
        )
      })}
      
      <button onClick={() => {
        let copy = [...title]
        copy[0] = '여자코트추천'
        setTitle(copy)
        
      }}>change button</button>
    
      <button onClick={() => {
        let copy = [...title]
        console.log(copy)
        copy.sort()
        setTitle(copy)
      }
      }>정렬하기</button>
      {modal === true ? 
        <Modal change={change}  setTitle={setTitle} title={title} />
      :
        null}
      
      
    </div>
  );
}

const Modal = (props) => {
  return (
    <div className="modal">
      <h4>{ props.title[props.change] }</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={() => {
        let copy = [...props.title]
        copy[0] = '타잔 코트 추천'
        props.setTitle(copy)
      }}>글수정</button>
    </div>
  )
}


export default App;
