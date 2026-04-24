import { useEffect, useState } from 'react';
import api from '../../api/axiosConfig';
import StatCard from '../../components/StatCard';
import AdminLayout from '../../components/AdminLayout';

const AdminDashboard = () => {
    const [stats, setStats] = useState({ voyages: 0, reservations: 0, users: 0 });

    useEffect(() => {
        // À adapter selon la route créée par votre binôme sur Laravel
        api.get('/admin/stats').then(res => setStats(res.data)).catch(err => console.error(err));
    }, []);

    return (
        <AdminLayout>
            <h2 className="mb-4 text-primary">Tableau de Bord</h2>
            <div className="row g-4">
                <div className="col-md-4"><StatCard title="Voyages" value={stats.voyages} color="bg-primary" /></div>
                <div className="col-md-4"><StatCard title="Réservations" value={stats.reservations} color="bg-warning" /></div>
                <div className="col-md-4"><StatCard title="Utilisateurs" value={stats.users} color="bg-success" /></div>
            </div>
        </AdminLayout>
    );
};
export default AdminDashboard;