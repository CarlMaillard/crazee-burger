import { createContext } from 'react';

export default createContext({ 
    isModeAdmin: false,
    setIsModeAdmin: () => {},

    isCollapsed: false,
    setIsCollapsed: () => {},
    
    isEditSelected: false,
    setIsEditSelected: () => {},
    
    isAddSelected: false,
    setIsAddSelected: () => {},

    currentTabSelected: false,
    setCurrentTabSelected: () => {},

    menu : [],
    handleAddProduct: () => {},

    handleDelete: () => {} ,
    resetMenu: () => {},

    newProduct: [],
    setNewProduct: () => {}
    
})