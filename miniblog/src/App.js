import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {
  let [title, setTitle] = useState(['복숭아', '딸기', '바나나'])
  let [desc, setDesc] = useState(['복숭아는 맛있다.', '딸기도 맛있다.', '바나나도 맛있다.'])
  let [modal, setModal] = useState(false)
  let [count, setCount] = useState([0, 0, 0]);
  let [date, setDate] = useState(['3월 28일', '2월 22일', '2월 4일'])
  let [text, setText] = useState(0)
  let [input, setInput] = useState('');
  const editTitle = () => {
    // useState 바꾸는 법
    let copy = [...title]
    copy[0] = '사과'
    setTitle(copy)
  }
  const clickTitle = () => {
  
  }

  return (
    <div className="App">
      <nav className="nav-bar">
        <h4>leechi's blog</h4>
      </nav>
      <section className='add-post-box'>
        <button className='sort' onClick={() => {
          let copy = [...title]
          copy.sort()
          setTitle(copy)
        }}>정렬하기</button>
      <input placeholder='리스트 추가하기' className='add-post' onChange={(e) => {
        console.log(e.target.value)
        
        setInput(e.target.value)
        }}></input>
      
        <button className='add-post-btn' onClick={() => {
          if(input.trim() !== ''){
            let copy = [...title]
            copy.unshift(input)
            setTitle(copy)
            let addLike = [...count]
            addLike.unshift(0)
            setCount(addLike)
            let addDate = [...date]
            addDate.unshift('2월 2일')
            setDate(addDate)
            }
      }}>추가</button>
      </section>
      {title.map((data, i) => {
        return (
          <div key={ i }  className="post">
            <h1 className='post__title' onClick={() => {
              setModal(true)
              setText(i)
            }}>{data}
              <div>
              <span className='post__like' onClick={(e) => {
                e.stopPropagation();
                let copy = [...count]
                copy[i] =count[i]+1
                setCount(copy)
                }}>❤️</span> <span>{count[i]}</span>
                </div>
        </h1>
            
            <span>{ date[i] }</span>
            <button className='post__delete' onClick={() => {
              let copy = [...title]
              copy.splice(i, 1)
              setTitle(copy)
            }}>삭제</button>
            
        </div>
      )})
      }
      
      

      { modal == true ? <Modal desc={desc} date={date} text={text} title={title}></Modal>  :  null }

    </div>
  );
}


const Modal = (props) => {
  return (
    <div className='modal'>
      <div className='modal__box'>
        <h4>{ props.title[props.text] }</h4>
        <p>{ props.date[props.text] }</p>
        <p>{props.desc[props.text]}</p>
      </div>
    </div>
  )
}

export default App;
