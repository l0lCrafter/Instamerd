import LottieView from 'lottie-react-native';
import { useRef, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { GestureHandlerRootView, TapGestureHandler } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
    containerPost: {
        width: '100%',
        backgroundColor: 'white',
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    post: {
        width: '100%',
        aspectRatio: '1/1',
        alignItems: 'center',
        justifyContent: 'center',
    },
    toppost: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 10,
        marginLeft: 10,
        marginTop: 5,
        marginBottom: 5,
    },
    img: {
        height: '100%',
        width: '100%'
    },
    pfp: {
        height: 30,
        width: 30,
        borderRadius: 30,
        overflow: 'hidden',
    },
    user: {
        fontSize: 20,
        marginBottom: 5
    },
    descr: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: 10,
        marginHorizontal: 10,
        gap: 5
    },
    descrtext: {
        fontSize: 14,
    },
    userdescr: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    imageContainer: {
        position: 'relative',
        width: '100%',
        height: '100%',
    },
    likeAnimation: {
        position: 'absolute',  // Posizionamento assoluto dell'animazione
        top: '50%',  // Centra l'animazione verticalmente
        left: '50%', // Centra l'animazione orizzontalmente
        transform: [{ translateX: -100 }, { translateY: -100 }], // Aggiusta la traslazione per centrare esattamente
        width: 200,  // Dimensione dell'animazione
        height: 200,
        zIndex: 1,  // Assicurati che l'animazione stia sopra l'immagine
    },
});

function HomePost({ username, pfp, immagine, descrizione, likeAnimationSource, onPress }) {

    const [like, setLike] = useState(false)
    const [isLiked, setIsLiked] = useState(false)

    const animation = useRef(null);

    function toggleLike() {
        setLike(!like);
        if (!like) {
            setIsLiked(true);
            setTimeout(() => {
                if (animation.current) {
                    animation.current.play(); // Avvia l'animazione
                }
            }, 0);

            setTimeout(() => {
                setIsLiked(false); // Nasconde l'animazione dopo averla completata
            }, 850);
        }
    }

    return (
        <View style={styles.containerPost}>
            <TouchableOpacity onPress={onPress}>
                <View style={styles.toppost}>
                    <Image source={{uri: pfp}} style={styles.pfp} />
                    <Text style={styles.user}>{username}</Text>
                </View>
            </TouchableOpacity>
            <View >
                <GestureHandlerRootView style={styles.post}>
                    <TapGestureHandler onActivated={toggleLike} numberOfTaps={2}>
                        <View style={styles.imageContainer}>
                            <Image source={{uri: immagine}} style={styles.img} />
                            {isLiked && (<LottieView
                                ref={animation}
                                source={likeAnimationSource}  // <--- Animazione del like (file JSON)
                                loop={false}
                                autoPlay={false}
                                style={styles.likeAnimation}
                            />)}
                        </View>
                    </TapGestureHandler>
                </GestureHandlerRootView>
            </View>
            <View style={styles.toppost}>
                <TouchableOpacity onPress={toggleLike}>
                    <Icon
                        name={like ? 'heart' : 'heart-outline'}
                        size={30}
                        color={like ? 'tomato' : 'black'} />
                </TouchableOpacity>
            </View >
            <View style={styles.descr}>
                <Text style={styles.userdescr}>{username}</Text>
                <Text style={styles.descrtext}>{descrizione}</Text>
            </View>
        </View>
    );
}

export default HomePost