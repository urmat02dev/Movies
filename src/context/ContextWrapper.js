import React, {useState} from 'react';
import {LanguageContext} from "./index";

const ContextWrapper = ({children}) => {
    const [language,setLanguage] = useState("en-US")
    return (
        <LanguageContext.Provider value={{language,setLanguage}}>
            {children}
        </LanguageContext.Provider>
    );
};

export default ContextWrapper;