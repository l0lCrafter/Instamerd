import { Text, View, StyleSheet, Image } from "react-native";


import image from "../assets/verified.png";
import { useSessionContext } from "../utils/context";

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        paddingHorizontal: 15,
        paddingTop: 25,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    wrapperText: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: 20,
        paddingLeft: 20,
        paddingRight: 10,
    },
    verified: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
        gap: 10
    },
    wrapperInfo: {
        marginTop: 20,
        width: '70%',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        gap: 10
    },
    text: {
        fontSize: 16,
        fontWeight: 'semibold',
        textAlign: 'center',
    },
    nickName: {
        fontSize: 24,
        fontWeight: '700',
        textAlign: 'center',
    },
    numberText: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    profilePic: {
        width: 100,
        height: 100,
        borderRadius: 100,
        overflow: 'hidden',
    },
});

function Header({ pfp }) {
    const value = useSessionContext()

    return (
        <View style={styles.wrapper}>
            <View>
                <Image
                    source={{uri: pfp}}
                    style={styles.profilePic}
                />
            </View>
            <View style={styles.wrapperInfo}>
                <View style={styles.verified}>
                    {!!value.session && <Text style={styles.nickName}>{value.session.username}</Text>}
                    <Image source={image} style={{ height: 24, width: 24, }} />
                </View>
                <View style={styles.wrapperText}>
                    <View>
                        <Text style={styles.numberText}>1.359</Text>
                        <Text style={styles.text}>Post</Text>
                    </View>
                    <View>
                        <Text style={styles.numberText}>29,7M</Text>
                        <Text style={styles.text}>Follower</Text>
                    </View>
                    <View>
                        <Text style={styles.numberText}>1.307</Text>
                        <Text style={styles.text}>Seguiti</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

export default Header;
