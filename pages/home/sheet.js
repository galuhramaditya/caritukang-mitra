import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BottomSheet, Button, CheckBox, Divider, Icon, Overlay } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

const Sheet = ({ isSheetOpen, setIsSheetOpen }) => {

    return (
        <Overlay isVisible={isSheetOpen}>
            <StatusBar hidden={isSheetOpen} />
            <View style={styles.sheet}>
                <View style={{ padding: 20 }}>
                    <Text style={{ textAlign: "center", fontWeight: "bold", fontSize: 20, marginBottom: 20 }}>Comming Order</Text>
                    <Text style={styles.title}>Address</Text>
                    <Text style={styles.value}>25A, Jalan Danau Ranau, Sawojajar</Text>
                    <Text style={styles.title}>Service Type</Text>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Icon name="circle" size={10} color="#aaa" />
                        <Text style={[styles.value, { marginLeft: 5 }]}>repair</Text>
                    </View>
                    <Text style={styles.title}>Worker's amount</Text>
                    <Text style={styles.value}>Need 1 worker</Text>
                    <Text style={styles.title}>Description</Text>
                    <Text style={[styles.value, { color: "#aaa" }]}>-</Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                    <View style={{ flex: 1, marginRight: 5 }}>
                        <Button title="Accept" buttonStyle={{ borderRadius: 10 }} onPress={() => { setIsSheetOpen(false); Actions.replace("mitraOtw") }} />
                    </View>
                    <View style={{ flex: 1, marginLeft: 5 }}>
                        <Button title="Decline" type="outline" buttonStyle={{ borderRadius: 10, borderColor: "red" }} titleStyle={{ color: "red" }} onPress={() => { setIsSheetOpen(false); }} />
                    </View>
                </View>
            </View>
        </Overlay>
    )
}

const styles = StyleSheet.create({
    sheet: {
        backgroundColor: "white",
        borderRadius: 30,
        width: 250,
    },
    title: {
        fontSize: 15,
        marginVertical: 5,
        fontWeight: "bold"
    },
    value: {
        fontSize: 12,
        marginBottom: 5
    }
})

export default Sheet