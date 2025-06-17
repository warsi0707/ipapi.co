import { memo } from "react"

function Detail({title, value}) {
  return (
    <div className="flex justify-between w-full p-2 bg-gray-400 rounded-sm">
        <p>{title}</p>
        <p>{value}</p>
    </div>
  )
}


export default  memo(Detail)
