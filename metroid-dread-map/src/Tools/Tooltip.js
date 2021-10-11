import './Tooltip.css';

export const Tooltip = ({src, text, id, alt}) => {
    return(
        <div id={id} className="tooltip">
            <div className="tooltiptext">
                <p>{text}</p>
                <img src={src} alt={alt}></img>
            </div>
        </div>
    )
}

