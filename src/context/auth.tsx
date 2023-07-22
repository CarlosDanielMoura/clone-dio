import { createContext, useEffect, useState } from "react";
import { IUser } from "../types/users";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import { ILoginData, IAuthContextProviderProps, IAuthContext } from "./type";
import { toast } from "react-toastify";

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthContextProvider = ({
    children,
}: IAuthContextProviderProps) => {
    const [user, setUser] = useState<IUser>({} as IUser);
    const [erroLogin, setErroLogin] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (loginData: ILoginData) => {
        try {
            const response = await api.get(
                `/users?email=${loginData.email}&password=${loginData.password}`
            );

            if (response.data.length === 1) {
                setUser(response.data[0]);
                setErroLogin("Logado com sucesso");
                navigate("/feed"); // Redirecionar para a página de feed após o login
            } else {
                setErroLogin("Login inválido");
            }
        } catch (error) {
            setErroLogin("Ocorreu um erro ao fazer login");
        }
    };

    const handleSignOut = () => {
        setUser({} as IUser);
    };

    useEffect(() => {
        if (erroLogin !== "") {
            toast.error(erroLogin, {
                theme: "colored",
            });
            setErroLogin("");
        }
    }, [erroLogin]);

    return (
        <AuthContext.Provider value={{ user, handleLogin, handleSignOut }}>
            {children}
        </AuthContext.Provider>
    );
};
