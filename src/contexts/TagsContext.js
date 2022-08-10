import { createContext, useState } from 'react';

const TagsContext = createContext();

function TagsProvider({ children }) {
    const [valueTag, setValueTag] = useState(0);

    const toggleSetValueTag = (value) => {
        setValueTag(value);
    }

    const value = {
        valueTag,
        toggleSetValueTag
    }

    return (
        <TagsContext.Provider value={value}>
            {children}
        </TagsContext.Provider>
    )
}

export { TagsProvider, TagsContext }