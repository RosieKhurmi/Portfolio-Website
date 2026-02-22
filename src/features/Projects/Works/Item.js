import './Item.css'

const Item = ({item}) => {
  return (
    <div className = "card" key = {item.id}>  
      <img src = {item.img} alt = ''/>
      <div className="info">
        <h2>{item.id}</h2>
        <div className="tech-buttons">
          {item.tech.map((tech, index) => (
            <span key={index} className="tech-button">
              {tech}
            </span>
          ))}
        </div>
        <p>{item.text}</p>
        <a href = {item.code} target = "_blank" rel="noreferrer">
            {item.label || "GitHub"}<i class="uil uil-arrow-right"></i>
        </a>
      </div>
    </div>
  )
}

export default Item
