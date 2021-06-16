import React from 'react';
import { Text, View } from 'react-native';

const Timestamp = ({ styles }) => {
    return (
        <View style={[{ paddingVertical: 50, justifyContent: "space-between", alignItems: "center" }, styles.paddingHorizontal]}>
            <Text style={{ fontSize: 50 }}>00:00,00</Text>
        </View>
    )
}

export default Timestamp