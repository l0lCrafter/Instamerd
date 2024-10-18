import { View, StyleSheet } from "react-native"; 
const styles = StyleSheet.create({
    container: { 
        backgroundColor: '#FFFFFF',
        minHeight: '100%',     
        justifyContent: 'top', 
        alignItems: 'center',  
    },
});

function Container({ children }) {
    return (
        <View style={styles.container}>
            {children}
        </View>
    );
}

export default Container;
