import Button from '../shared/Button';

export default function Info() {
    return <>
        <h1>Sponsors</h1>
        <div className="flex-container">
            <div>
                <p>A big thank you to our sponsors!</p>
                <p>Interested in sponsoring?</p>
                <Button expand onClick={() => window.open('mailto:mcgillaicontact@gmail.com')}>
                    Sponsor us!
                </Button>
            </div>
        </div>
     </>
}