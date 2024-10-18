import { Text, View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    loading: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'orange',
        width: '100%',
        height: '100%'
    }
})

function Loading () {
    return (
        <View style={styles.loading}>
            <Text>Loading...</Text>
        </View>
    )
}

export default Loading