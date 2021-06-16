import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Banner from './banner';
import BottomNavigation from './bottomNavigation';
import LastTransaction from './lastTransaction';
import Sheet from './sheet';

const HomePage = () => {
    const [isSheetOpen, setIsSheetOpen] = useState(false)

    return (
        <View style={{ flex: 1 }}>
            <StatusBar style="light" />
            <ScrollView style={{ flex: 1 }} onTouchStart={() => setTimeout(() => setIsSheetOpen(true), 10000)}>
                <Banner />
                <LastTransaction />
            </ScrollView>
            <BottomNavigation />
            <Sheet isSheetOpen={isSheetOpen} setIsSheetOpen={setIsSheetOpen} />
        </View>
    )
}

const styles = StyleSheet.create({

})

export default HomePage