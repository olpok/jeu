import React from 'react'

function SentenceList(props) {

    const arr = props.data;

    const listItems =
        arr.map((sentence, index) =>
            <div key={index}>{sentence}</div>
        );
    return <div>{listItems}</div>

}

export default SentenceList;
