import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button, Divider, Icon, Overlay } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

const MitraOtwPage = () => {
    const [isSheetOpen, setIsSheetOpen] = useState(false)

    return (
        <ScrollView style={{ backgroundColor: "white" }} >
            <Image source={require("../../img/maps.png")} resizeMode="cover" />
            <View style={styles.details}>
                <View style={{ width: 50, alignSelf: "center" }}>
                    <Divider width={2} />
                </View>
                <View style={[styles.p_x, styles.p_y]}>
                    <Text>Your estimated arrival at the destination </Text>
                    <Text style={[styles.f_xl, { marginVertical: 5 }]}>09:45 - 10:10</Text>
                </View>
                <Divider width={2} />
                <View style={[styles.p_x, styles.p_y]}>
                    <View style={[{ flexDirection: "row" }]}>
                        <Image source={require("../../img/ava-cust.png")} />
                        <View style={{ marginLeft: 20, justifyContent: "space-evenly" }}>
                            <Text style={[styles.f_l]}>Fitriono Arya Riski</Text>
                            <Text style={[styles.f_s, { color: "#aaa" }]}>Air conditioning problem</Text>
                            <Text style={[styles.f_s, { color: "#aaa" }]}>ID : 1184505</Text>
                        </View>
                    </View>
                </View>
                <View style={[{ marginVertical: 10, flex: 1 }, styles.p_x]}>
                    <Button title="Arrived" onPress={() => setIsSheetOpen(true)} />
                </View>
                <View style={[styles.p_x, styles.p_y]}>
                    <View style={[{ flexDirection: "row" }]}>
                        <View style={{ alignItems: "center", justifyContent: "space-evenly" }}>
                            <Icon name="record-circle-outline" type="material-community" color="#EE5D66" size={35} />
                            <Text>|</Text>
                            <Text>|</Text>
                            <Icon name="map-marker-circle" type="material-community" color="#5D86EE" size={35} />
                        </View>
                        <View style={{ alignItems: "center", justifyContent: "space-between", marginLeft: 10 }}>
                            <View>
                                <Text>Location</Text>
                                <Text style={styles.f_s}>Perum. Rumah Darmo Green Garden No. 5A</Text>
                            </View>
                            <View>
                                <Text>Destination</Text>
                                <Text style={styles.f_s}>Perum. Rumah Darmo Green Garden No. 5A</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <Divider width={2} />
                <View style={[{ backgroundColor: "#ccc", paddingVertical: 5, justifyContent: "space-between" }, styles.p_x]}>
                    <Text style={[{ color: "#555" }, styles.f_m]}>Order Details</Text>
                </View>
                <View style={[{ paddingVertical: 15, justifyContent: "space-between" }, styles.p_x]}>
                    <Text style={[styles.f_l]}>Type of Service</Text>
                    <View style={[styles.p_x, { flexDirection: "row", alignItems: "center", paddingTop: 10 }]}>
                        <Icon name="circle" color="#aaa" size={10} />
                        <Text style={[{ marginLeft: 10, color: "black" }, styles.f_m]}>repair</Text>
                    </View>
                    <Divider width={1} style={{ marginVertical: 20 }} />
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Text style={{ color: "#2E86DE" }}>See Details</Text>
                        <Icon name="arrow-right-alt" />
                    </View>
                </View>
            </View>

            <Overlay isVisible={isSheetOpen}>
                <StatusBar hidden={isSheetOpen} />
                <View style={{ padding: 20, width: 250 }}>
                    <Text style={[styles.f_xl, { textAlign: "center", marginVertical: 20 }]}>Do you want to start the job? </Text>
                    <View style={{ width: "100%" }}>
                        <Button title="Start Now" onPress={() => { setIsSheetOpen(false); Actions.replace("startJob") }} />
                    </View>
                </View>
            </Overlay>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    details: {
        marginTop: -200,
        backgroundColor: "white",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 20
    },
    p_x: {
        paddingHorizontal: 20
    },
    p_y: {
        paddingVertical: 20
    },
    f_s: {
        fontSize: 10
    },
    f_m: {
        fontSize: 12
    },
    f_l: {
        fontSize: 15
    },
    f_xl: {
        fontSize: 20
    },
})

export default MitraOtwPage