import { createContext, useState } from 'react';

const CloseContext = createContext();

function CloseProvider({ children }) {
    const [isClose, setIsClose] = useState(false);

    const toggleSetIsClose = (value) => {
        setIsClose(value);
    }

    const value = {
        isClose,
        toggleSetIsClose
    }

    return (
        <CloseContext.Provider value={value}>
            {children}
        </CloseContext.Provider>
    )
}

export { CloseProvider, CloseContext }