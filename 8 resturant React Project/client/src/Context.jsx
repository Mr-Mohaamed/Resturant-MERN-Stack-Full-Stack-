import React, { createContext } from 'react';

const ContextProvider = ({ children }) => {
	const contextData = createContext();
	const name = 'mohamed';
	return <contextData.Provider value={name}>{children}</contextData.Provider>;
};

export default ContextProvider;
