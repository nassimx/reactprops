import React from 'react'
import PropTypes from 'prop-types';

const MyProfile = ({ name, bio, profession, msg, children }) => {
    return (
        <div>
            {children}
            <h1> {name}</h1>
            <h3>{bio}</h3>
            <h5>{profession}</h5>
            <h4>{msg}</h4>
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

MyProfile.defaultProps = {
    msg: "good luck"
}