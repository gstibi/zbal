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
            <button className={'btn btn-' + props.color} onClick={props.onClick} type={props.type}>
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
    float: ''
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
}

export default Button
