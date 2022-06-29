import React from 'react';
import {View, Image, StyleSheet, SafeAreaView, StatusBar, Text, Pressable, Linking} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const colorGithub = '#010409';
const imageGit = 'https://avatars.githubusercontent.com/u/92119218?v=4';
const colorFontGithub = '#C9D1D9';
const colorDarkFontGithub = '#4F565E';
const urlGithub = 'https://github.com/emasetto';

const App = () => {

    const handlePressGoToGitHub = async () => {
        console.log('Verificando Link')
        const res = await Linking.canOpenURL(urlGithub);
        if (res){
            Linking.openURL(urlGithub)
        }
    };
    return (
       <SafeAreaView style={style.container}>
        <StatusBar backgroundColor= {colorGithub} barStyle= 'light'/>
            <View style={style.content}>
                <Image 
                accessibilityLabel='Edher com fundo Branco' 
                style={style.avatar} 
                source={{uri:imageGit}}
                />
                <Text accessibilityLabel='Nome: Edher Masetto' style={[style.defaultText, style.name]}>Edher Masetto
                </Text>
                <Text accessibilityLabel='nickName: Edher Masetto' style={[style.defaultText, style.nickName]}>emasetto
                </Text>
                <Text accessibilityLabel='descricao: Im a systems development student' style={[style.defaultText, style.descricao]}>I'm a systems development student
                </Text>
                <Pressable on onPress={handlePressGoToGitHub}>
                    <View style={style.Button}>
                        <Text style={[style.defaultText, style.fontButton]}>
                            Open in GitHub
                        </Text>
                    </View>
                </Pressable>
            </View>
       </SafeAreaView> 
    );
}

export default App;
const style = StyleSheet.create({
    container:{ //Column
        backgroundColor: colorGithub,
        flex: 1, //Expandir para a tela inteira
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        alignItems: 'center',
        padding: 20,
    },
    
    avatar: {
        height: 200,
        width: 200,
        borderRadius: 100,
        borderColor: 'yellow',
        borderWidth: 2,
    },
    defaultText: {
        color: colorFontGithub,
    },
    name: {
       fontSize: 25,
       fontWeight: 'bold'  
    },
    nickName: {
        fontSize: 18,
        color: colorDarkFontGithub,
    },
    descricao: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    Button:{
        backgroundColor: colorDarkFontGithub,
        borderRadius: 10,
        padding: 10,
        marginTop: 20,

    },
    fontButton: {
        fontWeight: 'bold',
        fontSize: 18,
    }
});