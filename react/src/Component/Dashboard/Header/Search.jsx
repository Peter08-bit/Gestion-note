import './search.css'

const Search = () => {
  return (
    <div className='search-bar'>
        <form action="#" method='POST' className='search-form d-flex align-tems-center' >
            <input type="text" name='qurey' placeholder='Search' title='Enter search keyword' />
            <button type='submit' title='Search'> <i className='bi bi-search'></i></button>
        </form>
    </div>
  )
}

export default Search