function Tree(props) {
    if (props.size > 4) {
        return <h4 style={{ color: 'red' }}>{props.size}</h4>;
    }
    if (props.size > 2) {
        return <h4 style={{ color: 'green' }}>{props.size}</h4>;
    }
    return null;
}
s;
export default Tree;
