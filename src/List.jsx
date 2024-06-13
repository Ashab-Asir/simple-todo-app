export default function List({name,completed,id,toggleTodo,deleteItem}) {
  return (
    <li className="list-item">
    <label className="list-item-label">
      <input type="checkbox" checked={completed} data-list-item-checkbox 
      onChange={(e)=>{toggleTodo(id,e.target.checked)}}/>
      <span data-list-item-text>{name}</span>
    </label>
    <button data-button-delete onClick={()=>deleteItem(id)}>Delete</button>
</li>
  )
}
