import { NavLink } from 'react-router-dom'
import PropTypes from "prop-types"

function Album({id,image,title,description}) {
    return (
        <NavLink to={`/item/${id}`}>
        <div className='m-2 p-4 bg-white w-52 h-80 flex flex-col items-center justify-center rounded-md'>
            <div className=''>
                <img src={image} alt='images' className='w-42 h-56 rounded-lg object-contain'/>
            </div>
            <div className='w-52 px-4 '>
                <div><p className='text-xl font-bold text-gray-900 truncate'>{title}</p></div>
                <div><p className='text-sm text-gray-600 truncate'>{description}</p></div>
            </div>
        </div>
        </NavLink>
    )
}

Album.propTypes={
    id:PropTypes.number,
    image:PropTypes.string,
    title:PropTypes.string,
    description:PropTypes.string,
}
export default Album