import "../styles/Button.css"

function Button({
    label,
    color = "primary",
    variant = "solid",
    onClick
}) {
    return (
        <button
            className={`btn-${color} btn-${variant}`}
            onClick={onClick}
        >{label}</button>
    )
}

export default Button