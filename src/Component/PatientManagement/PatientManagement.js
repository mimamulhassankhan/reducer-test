import React, { useReducer } from 'react';
import { patientReducer, patientState } from '../Reducers/PatientsReduces';

const PatientManagement = () => {
    const [state, dispatch] = useReducer(patientReducer, patientState);

    return (
        <div>
            <h1>Patient Management : {state.patients.length}</h1>
        </div>
    );
};

export default PatientManagement;