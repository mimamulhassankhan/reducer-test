import React, { useReducer, useRef } from 'react';
import { patientReducer, patientState } from '../Reducers/PatientsReduces';

const PatientManagement = () => {
    const nameRef = useRef();
    const [state, dispatch] = useReducer(patientReducer, patientState);

    const handleSubmit = (event) =>{
        dispatch({
            type: 'ADD_PATIENT', 
            name: nameRef.current.value, 
            id: state.patients.length
        });
        nameRef.current.value = "";
        event.preventDefault();
    }

    return (
        <div>
            <h1>Patient Management : {state.patients.length}</h1>
            <form onSubmit={handleSubmit}>
                <input ref={nameRef} type="text"/>
            </form>
            {
                state.patients.map(pt => <li key={pt.id} onClick={() => dispatch({type: "REMOVE_PATIENT", id: pt.id})}>{pt.name}</li>)
            }
            
        </div>
    );
};

export default PatientManagement;