import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {createContext, useEffect, useState} from 'react';
import { BASE_URL } from '../config/config';
//import Cookie from 'react-native-cookie'

export const AuthContext = createContext();

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
                withCredentials: true,
            })
            .then(res => {
                let userInfo = res.data;
                setUserInfo(userInfo);
                AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
                setIsLoading(false);
                console.log(res);
                console.log(`${userInfo.accessToken}`);
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
                    headers: {Authorization: `Bearer ${userInfo.accessToken}`},
                },
            )
            .then(res => {
                console.log(res);
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
    }, [userInfo]); // [] is used here to ensure single render
      

    return (
        <AuthContext.Provider
            value={{
                isLoading,
                userInfo,
                splashLoading,
                login,
                logout
            }}>{children}
        </AuthContext.Provider>
    );
};

