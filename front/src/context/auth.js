import axios from "axios";
import { useState , useEffect , useContext , createContext } from "react";

// use context for only small fxn
const AuthContext = createContext()

// we use this cause to display the user in navbar
const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({
      user: null,
      token: "",
    });

    //header for authorization
    axios.defaults.headers.common['Authorization'] = auth?.token 
    
    useEffect(() => {
      const data = localStorage.getItem("auth");
      if (data) {
        const parseData = JSON.parse(data);
        setAuth({
          ...auth,
          user: parseData.user,
          token: parseData.token,

        });
      }
       //eslint-disable-next-line
    }, [ ]);
    return(
        <AuthContext.Provider value={[auth,setAuth]}>
            {children}
        </AuthContext.Provider>
    )
}

// custom hook
const useAuth = () => useContext(AuthContext)

export { useAuth , AuthProvider}