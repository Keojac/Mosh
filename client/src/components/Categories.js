import { Link } from "react-router-dom";


const Categories = () => {
    return (
        <div>
            <div className="category">
                <Link to="/event/art">
                    <img src="https://img.freepik.com/free-photo/closeup-shot-andrew-jackson-face-dollar-bill-with-lines-painted-eyes-mouth_181624-12344.jpg?w=996&t=st=1660806079~exp=1660806679~hmac=b268371d4edf0d00b9f81dbb6706e330fdad7d780a401653c996a810d4e5c4f2" alt="cash with red lines painted on" />
                    <h3>Art</h3>
                </Link>
            </div>
            <div className="category">
                <Link to="/event/music">
                    <img src="https://img.freepik.com/free-photo/drummer-using-drum-sticks-hitting-snare-drum-with-splashing-water-black-background-studio-lighting-close-up_169016-14165.jpg?w=996&t=st=1660806291~exp=1660806891~hmac=e0786e1209fba08befcdb4d25ef59917a899aadfea65788b6450386aa5bdb758" alt="liquid splashing from drum being player" />
                    <h3>Music</h3>
                </Link>
            </div>
            <div className="category">
                <Link to="/event/sports">
                    <img src="https://img.freepik.com/free-photo/soccer-player-action-stadium_1150-14598.jpg?w=996&t=st=1660806468~exp=1660807068~hmac=153e4703641f46cf3d8112640c564a24c40ee7ebabc0f6fbac6485d9e3dac35c" alt="person dribbling soccer ball" />
                    <h3>Sports</h3>
                </Link>
            </div>
            <div className="category">
                <Link to="/event/corporate">
                    <img src="https://img.freepik.com/free-photo/aerial-view-business-data-analysis-graph_53876-146152.jpg?w=996&t=st=1660806549~exp=1660807149~hmac=a815541812fbfaffa04f632a02cb8443ce9daaada1812c0d72b076e40f3c6489" alt="eagle eye of business meeting" />
                    <h3>Corporate</h3>
                </Link>
            </div>
            <div className="category">
                <Link to="/event/community">
                    <img src="https://img.freepik.com/free-photo/friends-drinking-eating-tailgate-party_53876-125376.jpg?w=996&t=st=1660806662~exp=1660807262~hmac=ac1363a37c0d5f3782b840574971bdb89547204cb6bb17fd1df538de4beb798b" alt="people having a bbq" />
                    <h3>Community</h3>
                </Link>
            </div>
            <div className="category">
                <Link to="/event/virtual">
                    <img src="https://img.freepik.com/free-photo/remote-meeting-woman-working-from-home-during-coronavirus-covid-19-quarantine-remote-office-concept_155003-12406.jpg?w=996&t=st=1660806756~exp=1660807356~hmac=31970f9f9acfa96ea9767091e5d6ae898c6a908c0383559b5fe461d247533eb0" alt="virtual meeting" />
                    <h3>Virtual</h3>
                </Link>
            </div>
        </div>
    )
}



export default Categories