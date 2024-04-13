import './EventsCard.scss';

export function EventsCard({ Src, Title, Desc, Min }) {
    return (
        <div className="EventCard card text-bg-dark">
            <img src={Src} className="card-img" alt="..." loading='lazy' />
            <div className="card-img-overlay">
                <h3 className="card-title">{Title}</h3>
                <p className="card-text">
                    {Desc}</p>
                <p className="card-text"><small>Last updated {Min} mins ago</small></p>
            </div>
        </div>
    )
}