
function ColorMark(props){
    return(
        <div className="color-mark" style={{backgroundColor: props.color, width: props.size, height: props.size}}></div>
    )

}

export default ColorMark;