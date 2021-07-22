import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function Button(props) {
    
    const renderLink = () => {
        return (
            <Link to={props.link}>
                {renderButton()}
            </Link>
        )
    }

    const renderButton = () => {
        return (
            <button className={'btn ' + props.color}>
                {props.text}
            </button>
        )
    }
    
    return (
        <div className={props.float && 'floating-button floating-button-' + props.float}>
            {props.link ? renderLink() : renderButton()}
        </div>

    )
}

Button.defaultProps = {
    color: 'btn-primary',
    float: ''
}

Button.propTypes = {
    text: PropTypes.string.isRequired
}

export default Button
