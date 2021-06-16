import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';


const LastTransaction = () => {
    return (
        <View style={styles.transaction}>
            <Text style={{ fontSize: 20, marginVertical: 10 }}>Last Transaction</Text>
            <View style={styles.transaction_box}>
                {
                    [1, 2, 3].map(val =>
                        <View key={val} style={{ flexDirection: "row", marginVertical: 5 }}>
                            <Image source={require(`../../img/transaction-2.png`)} />
                            <Text style={{ marginLeft: 15, paddingTop: 5 }}>Transaction #{val}</Text>
                        </View>
                    )
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    transaction: {
        padding: 20,
        backgroundColor: "white"
    },
    transaction_box: {
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderColor: "#eee",
        borderWidth: 0.5
    },
    transaction_row: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginVertical: 5
    },
    transaction_item: {
        alignItems: "center",
        width: 90
    },
    transaction_icon: {
        height: 50,
        width: 50,
        borderRadius: 10,
        backgroundColor: "#5F81D9"
    }
})

export default LastTransaction