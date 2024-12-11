import { useState } from "react";
import { View, Text, TouchableOpacity, Button } from "react-native";
import { VLCPlayer, VlCPlayerView } from 'react-native-vlc-rtsp';

const App = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, color: 'black' }}>
        RTSP Video Player
      </Text>
      {isOpen && <VLCPlayer
        style={{ width: 300, height: 300 }}
        videoAspectRatio="16:9"
        source={{ uri: "rtsp://admin:Proglint321%24@proglintlab.zapto.org:8001/unicast/c8/s0/live" }}
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

export default App;