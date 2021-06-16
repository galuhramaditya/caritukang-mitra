import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Image, Text, View, ActivityIndicator } from 'react-native';
import { Button, Overlay } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

const Success = ({ styles, isSuccessOpen, setIsSuccessOpen }) => {
    const [isLoading, setIsLoading] = useState(true)

    return (
        <Overlay isVisible={!isSuccessOpen}>
            <StatusBar hidden={isSuccessOpen} />
            {
                isLoading ?
                    <View onTouchStart={() => setTimeout(() => setIsLoading(false), 5000)}>
                        <ActivityIndicator size="large" color="black" />
                        <Text style={{ marginTop: 20 }}>Waiting for the payment...</Text>
                    </View>
                    :
                    <View style={[styles.overlay]}>
                        <Text style={[styles.f_l, styles.bold, { textAlign: "center" }]}>The payment has been successful</Text>
                        <Image style={{ marginVertical: 20 }} source={require("../../img/success.png")} />
                        <Text style={[styles.f_m, { textAlign: "center" }]}>Thank you and please check your amount.</Text>
                        <View style={{ width: 100, marginTop: 20 }}>
                            <Button title="Close" onPress={() => { setIsSuccessOpen(false); setIsLoading(true); Actions.replace("home") }} />
                        </View>
                    </View>
            }
        </Overlay>
    )
}

export default Success