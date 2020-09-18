export const patientState = {
    patients : []
}

export const patientReducer = (state, action) => {
    switch(action.type){
        case 'ADD_PATIENT':
            const newPatient = {
                id : action.id,
                name : action.name
            }
            const allPatients = [...state.patients, newPatient];
            return {patients : allPatients};
        case 'REMOVE_PATIENT':
            const remainigPatients = state.patients.filter(pt => pt.id !== action.id);
            return {patients: remainigPatients};
        default:
            return state;
    }
}