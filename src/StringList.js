import React from 'react'

function StringList(props) {

    const string = props.data;
    /*
        const listItems =
            arr.map((sentence, index) =>
                <div key={index}>{sentence}</div>
            );
        return <div>{listItems}</div>*/
    return <p>{string}</p>
}

export default StringList;