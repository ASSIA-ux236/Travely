import { useEffect, useState } from 'react';
import api from '../../api/axiosConfig';
import AdminLayout from '../../components/AdminLayout';

const ManageVoyages = () => {
    const [voyages, setVoyages] = useState([]);

    const fetchVoyages = () => {
        api.get('/destinations').then(res => setVoyages(res.data));
    };

    useEffect(() => fetchVoyages(), []);

    const handleDelete = (id) => {
        if (window.confirm("Êtes-vous sûr de vouloir supprimer ce voyage ?")) {
            api.delete(`/destinations/${id}`).then(() => fetchVoyages());
        }
    };

    return (
        <AdminLayout>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="text-primary">Gestion des Voyages</h3>
                <button className="btn btn-success">Ajouter un Voyage</button>
            </div>
            
            <div className="table-responsive shadow-sm rounded">
                <table className="table table-hover mb-0">
                    <thead className="table-primary">
                        <tr>
                            <th>ID</th><th>Nom</th><th>Pays</th><th>Prix</th><th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {voyages.map(v => (
                            <tr key={v.id}>
                                <td>{v.id}</td>
                                <td>{v.nom}</td>
                                <td>{v.pays}</td>
                                <td>{v.prix} DH</td>
                                <td>
                                    <button className="btn btn-sm btn-outline-primary me-2">Modifier</button>
                                    <button onClick={() => handleDelete(v.id)} className="btn btn-sm btn-outline-danger">Supprimer</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </AdminLayout>
    );
};
export default ManageVoyages;