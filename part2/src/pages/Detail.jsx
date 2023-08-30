import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import {Nav} from 'react-bootstrap'
const Detail = (props) => {
    let [time, setTime] = useState(true)
    let [alert, setAlert]= useState('')
    let [tap, setTap] = useState(0)


    useEffect(() => {
        let a = setTimeout(() => {
          setTime(time = false)
        }, 2000)
        console.log(2)
        // clean up function
        return () => {
            console.log(1)
            clearTimeout(a)
        }
    }, [])
    
    useEffect(() => {
        if (isNaN(alert) == true) { console.log('그러지마세요') }
    },[alert])

    
    let { id } = useParams()
    
    let findproduct = props.shoes.find((x) => {
        return x.id == id
    })
    return (
        
        <div className="container">
            <input onChange={(e)=>{setAlert(e.target.value)}}></input>
            <div>{alert}</div>
        
            {time == true ?  <div className="alert alert-warning">
                2초이내 구매시 할인
            </div> : null}
        <div className="row">
            <div className="col-md-6">
            <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
            </div>
            <div className="col-md-6">
                    <h4 className="pt-5">{findproduct.title}</h4>
                    <p>{ findproduct.content}</p>
                    <p>{ findproduct.price}</p>
            <button className="btn btn-danger">주문하기</button> 
            </div>
            </div>
        <Nav variant="tabs"  defaultActiveKey="link0">
            <Nav.Item>
            <Nav.Link onClick={()=>{setTap(0)}} eventKey="link0">버튼0</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link onClick={()=>{setTap(1)}} eventKey="link1">버튼1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link onClick={()=>{setTap(2)}} eventKey="link2">버튼2</Nav.Link>
            </Nav.Item>
            </Nav>
            <TabContent tap={tap} />
        
        
        </div> 
    )
}

const TabContent = (props) => {
    if (props.tap == 0) {
        return <div>내용0</div>
} if (props.tap == 1) {
     return <div>내용1</div> 
}
if (props.tap == 2) {
    return <div>내용2</div> 
}
}

export default Detail