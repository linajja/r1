function ColorList(props) {
    return (
        <div>
            {props.rainbow
                .filter((c) => c.pos === 'top')
                .map((c, i) => (
                    <div
                        key={i}
                        style={{
                            backgroundColor: c.color,
                            height: c.size + 'px',
                        }}
                        className="rainbow"
                    >
                        {} 
                        <))};>

                        <div className="rainbow" style={{background: 'black', height='20px'}}</div>
            {props.rainbow
                .filter((c) => c.pos === 'bottom')
                .map((c, i) => (
                    <div
                        key={i}
                        style={{
                            backgroundColor: c.color,
                            height: c.size + 'px',
                        }}
                        className="rainbow"
                    >
                        {}
                   
                ))};
        </div>
    );
}

export default ColorList;
