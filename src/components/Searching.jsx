import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from "react-redux"
import { searchReducer } from '../features/product/productSlice'

function Searching() {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(searchReducer(query));
  }, [query, dispatch])
  return (
    <div className='w-full  h-20 flex justify-center items-center'>
      <div className=''>
        <input type='text' className='outline-none  rounded-md border-2 w-80 h-10 bg-slate-200 p-2' placeholder='Search...' value={query} onChange={(e) => { setQuery(e.target.value) }} />
      </div>

    </div>
  )
}

export default Searching