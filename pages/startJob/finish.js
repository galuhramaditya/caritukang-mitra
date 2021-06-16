import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { Button, Overlay } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

const Finish = ({ styles, isFinish, setIsFinish }) => {
    return (
        <Overlay isVisible={isFinish} onBackdropPress={() => setIsFinish(false)}>
            <StatusBar hidden={isFinish} />
            <View style={styles.overlay}>
                <Text style={[styles.f_l, styles.bold, { textAlign: "center" }]}>Do you have been finish the job?</Text>
                <View style={{ width: "100%", marginTop: 20, marginBottom: 10 }}>
                    <Button title="Yes" onPress={() => { setIsFinish(false); Actions.replace("payment") }} />
                </View>
                <View style={{ width: "100%" }}>
                    <Button title="Cancel" type="outline" buttonStyle={{ borderColor: "red" }} titleStyle={{ color: "red" }} onPress={() => { setIsFinish(false) }} />
                </View>
            </View>
        </Overlay>
    )
}

export default Finish