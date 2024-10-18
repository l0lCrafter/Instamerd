import { View, Text, StyleSheet, } from 'react-native';
import MyButton from '../components/Button';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { Image } from 'react-native';
import Input from '../components/Input';
import { useSessionContext } from '../utils/context';

const styles = StyleSheet.create({
    containerPost: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        display: 'flex'
    },
    post: {
        width: '100%',
        aspectRatio: '1/1',
        alignItems: 'center',
        justifyContent: 'center',
    },
    immagine: {
        width: '100%',
        height: '100%'
    },
    topButton: {
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

function Create() {

    const [img, setImg] = useState(null)
    const [description, setDescription] = useState('')

    const value = useSessionContext()

    async function openCamera() {
        const permissionResult = await ImagePicker.requestCameraPermissionsAsync()
        if (!permissionResult.granted) {
            alert('Attivare i permessi')
            return;
        }

        const result = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        })

        const image = result.assets[0].uri
        setImg(image)
    }

    async function openGallery() {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync()
        if (!permissionResult.granted) {
            alert('Attivare i permessi')
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        })

        const image = result.assets[0].uri
        setImg(image)
    }

    function cleanImage() {
        setImg(null)
        setDescription(null)
    }

    function publishPost() {
        const post = {
            creatorId: value.session.id,
            name: value.session.username,
            profilepic: value.session.pfp,
            image: img,
            description: description
        }

        value.addPost(post)
        cleanImage()
    }

    return (
        <View style={styles.containerPost}>
            {!img &&
                <View style={styles.topButton}>
                    <MyButton title={'Apri Fotocamera'} onPress={openCamera} />
                    <MyButton title={'Apri Galleria'} onPress={openGallery} />
                </View>
            }
            {!!img &&
                <View style={{display: 'flex', flex: 1}}>
                    <View style={styles.post}>
                        <Image source={{ uri: img }} style={styles.immagine} />
                    </View>
                    <View>
                        <Input placeholder={'Descrizione'} onChange={setDescription} />
                        <MyButton title={'Pubblica'} onPress={publishPost} />
                    </View>
                    <View style={{justifyContent: 'flex-end', flex: 1}}>
                            <MyButton title={'Rimuovi Foto'} onPress={cleanImage} />
                        </View>
                </View>
            }
        </View>
    )
}

export default Create