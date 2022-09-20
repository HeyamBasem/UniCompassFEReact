// import { useState } from 'react';
import Group from './Group';
// import ColorBox from './ColorBox';
import { months } from  '../util/tools';
// import { months, calcButtonTextColor } from  '../util/tools';

export default function EditableUserProfile({
    stored,
    startEditCallback
}) {

    console.log()

    const buttonStyle = {
        // backgroundColor: stored.color,
        // color: calcButtonTextColor(stored.color)
    };

    return <div>
        <Group>
            <h5>Name:</h5> {stored.name}
        </Group>
        <Group>
            <h5>Birthday:</h5> {months.getShortName(stored.month)} {stored.day}
        </Group>
        {/* <Group>
            <h5>Favourite Color:</h5> <ColorBox color={stored.color}/>
        </Group> */}
        <Group>
            <button
                className='profileButton'
                style={buttonStyle}
                onClick={startEditCallback}
            >Edit</button>
        </Group>
    </div>
}