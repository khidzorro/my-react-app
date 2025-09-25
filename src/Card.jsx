import profilePic from './assets/ATA_logo.png'


function Card() {
    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture"></img>
            <h2 className="card-title">Aerojet Aviation</h2>
            <p className="card-text">We service aeroplanes</p>
        </div>
        
        
    );
}

export default Card