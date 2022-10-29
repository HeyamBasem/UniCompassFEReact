import Group from './Group';
import { months } from  '../util/tools';


export default function EditableUserProfile({
    stored,
    startEditCallback
}) {

    return <div>
        <Group>
            <h5>Name:</h5> {stored.name}
        </Group>
        <Group>
            <h5>Birthday:</h5> {months.getShortName(stored.month)} {stored.day}
        </Group>
        <Group>
            <button
                className='profileButton'
                onClick={startEditCallback}
            >Edit</button>
        </Group>
    </div>
}