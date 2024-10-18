import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

import Input from "../components/Input";
import MyButton from "../components/Button";
import Container from "../components/Container";
import { useSessionContext } from "../utils/context";

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        paddingHorizontal: 20,
    },
    title: {
        paddingTop: '6%',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
        textAlign: 'center',
    },
    systembar: {
        flex: 1,
        backgroundColor: '#fff',
    },
});



function Login({ setLogged }) {

    const value = useSessionContext()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function onLogin() {
        if (username == 'Emrata' && password == 'Fregna') {
            value.login({
                id: username,
                username: username,
                password: password,
                pfp: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_VwUMUyFdaNezaRwKeeEsdg4JeJL2e5bQQA&s',
            })
        } else if (username == 'lalisa' && password == 'Fregna'){
            value.login({
                id: username,
                username: username,
                password: password,
                pfp: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuI6IhwyNrXsWWJFSSHgDnHPdAWdwnzpaW1Q&s',
            })
        }
    }

    function onUsernameChange(text) {
        setUsername(text)
    }

    function onPasswordChange(text) {
        setPassword(text)
    }

    return (
        <SafeAreaView style={styles.systembar}>
            <Container>
                <View style={styles.wrapper}>
                    <Text style={styles.title}>InstaMerd</Text>
                    <Input placeholder={'Username'} onChange={onUsernameChange} />
                    <Input placeholder={'Password'} onChange={onPasswordChange} password={true} />
                    <MyButton title={'Accedi'} onPress={onLogin} />
                </View>
            </Container>
        </SafeAreaView>
    );
}

export default Login;

