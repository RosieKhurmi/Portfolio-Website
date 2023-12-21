import React from 'react'

const Item = ({item}) => {
  return (
    <div className = "card" key = {item.id}>
      <img src = {item.img} alt = ''/>
      <p>{item.id}</p>
      <a href = {item.code} target = "_blank">
          Code <i class="uil uil-arrow-right"></i>
      </a>
    </div>
  )
}

export default Item
