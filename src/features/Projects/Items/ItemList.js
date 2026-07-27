import React from 'react';
import "./ItemList.css";
import {projectsData} from "./ProjectData";
import Item from "./Item";

const ItemList = () => {
  return (
    <div>
      <div className = "personal_projects">

        {projectsData.map((item) => {
            return <Item item = {item} key = {item.id}/>
        })}

      </div>

    </div>
  )
}

export default ItemList;
