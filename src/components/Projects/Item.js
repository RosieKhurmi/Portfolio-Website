import React from 'react'

const Item = ({item}) => {
  return (
    <div className = "card" key = {item.id}>  
      <img src = {item.img} alt = ''/>
      <div className="info">
        <h2>{item.id}</h2>
        <p>{item.text}</p>
        <a href = {item.code} target = "_blank" rel="noreferrer">
            Github<i class="uil uil-arrow-right"></i>
        </a>
      </div>
    </div>
  )
}

export default Item
