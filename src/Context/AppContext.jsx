import { createContext, useRef, useState } from "react";

export const AppContext = createContext();

function AppContextProvider({ children }) {
    
    const [loading, setLoading] = useState(false);
    const [theme, setTheme] = useState('light');
    const scrollRef = useRef(null);
    const scrollToTop = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    }

    const value = {
        loading, setLoading,
        theme, setTheme,
        scrollRef, scrollToTop
    };

    return <PortfolioContext.Provider value={value}>
        {children}
    </PortfolioContext.Provider>

}

export default AppContextProvider;