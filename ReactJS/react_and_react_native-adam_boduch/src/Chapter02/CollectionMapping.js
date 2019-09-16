import React from 'react';
import { render } from 'react-dom';

const array = ['Frist', 'Second', 'Third'];
const object = ['Frist', 'Second', 'Third'];

export default function CollectionMapping() {
    return(
        <section>
            <h1>Array</h1>
            <ul>
                {array.map(i => (
                    <li key={i}>{i}</li>
                ))}
            </ul>
            <h1>Object</h1>
            <ul>
                {Object.keys(object).map(i => (
                    <li key={i}>
                        <strong>{i}: </strong>{object[i]}
                    </li>
                ))}
            </ul>
        </section>
    );
}