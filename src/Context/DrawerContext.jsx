import { createContext, useContext, useState } from "react"

const DrawerContext = createContext()

export function DrawerProvider ({children}){
    const [isOpen, setIsOpen] = useState(false)

    return(
        <DrawerContext.Provider value={{isOpen,setIsOpen}}>
            {children}
            </DrawerContext.Provider>
    )
}

export function useDrawer() {
  return useContext(DrawerContext)
}