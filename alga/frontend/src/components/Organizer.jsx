// src/components/Organizer.jsx
import { useState } from 'react';
import './organizer.scss';

const Organizer = () => {
    // Darbuotojų sąrašas su nauja savybe 'assignedClientsCount'
    const [employees, setEmployees] = useState([
        { id: 'emp1', name: 'Petras', assignedClientsCount: 0 },
        { id: 'emp2', name: 'Jonas', assignedClientsCount: 0 },
        { id: 'emp3', name: 'Antanas', assignedClientsCount: 0 },
        { id: 'emp4', name: 'Kazys', assignedClientsCount: 0 },
    ]);

    // Klientų sąrašas konkrečiai dienai (imitacija)
    const [clients, setClients] = useState([
        { id: 'client1', name: 'Klientas A', assignedEmployee: null },
        { id: 'client2', name: 'Klientas B', assignedEmployee: null },
        { id: 'client3', name: 'Klientas C', assignedEmployee: null },
        { id: 'client4', name: 'Klientas D', assignedEmployee: null },
        { id: 'client5', name: 'Klientas E', assignedEmployee: null },
        { id: 'client6', name: 'Klientas F', assignedEmployee: null },
        { id: 'client7', name: 'Klientas G', assignedEmployee: null },
        { id: 'client8', name: 'Klientas H', assignedEmployee: null },
        { id: 'client9', name: 'Klientas I', assignedEmployee: null },
        { id: 'client10', name: 'Klientas J', assignedEmployee: null },
    ]);

    const [selectedDay, setSelectedDay] = useState("2025-05-21"); // Galite pakeisti į bet kurią datą
    const MAX_CLIENTS_PER_EMPLOYEE = 4; // Maksimalus klientų skaičius vienam darbuotojui

    // Funkcija, kuri priskiria darbuotoją klientui
    const assignEmployeeToClient = (clientId, employeeId) => {
        // Pirmiausia patikrinti, ar darbuotojas gali priimti daugiau klientų
        const targetEmployee = employees.find(emp => emp.id === employeeId);
        if (targetEmployee && targetEmployee.assignedClientsCount >= MAX_CLIENTS_PER_EMPLOYEE) {
            alert(`Darbuotojas ${targetEmployee.name} jau turi ${MAX_CLIENTS_PER_EMPLOYEE} priskyrimus ir negali priimti daugiau.`);
            return; // Sustabdyti priskyrimo procesą
        }

        // Atnaujinti klientų sąrašą
        setClients(prevClients => {
            const newClients = prevClients.map(client =>
                client.id === clientId ? { ...client, assignedEmployee: employeeId } : client
            );
            return newClients;
        });

        // Atnaujinti darbuotojų sąrašą, padidinant priskyrimų skaičių
        setEmployees(prevEmployees => {
            const newEmployees = prevEmployees.map(emp =>
                emp.id === employeeId ? { ...emp, assignedClientsCount: emp.assignedClientsCount + 1 } : emp
            );
            return newEmployees;
        });
    };

    // Funkcija, kuri pašalina darbuotojo priskyrimą nuo kliento
    const unassignEmployeeFromClient = (clientId) => {
        let unassignedEmployeeId = null;

        // Atnaujinti klientų sąrašą
        setClients(prevClients => {
            const newClients = prevClients.map(client => {
                if (client.id === clientId) {
                    unassignedEmployeeId = client.assignedEmployee; // Išsaugoti darbuotojo ID prieš nuimant priskyrimą
                    return { ...client, assignedEmployee: null };
                }
                return client;
            });
            return newClients;
        });

        // Atnaujinti darbuotojų sąrašą, sumažinant priskyrimų skaičių
        if (unassignedEmployeeId) {
            setEmployees(prevEmployees => {
                const newEmployees = prevEmployees.map(emp =>
                    emp.id === unassignedEmployeeId ? { ...emp, assignedClientsCount: emp.assignedClientsCount - 1 } : emp
                );
                return newEmployees;
            });
        }
    };

    // Funkcija, kuri grąžina laisvų darbuotojų sąrašą
    // Darbuotojas laikomas laisvu, jei jo assignedClientsCount < MAX_CLIENTS_PER_EMPLOYEE
    const getAvailableEmployees = () => {
        return employees.filter(emp => emp.assignedClientsCount < MAX_CLIENTS_PER_EMPLOYEE);
    };

    // Funkcija, kuri grąžina nepaskirtų klientų sąrašą
    const getUnassignedClients = () => {
        return clients.filter(client => client.assignedEmployee === null);
    };

    // Imituoja dienos pasirinkimą
    const handleDayChange = (day) => {
        setSelectedDay(day);
        // Resetinam klientų priskyrimus ir darbuotojų užimtumą,
        // imituojant naujos dienos duomenų įkėlimą.
        setClients([
            { id: 'client1', name: 'Klientas A', assignedEmployee: null },
            { id: 'client2', name: 'Klientas B', assignedEmployee: null },
            { id: 'client3', name: 'Klientas C', assignedEmployee: null },
            { id: 'client4', name: 'Klientas D', assignedEmployee: null },
            { id: 'client5', name: 'Klientas E', assignedEmployee: null },
            { id: 'client6', name: 'Klientas F', assignedEmployee: null },
            { id: 'client7', name: 'Klientas G', assignedEmployee: null },
            { id: 'client8', name: 'Klientas H', assignedEmployee: null },
            { id: 'client9', name: 'Klientas I', assignedEmployee: null },
            { id: 'client10', name: 'Klientas J', assignedEmployee: null },
        ]);
        setEmployees(prevEmployees => prevEmployees.map(emp => ({ ...emp, assignedClientsCount: 0 })));
    };

    return (
        <div className="organizer-container">
            <h2>Darbuotojų paskirstymo organizatorius</h2>

            <div className="day-selector">
                <h3>Pasirinkti dieną:</h3>
                <button onClick={() => handleDayChange("2025-05-21")} className={selectedDay === "2025-05-21" ? "active" : ""}>Gegužės 21</button>
                <button onClick={() => handleDayChange("2025-05-22")} className={selectedDay === "2025-05-22" ? "active" : ""}>Gegužės 22</button>
                <button onClick={() => handleDayChange("2025-05-23")} className={selectedDay === "2025-05-23" ? "active" : ""}>Gegužės 23</button>
            </div>

            <div className="current-day-assignments">
                <h3>Priskyrimai dienai: {selectedDay}</h3>
                <div className="assignment-grid">
                    <div className="clients-list">
                        <h4>Klientai:</h4>
                        {clients.map(client => (
                            <div key={client.id} className="client-item">
                                <span className="client-name">{client.name}</span>
                                {client.assignedEmployee ? (
                                    <div className="assigned-employee">
                                        <span className="employee-name">
                                            Priskirta: {employees.find(emp => emp.id === client.assignedEmployee)?.name}
                                        </span>
                                        <button onClick={() => unassignEmployeeFromClient(client.id)} className="unassign-button">X</button>
                                    </div>
                                ) : (
                                    <div className="assign-dropdown">
                                        <select
                                            onChange={(e) => assignEmployeeToClient(client.id, e.target.value)}
                                            value=""
                                        >
                                            <option value="" disabled>Priskirti darbuotoją</option>
                                            {getAvailableEmployees().map(emp => (
                                                <option key={emp.id} value={emp.id}>
                                                    {emp.name} ({MAX_CLIENTS_PER_EMPLOYEE - emp.assignedClientsCount} laisvos vietos)
                                                </option>
                                            ))}
                                            {/* Papildoma parinktis leisti perpriskirti esamam darbuotojui (jei reikia) */}
                                            {client.assignedEmployee && (
                                                <option value={client.assignedEmployee}>
                                                    Jau priskirtas: {employees.find(emp => emp.id === client.assignedEmployee)?.name}
                                                </option>
                                            )}
                                        </select>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="summary-section">
                        <h4>Darbuotojų apkrova:</h4>
                        <ul className="employee-load-list">
                            {employees.map(emp => (
                                <li key={emp.id}>
                                    {emp.name}: {emp.assignedClientsCount} / {MAX_CLIENTS_PER_EMPLOYEE} klientų
                                </li>
                            ))}
                        </ul>

                        <h4>Nepriskirti klientai:</h4>
                        <ul className="unassigned-clients-list">
                            {getUnassignedClients().length > 0 ? (
                                getUnassignedClients().map(client => (
                                    <li key={client.id}>{client.name}</li>
                                ))
                            ) : (
                                <li>Visi klientai priskirti</li>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Organizer;