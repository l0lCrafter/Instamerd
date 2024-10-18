import { TextInput, StyleSheet } from "react-native"; // Cambiato da react-native-web

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#FAFAFA',
        borderWidth: 1,
        borderColor: '#808080',
        paddingVertical: 9,  
        paddingHorizontal: 6,
        marginVertical: 10,  
        width: '100%',  
        borderRadius: 5,  
        color: 'rgb(0,0,10)', 
    },
});

function Input({ 
    placeholder, 
    password, 
    value,
    onChange
}) {
    return (
        <TextInput
            style={styles.input}
            placeholder={placeholder}
            secureTextEntry={password}    
            value={value}
            onChangeText={onChange}
            
        />
    );
}

export default Input;
