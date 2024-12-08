import { useState } from "react";
import { View, Text, TouchableOpacity, Button } from "react-native";
import VlcPlayer from 'react-native-vlc-player';

const RNVP = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleSimpleVLCPlayerEvent = (eventName, event) => {
        console.log(eventName, JSON.stringify(event, null, 2))
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 20, color: 'black' }}>
                RTSP Video Player
            </Text>
            {isOpen && <VlcPlayer
                style={{
                    width: 300,
                    height: 200,
                }}
                paused={false}
                autoplay={true}
                source={{
                    uri: 'rtsp://admin:Proglint321%24@proglintlab.zapto.org:8001/unicast/c8/s0/live',
                    autoplay: true,
                    initOptions: ['--codec=avcodec'],
                }} />}
            <TouchableOpacity
                style={{ backgroundColor: 'black', padding: 10, width: 100, alignItems: 'center', marginTop: 20, justifyContent: 'center' }}
                onPress={() => {
                    setIsOpen(!isOpen);
                }}
            >
                <Text style={{ color: 'white', textAlign: 'center' }}>
                    {isOpen ? 'Close' : 'Open'}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default RNVP;