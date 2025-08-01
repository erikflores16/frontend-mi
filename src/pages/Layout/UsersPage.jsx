import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Home, Users as UsersIcon, FileText, BarChart3 } from "lucide-react";
import DataTable from 'react-data-table-component';

const UsersPage = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);

  const columns = [
    {
      name: 'ID',
      selector: row => row.id,
      sortable: true,
    },
    {
      name: 'Nombre',
      selector: row => row.nombre,
      sortable: true,
    },
    {
      name: 'Email',
      selector: row => row.email,
      sortable: true,
    },
    {
      name: 'Acciones',
      cell: (row) => (
        <div className="flex justify-center gap-2">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-lg transition">
            Editar
          </button>
          <button className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-lg transition">
            Eliminar
          </button>
        </div>
      ),
    },
  ];

  useEffect(() => {
    fetch("/api/usuarios")
      .then(res => res.json())
      .then(data => {
        setUsuarios(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error al obtener usuarios:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-72 bg-gray-900 text-white p-6 flex flex-col">
        <h1 className="text-2xl font-bold mb-6 text-center">Admin Panel</h1>
        <nav className="space-y-4 flex-1">
          <Link to="/Dashboard" className="flex items-center gap-3 p-3 hover:bg-gray-700 rounded-lg transition">
            <Home size={22} /> <span>Dashboard</span>
          </Link>
          <Link to="/Roles" className="flex items-center gap-3 p-3 hover:bg-gray-700 rounded-lg transition">
            <FileText size={22} /> <span>Roles</span>
          </Link>
          <Link to="/suscripciones" className="flex items-center gap-3 p-3 hover:bg-gray-700 rounded-lg transition">
            <BarChart3 size={22} /> <span>Suscripciones</span>
          </Link>
          <Link to="/usuarios" className="flex items-center gap-2 p-2 bg-blue-500 rounded-lg">
            <UsersIcon size={20} /> Usuarios
          </Link>
          <Link to="/Login" className="flex items-center gap-2 p-3 hover:bg-gray-700 rounded-lg">
            <UsersIcon size={20} /> Logout
          </Link>
        </nav>
        <div className="mt-auto text-center text-sm opacity-75">
          © {new Date().getFullYear()} Admin Panel
        </div>
      </aside>

      {/* Content */}
      <main className="flex-1 p-8">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Gestión de Usuarios</h2>

          <div className="mb-4">
            <Link
              to="/add-user"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition"
            >
              Añadir Usuario
            </Link>
          </div>

          <DataTable
            columns={columns}
            data={usuarios}
            progressPending={loading}
            pagination
            responsive
            highlightOnHover
            striped
            dense
          />
        </div>
      </main>
    </div>
  );
};

export default UsersPage;

