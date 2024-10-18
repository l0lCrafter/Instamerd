import { Text, View, StyleSheet, Image } from "react-native";
import Header from "../components/Header"
import Container from "../components/Container"
import { ScrollView } from "react-native-gesture-handler"
import Post from "../components/Post";
import { useSessionContext } from "../utils/context";
import MyButton from "../components/Button";

const styles = StyleSheet.create({
    post: {
        width: '100%',
        flexDirection: 'row',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
    }
});

function Profile() {
    const value = useSessionContext()

    return (
        <ScrollView>
            <Container>
                {value.session && (
                    <>
                        <Header pfp={value.session.pfp} username={value.session.username} />
                        <View style={styles.post}>
                            {value.posts.filter(post => post.creatorId === value.session.id).map((post, i) => (
                                <Post key={i} immagine={post.image} />
                            ))}
                        </View>
                    </>)}
                <MyButton onPress={value.logout} title={'Logout'} />
            </Container>
        </ScrollView>
    )
}

export default Profile