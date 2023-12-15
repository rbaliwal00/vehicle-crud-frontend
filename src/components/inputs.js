export const inputs = [
    {
        id: 1,
        name: "chassisNumber",
        type: "text",
        placeholder: '',
        label: 'Chassis Number',
        pattern: "^[A-Za-z0-9]{4}$",
        errorMessage: "Chassis Number should be 4 characters long",
        focused: false,
        required: true
    },
    {
        id: 2,
        name: "registrationNumber",
        type: "text",
        placeholder: '',
        label: 'Registration Number',
        errorMessage: "Registration Number should be 6 characters long",
        pattern: "^[A-Za-z0-9]{6}$",
        required: true
    },
    {
        id: 3,
        name: "latitude",
        type: "number",
        placeholder: '',
        label: 'Latitude',
        errorMessage: "Latitude cannot be empty",
        pattern: ".*\\S.*",
        required: true
    },
    {
        id: 4,
        name: "longitude",
        type: "number",
        placeholder: '',
        label: 'Longitude',
        errorMessage: "Longitude cannot be empty",
        pattern: ".*\\S.*",
        required: true
    },
    {
        id: 5,
        name: "driven",
        type: "number",
        placeholder: '',
        label: 'Driven',
        errorMessage: "Latitude cannot be empty",
        pattern: ".*\\S.*",
        required: true
    },
    {
        id: 6,
        name: "inspection",
        type: "datetime-local",
        placeholder: '',
        label: 'Last Inspections',
        pattern: ".*\\S.*",
        errorMessage: "Last Inspection date cannot be empty",
        required: true
    }
];