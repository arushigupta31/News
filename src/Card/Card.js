import React from 'react';
import CategoryData from '../Dashboard';
const Card=()=>{
    const cdata= useContext(CategoryData)
    return(
        <>
        <div>
            <div className="rocketDiv">
                {data && data.map((item)=>{
                    <div className="rocletsCard">
                        <ul className="rocketBlock">
                            <li className="rocketDetails"><center><img src={item.urlToImage}/></center></li>
                            <li className="rocketDetails"><strong>{item.title}</strong></li>
                            <li className="rocketDetails">{item.description}</li>
                            <li className="rocketDetails">{item.author}</li>
                            <li className="rocketDetails">{item.publishedAt}</li>
                        </ul>
                    </div>
                })}

            </div>
        </div>
        </>
    )
}
export default Card;