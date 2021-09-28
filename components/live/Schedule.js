const saturday = [
    { type: 'logistic', time: "9:00 - 10:00 am", title: 'Registration/Livestream starts', description: '' },
    { type: 'logistic', time: "10:00 - 10:45 am", title: 'Opening ceremony', description: '' },
    { type: 'logistic', time: "10:45 - 11:15 am", title: 'Team matching', description: '' },
    { type: 'hacking', time: "11:00 am", title: 'Hacking starts!', description: '' },
    { type: 'workshop', time: "1:00 - 2:00 pm", title: 'Workshop 1', description: '' },
    { type: 'activity', time: "2:00 - 3:00 pm", title: 'Activity 1', description: '' },
    { type: 'workshop', time: "3:00 - 4:00 pm", title: 'Workshop 2', description: '' },
    { type: 'activity', time: "4:00 - 5:00 pm", title: 'Activity 2', description: '' },
    { type: 'workshop', time: "5:00 - 6:00 pm", title: 'Workshop 3', description: '' },
    { type: 'activity', time: "9:00 pm", title: 'Activity 3', description: '' },
]
const sunday = [
    { type: 'activity', time: "12:00 am", title: 'Activity 4', description: '' },
    { type: 'hacking', time: "11:00 am", title: 'Hacking ends!', description: '' },
    { type: 'hacking', time: "12:00 - 2:00 pm", title: 'Judging', description: '' },
    { type: 'logistic', time: "2:30 - 3:15 pm", title: 'Closing ceremony', description: '' },
]

// TODO: these
const iconMappings = {
    'logistic' : null,
    'activity': null,
    'workshop': null,
    'hackathon': null
}

const renderDay = (events) => {
    // TODO: implement
}

export default function Schedule() {
    return <div className="top-margin">
        <h2>Saturday, October 2nd</h2>
        {renderDay(saturday)}
        <h2>Sunday, October 3rd</h2>
        {renderDay(sunday)}
    </div>;
}