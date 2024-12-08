import { useState } from "react";
import { View, Text, TouchableOpacity, Button } from "react-native";
import { VLCPlayer } from "react-native-vlc-media-player";

const App = () => {

  const [isOpen, setIsOpen] = useState(false);

  const handleSimpleVLCPlayerEvent = (eventName, event) => {
    console.log(eventName, JSON.stringify(event, null, 2))
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, color: 'black' }}>
        RTSP Video Player
      </Text>
      {isOpen && <VLCPlayer
        videoAspectRatio="16:9"
        source={{
          uri: 'rtsp://admin:Proglint321%24@proglintlab.zapto.org:8001/unicast/c8/s0/live',
          initType: 2,
          hwDecoderEnabled: 1,
          hwDecoderForced: 1,
          initOptions: [
            '--no-audio',
            '--rtsp-tcp',
            '--network-caching=150',
            '--rtsp-caching=150',
            '--no-stats',
            '--tcp-caching=150',
            '--realrtsp-caching=150',
          ],
        }}
        style={{ width: 300, height: 200, marginTop: 20 }}
        onBuffering={event => handleSimpleVLCPlayerEvent('onBuffering', event)}
        onEnd={event => handleSimpleVLCPlayerEvent('onEnd', event)}
        onError={event => handleSimpleVLCPlayerEvent('onError', event)}
        onLoad={event => console.log('onLoad', JSON.stringify(event, null, 2))}
        onPaused={event => handleSimpleVLCPlayerEvent('onPaused', event)}
        onPlaying={event => console.log('onPlaying', JSON.stringify(event, null, 2))}
        onProgress={event => console.log('onProgress', JSON.stringify(event, null, 2))}
        onStopped={event => handleSimpleVLCPlayerEvent('onStopped', event)}
        resizeMode="cover"
        autoAspectRatio={true}
        playInBackground={true}
        isLive={true}
        autoReloadLive={true}
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