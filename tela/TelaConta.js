import React from 'react';
import { StyleSheet, Text, View,TextInput,Image, TouchableOpacity,ScrollView} from 'react-native'; 

export function TelaConta({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <View style={styles.background}>
        <TouchableOpacity onPress={() => navigation.navigate('TelaOpcoes')}>
          <Image source={require('../assets/menu.png')} style={styles.imgmenu} />
        </TouchableOpacity>
        <Text style={styles.titulo}>ACCOUNT</Text>
        <Image source={require('../assets/engrenagem.png')} style={styles.imgengrenagem} />
      </View>
      <Image source={require('../assets/usuario.png')} style={styles.imgusuario} />
      <View style={styles.titles}>
        <Text style={styles.txttitles}>YOUR NAME</Text>
        <TextInput placeholder='JAMES D. ALLEN' style={styles.txtinput}></TextInput>
      </View>
      <View style={styles.titles}>
        <Text style={styles.txttitles}>BANK ACCOUNT</Text>
        <TextInput placeholder='55 632 789' style={styles.txtinput} keyboardType="numeric"></TextInput>
      </View>
      <View style={styles.titles}>
        <Text style={styles.txttitles}>EMAIL</Text>
        <TextInput placeholder='email@example.com' style={styles.txtinput}></TextInput>
      </View>
      <View style={styles.titles}>
        <Text style={styles.txttitles}>PASSWORD</Text>
        <TextInput placeholder='*************' style={styles.txtinput}></TextInput>
      </View>
      <View style={styles.titles}>
        <Text style={styles.txttitles}>PHONE NUMBER</Text>
        <TextInput placeholder='+55 632 741 24 001' style={styles.txtinput} keyboardType="numeric"></TextInput>
      </View>
      <View style={styles.titles}>
        <Text style={styles.txttitles}>YOUR ADDRESS</Text>
        <TextInput placeholder='Place 22nd street, Arizona ut 5N 27T' style={styles.txtinput}></TextInput>
      </View>
      <View style={styles.message}>
        <Text style={styles.txtmessage}>* Nunc faucibus a pellentesque sit amet</Text>
        <Text style={styles.txtmessage1}>porttitor eget dolor morbi non.</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('TelaInicio')} style={styles.btnsave}>
        <Text style={styles.txtbutton}>SAVE CHANGES</Text>
      </TouchableOpacity>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    background: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#193E75',
      width: '100%',
      paddingTop: 40,
      marginBottom: 15,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    imgmenu: {
      height: 39,
      width: 39,
      left: 10,
    },
    imgengrenagem: {
      height: 42,
      width: 42,
      right: 10,
    },
    titulo: {
      fontSize: 27,
      color: '#fff',
      textAlign: 'center',
      fontFamily: 'NunitoSans_700Bold',
    },
    imgusuario: {
      height: 150,
      width: 150,
    },
    txtinput: {
      borderRadius: 4,
      width: 280,
      height: 40,
      borderColor: 'black',
      borderWidth: 1,
      paddingLeft: 10,
    },
    txttitles: {
      fontSize: 14,
      marginBottom: 5,
      color: '#3975b2',
      fontFamily: 'NunitoSans_600SemiBold',
      marginLeft: 5
    },
    titles: {
      marginTop: 5,
    },
    message: {
      margin: 20,
    },
    txtmessage: {
      fontSize: 13,
      textAlign: 'center',
      fontFamily: 'NunitoSans_600SemiBold',
    },
    txtmessage1: {
      fontSize: 13,
      textAlign: 'center',
      paddingRight: 45,
      fontFamily: 'NunitoSans_600SemiBold',
    },
    btnsave: {
      backgroundColor: '#005B90',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      marginBottom: 5,
    },
    txtbutton: {
      color: '#fff',
      fontSize: 14,
      fontFamily: 'NunitoSans_700Bold',
    },
});