import { StyleSheet, Text } from "react-native";
import React, { useContext, useState, useEffect } from "react";
import { SafeAreaView } from 'react-native-safe-area-context';
import Container from "../components/Container";

import { ScrollView } from "react-native-gesture-handler";
import like from '../assets/LikeAnimation.json';
import HomePost from "../components/HomePost";
import { useSessionContext } from "../utils/context";


const styles = StyleSheet.create({
    systembar: {
        flex: 1,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
    }
});


function Home({ navigation }) {

    const value = useSessionContext()

    return (
        <SafeAreaView style={styles.systembar}>
            <ScrollView>
                <Container>
                    <Text style={styles.title}>InstaMerd</Text>
                    {value.posts.map((post, i) => (
                        <HomePost
                            key={i}
                            username={post.name}
                            pfp={post.profilepic}
                            immagine={post.image}
                            descrizione={post.description}
                            likeAnimationSource={like}
                        />
                    ))}
                </Container>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home