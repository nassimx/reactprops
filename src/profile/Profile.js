import React from 'react'
import PropTypes from 'prop-types';

const MyProfile = (props) => {
    return (
        <div>
            <h1> {props.name}</h1>
            <h3>{props.bio}</h3>
            <h5>{props.profession}</h5>
        </div>
    )
}

export default MyProfile

MyProfile.propTypes = {
    name: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
    handleName: PropTypes.func

}