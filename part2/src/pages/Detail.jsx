import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const Detail = (props) => {
    let [time, setTime] = useState(true)
    let [alert, setAlert]= useState('')



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
        </div> 
    )
}

export default Detail