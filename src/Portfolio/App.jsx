import {Data} from './portfolioData.jsx'
import Card from './Card.jsx'
export default function App() {
    return (
        <div>
        {Data.map((data,i)=>{
           return <Card data={data} key={i}/>
        })}
        </div>
    )
}
