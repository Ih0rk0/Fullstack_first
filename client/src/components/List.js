import Item from "./Item"
function List ({data}){
  console.log(data)
  const allItems=data.map(item=>{
    const {user_id,user_name,salary}=item
    return <Item key={user_id} name={user_name} salary={salary}/>
  })
  return(
      <>
      {allItems}
      </>
  )
}
export default List