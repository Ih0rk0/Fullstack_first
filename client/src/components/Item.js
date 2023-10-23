import './Item.css'
function Item ({name,salary}){
    return(
        <>
            <div className="item">
                <div className="item__name">{name}</div>
                <div className="item__salary">{salary}$</div>
            </div>
        </>
    )
}
export default Item