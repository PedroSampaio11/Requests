import { useState } from "react"
export const ListasRender = () => {
  const [punchs] = useState([
    {id:1, punch: "cruzado"},
    {id:2,punch: "direto"},
    {id:3,punch: "jab"}
  ])
  return (
    <div>
      <h1> Lista Render </h1>
      <ul>
        {punchs.map((pun) => (
          <li key={pun.id}>
            {pun.punch}
          </li>
        ))}
      </ul>
    </div>
  )
}
