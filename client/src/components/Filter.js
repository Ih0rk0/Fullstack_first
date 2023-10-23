import './Filter.css'
import Select from 'react-select'
function Filter (){
  const options = [
    { value: 'all', label: 'Всі дауни' },
    { value: 'promotion', label: 'На підвищення ' },
    { value: 'vanilla', label: 'Сортувати за зп' },
    { value: 'sortByName', label: 'Сортувати за іменем' }
  ]
  const customStyles = {
    menu:(provided,state)=>({
      width:"200px",
      backgroundColor: 'black',
    }),
    options:(provided,state)=>({
      backgroundColor: 'black',
      width:"200px",
      '&:hover': {
        backgroundColor: '#f0f0f0', // Зміна кольору при наведенні
      },
    }),
    control: (provided, state) => ({
      ...provided,
      width:"200px",  
      backgroundColor: '#f2f2f2',
      border: '2px solid #ddd',
      borderRadius: '8px',
    }),
  };
  
  return(
    <>
    <div className="filter ">

      <input className='filter__chearch' type="text" name="search" />
      <Select options={options}  styles={customStyles} />
    </div>

    </>
  )
}
export default Filter