import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Button, Icon } from 'react-native-elements';

const OrderDetails = ({ styles }) => {
    const [amountWorker, setAmountWorker] = useState(1)

    return (
        <View>
            <View style={[{ paddingVertical: 15, justifyContent: "space-between" }, styles.paddingHorizontal]}>
                <Text style={[styles.bold, styles.f_l]}>Type of Service</Text>
                <View style={[styles.paddingHorizontal, styles.rowDirection, { alignItems: "center", paddingTop: 10 }]}>
                    <Icon name="circle" color="#aaa" size={10} />
                    <Text style={[{ marginLeft: 10, color: "black" }, styles.f_m]}>repair</Text>
                </View>
            </View>
            <View style={[{ paddingVertical: 15, justifyContent: "space-between", borderTopColor: "#aaa", borderTopWidth: 1 }, styles.paddingHorizontal]}>
                <Text style={[styles.bold, styles.f_l]}>Diagnostic & Quotation</Text>
                <Text style={{ alignItems: "center", paddingTop: 10 }}>Onsite consultation will diagnose the problem for troubleshooting accordingly. The scope will depend on the repair works necessary</Text>
            </View>
        </View>
    )
}

export default OrderDetails