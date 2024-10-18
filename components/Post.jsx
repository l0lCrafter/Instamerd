import { View, StyleSheet, Dimensions, Image, Text } from "react-native";

const screenWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    containerPost: {
        flexBasis: '33.33%',
        aspectRatio: '1/1',
        borderColor: 'white',
        borderWidth: 1
    },
    post: {
        height: '100%',
        width: '100%'
    }
});

function Post({immagine}) {
    return (
        <View style={styles.containerPost}>
            <Image source={{uri: immagine}} style={styles.post}/> 
        </View>
    );
}

export default Post