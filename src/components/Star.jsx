import { PropTypes } from "prop-types"
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarOutlineIcon from '@mui/icons-material/StarOutline';


function Star({ rating }) {
    if (typeof rating === 'undefined') {
        return <p>Loading...</p>; // or any other loading indicator/message
      }
    const { rate, count } = rating;
    console.log(rate)
    const ratingStar = Array.from({ length: 5 }, (elem, index) => {
        let number = index + 0.5;
        return (
            <span key={index}>
                {
                    rate >= index + 1 ? (
                        <StarIcon color="warning"/>
                    ) : rate >= number ? (
                        <StarHalfIcon color="warning"/>
                    ) : (
                        <StarOutlineIcon color="warning"/>
                    )
                }
            </span>
        )
    }
    )
    return (
        <div className="mt-4 flex items-center">
            {ratingStar}
            <p className="ml-4">({count} customer reviews)</p>
        </div>
    )
}

Star.propTypes = {
    rating: PropTypes.object
}

export default Star
