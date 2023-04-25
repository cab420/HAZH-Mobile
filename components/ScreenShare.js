import React, {useState} from "react"
import {
    SafeAreaView,
    StatusBar,
    Text,
    NativeModules,
  } from 'react-native';
  import {
    RTCView,
    mediaDevices,
  } from 'react-native-webrtc';

export function startRecording() {
    
    const [stream, setStream] = useState(undefined);

    const startShare = async () => {
        mediaDevices.getDisplayMedia({video: true})
        .then(handleSuccess, handleError);
    };

    const stopShare = async () => {
        mediaDevices.stopShare();
    };

    const handleError = (error) => {
        console.log("Error", error);
    };

    const handleSuccess = async stream => {
        setStream(stream);
    };
    

}