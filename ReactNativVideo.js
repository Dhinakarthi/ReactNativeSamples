import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Video from "react-native-video";
import convert from "react-native-video-cache";
import convertToProxyURL from "react-native-video-cache";

const App1 = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 20, color: 'black' }}>
                RTSP Video Player
            </Text>
            {isOpen && <Video
                source={{
                    uri: convert('rtsp://admin:Proglint321%24@proglintlab.zapto.org:8001/unicast/c8/s0/live')
                }}
                bufferingStrategy={{
                    minBufferMs: 2500, // Minimum buffer before playback starts
                    maxBufferMs: 3000, // Maximum buffer allowed
                    bufferForPlaybackMs: 2500, // Buffer required to start playback
                    bufferForPlaybackAfterRebufferMs: 2500, // Buffer required after rebuffering
                }}
                ignoreSilentSwitch="ignore"
                playWhenInactive={false}
                playInBackground={false}
                controls={false}
                disableFocus={true}
                repeat={true}
                hideShutterView
                minBufferMs={5}
                resizeMode="cover"
                style={{ width: 300, height: 200, marginTop: 20 }}
            />}
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

export default App1;