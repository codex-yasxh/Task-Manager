import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
    <View>
      <Text style={styles.title}>Task Manager App</Text>
    </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor : '#17759eff',
        justifyContent : 'space-around',
        alignItems : 'center'
    },
    title : {
        fontSize : 24,
        color : '#fff'
    }
})