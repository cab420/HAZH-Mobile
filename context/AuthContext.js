import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {createContext, useEffect, useState} from 'react';

export const AuthContext = createContext();

const BASE_URL = "192.168.1.101:3002";

export const AuthContextProvider = ({children}) => {
    const [userInfo, setUserInfo] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [splashLoading, setSplashLoading] = useState(false);
    
    const login = (email, password) => {
        
        setIsLoading(true);
        
        axios
            .post(`${BASE_URL}/api/auth/login`, {
                email,
                password,
            })
            .then(res => {
                let userInfo = res.data;
                setUserInfo(userInfo);
                AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
                setIsLoading(false);
            }).catch(e => {// error handling to be changed here
                console.log(`login error ${e}`);
                setIsLoading(false);
        });  
    };

    const logout = () => {
            
        setIsLoading(true);

        axios
            .post(
                `${BASE_URL}/api/auth/logout`,
                {},
                {
                    headers: {Authorization: `Bearer ${userInfo.access_token}`},
                },
            )
            .then(res => {
                console.log(res.data);
                AsyncStorage.removeItem('userInfo');
                setUserInfo({});
                setIsLoading(false);
            })
            .catch( e => {// error handling to be changed here
                console.log(`logout error ${e}`);
                setIsLoading(false);
            });
    };
     //fucked out rn

    const isLoggedIn = async () => {
        
        try {
            setSplashLoading(true);

            let userInfo = await AsyncStorage.getItem('userInfo');
            userInfo = JSON.parse(userInfo);

            if(userInfo) {
                setUserInfo(userInfo);
            }
            setSplashLoading(false);
        } catch(e) {
            setSplashLoading(false);
            console.log(`logged in error ${e}`);
        }
    };
    
    useEffect(() => {
        isLoggedIn();
    }, []); // [] is used here to ensure single render
    

    /*//new attempt based on desktop app
    useEffect(() => {
    localStorage.setItem("user", JSON.stringify(userInfo));
    }, [userInfo]);
    */

    return (
        <AuthContext.Provider
            value={{
                isLoading,
                userInfo,
                splashLoading,
                login,
                logout
            }}> {children}
        </AuthContext.Provider>
    );
};

