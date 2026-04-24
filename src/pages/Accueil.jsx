import { useEffect, useState } from 'react';
import api from '../api/axiosConfig'; // Assurez-vous que le chemin est correct selon où est votre dossier api
import HeroSection from '../components/HeroSection';
import DestinationCard from '../components/DestinationCard';

const Accueil = () => {
    const [destinations, setDestinations] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Remplacer /destinations par la route exacte de votre API Laravel
        api.get('/destinations')
            .then(res => {
                setDestinations(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    if (loading) return <div className="text-center mt-5"><div className="spinner-border text-primary"></div></div>;

    return (
        <div>
            <HeroSection />
            <div className="container">
                <h2 className="text-center mb-5 text-primary fw-bold">Nos Destinations Populaires</h2>
                <div className="row g-4">
                    {destinations.map(dest => (
                        <div className="col-md-4" key={dest.id}>
                            <DestinationCard destination={dest} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default Accueil;