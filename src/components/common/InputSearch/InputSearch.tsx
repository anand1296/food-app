// import "./InputSearch.css"

const InputSearch = ({placeholder='Search...', onSearch} : {
    placeholder?: string,
    onSearch: (text: string) => void
}) => {
  return (
    <div className='searchbox w-1/2 flex px-4 py-3 mb-8 mx-auto rounded-3xl border-2 border-solid border-[#bcbcbc] bg-aubergine p-test'>
        <span className="icon flex items-center pr-2 text-lg scale-100">🔎</span>
        <input className="w-full text-2xl border-none focus:outline-none bg-aubergine" placeholder={placeholder} type="search" onChange={(event) => onSearch(event.target.value)} />
    </div>
  )
}

export default InputSearch;