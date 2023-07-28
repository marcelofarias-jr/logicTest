import {React, useState} from 'react';

export default function Teste01() {
    const firstText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur porta ullamcorper augue vitae euismod. Nullam ipsum mauris, volutpat ac efficitur non, vulputate non diam. Quisque quis massa ut mauris facilisis pulvinar quis ac felis. Nullam consectetur non odio et elementum. Phasellus sagittis ante dolor. Mauris a nisl erat. Pellentesque in felis ipsum. Nunc mollis, ante in auctor tincidunt, nisl nisl posuere odio, vitae vestibulum dolor sapien molestie ante. Phasellus diam erat, dapibus iaculis orci eu, malesuada accumsan massa. Suspendisse pre';
    const [text, setText] = useState(firstText);
    const secondText = 'Duis ut diam in tortor malesuada ultricies sed viverra nibh. Suspendisse ante mi, luctus a augue id, cursus vestibulum est. Quisque pulvinar, eros at ornare vehicula, tellus elit porttitor orci, at tempus ex purus at justo. Etiam eget arcu in nisl posuere pharetra quis eget tortor. Vestibulum sed tristique lorem. Aliquam ullamcorper est nisl, quis posuere lorem tempor id. Nulla nisl sem, euismod vel nulla non, finibus viverra nunc. Donec condimentum pulvinar risus, non venenatis odio dignissim eget. Morbi quis condimentum sapien. Proin bibendum laoreet nibh, vel interdum magna facilisis et. Morbi id dapibus erat, in dignissim lectus. Vivamus in magna vitae purus cursus iaculis. Sed lacinia neque neque, quis accumsan ante iaculis laoreet. Vivamus lacus sem, posuere eu purus id, condimentum finibus libero.';
    const changeText = () => {
        if (text === firstText) {
            setText(secondText);
        }
        if (text === secondText) {
            setText(firstText);
        }
    };
    return (
        <div>
            <div>
                <h1>Test 1: Manipulating the DOM with JavaScript</h1>
            </div>
            <div>
                <button onClick={() => changeText()}>Change text</button>
            </div>
            <div>
                <p>{text}</p>
            </div>
        </div>
    );
}
