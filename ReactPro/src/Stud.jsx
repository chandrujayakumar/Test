import React from 'react'
import PropTypes from 'prop-types'
function Stud(props) {
    return (

        <div className='stu'> 
            <p>
                Name: {props.name}
            </p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStud ? "Yes" :"No"}</p>
        </div>
    )
}
Stud.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStud: PropTypes.bool

}

export default Stud