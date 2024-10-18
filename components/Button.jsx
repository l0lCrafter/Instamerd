import { TouchableOpacity, Text, StyleSheet } from "react-native"; // Cambiato da react-native-web

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: '#4CB5F9',
        paddingVertical: 10,  
        width: '100%',       
        borderRadius: 5, 
        marginVertical: 10, 
    },
    text: {
        color: 'white',
        fontSize: 16,     
    },
});

function MyButton({ title, onPress }) {
    return (
        <TouchableOpacity
            style={styles.button}
            onPress={onPress}
        >
            <Text style={styles.text}> {title} </Text>
        </TouchableOpacity>
    );
}

export default MyButton;
