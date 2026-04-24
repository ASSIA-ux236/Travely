import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../api/axiosConfig';

const DestinationDetail = () => {
    const { id } = useParams();
    const [dest, setDest] = useState(null);
    const [loading, setLoading] = useState(true);
    const token = localStorage.getItem('token');

    useEffect(() => {
        api.get(`/destinations/${id}`)
            .then(res => {
                setDest(res.data);
                setLoading(false);
            })
            .catch(err => console.error(err));
    }, [id]);

    if (loading) return <p className="text-center mt-5">Chargement...</p>;
    if (!dest) return <p className="text-center mt-5">Destination introuvable.</p>;

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-8">
                    <img src={dest.image} alt={dest.nom} className="img-fluid rounded shadow-sm mb-4" />
                    <h1 className="text-primary">{dest.nom}</h1>
                    <h4 className="text-muted mb-4">{dest.pays}</h4>
                    <h5>Description</h5>
                    <p>{dest.description}</p>
                </div>
                <div className="col-md-4">
                    <div className="card shadow-sm border-0 sticky-top" style={{ top: '20px' }}>
                        <div className="card-body">
                            <h3 className="card-title text-warning mb-3">{dest.prix} DH</h3>
                            <ul className="list-unstyled mb-4">
                                <li><i className="bi bi-clock"></i> Durée : {dest.duree} jours</li>
                            </ul>
                            
                            {token ? (
                                <Link to={`/reserver/${dest.id}`} className="btn btn-warning w-100 btn-lg">Réserver maintenant</Link>
                            ) : (
                                <Link to="/login" className="btn btn-primary w-100 btn-lg">Se connecter pour réserver</Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default DestinationDetail;