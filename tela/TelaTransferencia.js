import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, TouchableOpacity, ScrollView, StatusBar} from 'react-native';

export function TelaTransferencia({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <View style={styles.background}>
        <StatusBar backgroundColor="#193E75" />
        <TouchableOpacity onPress={() => navigation.navigate('TelaOpcoes')}>
          <Image source={require('../assets/menu.png')} style={styles.imgmenu} />
        </TouchableOpacity>
        <Text style={styles.titulo}>TRANSACTION</Text>
        <TouchableOpacity onPress={() => navigation.navigate('TelaConta')}>
          <Image source={require('../assets/engrenagem.png')} style={styles.imgengrenagem} />
        </TouchableOpacity>
      </View>
      <View>
        <Image source={require('../assets/dinheiro.png')} style={styles.imgdinheiro} />
      </View>
      <View>
        <Text style={styles.txttitles}>From Bank</Text>
        <TextInput placeholder='00 123 456' style={styles.txtinput} keyboardType="numeric"></TextInput>
      </View>
      <View>
        <Text style={styles.txttitles}>To Bank</Text>
        <TextInput placeholder='SELECT' style={styles.txtinput}></TextInput>
      </View>
      <Text style={styles.txtamount}>Amount</Text>
      <View style={styles.rowinput}>
        <TextInput placeholder='$' style={styles.txtinput$}></TextInput>
        <TextInput placeholder='0.000,00' style={styles.txtinputvalue} keyboardType="numeric"></TextInput>
      </View>
      <View>
        <Text style={styles.txttitles}>Messages</Text>
        <TextInput placeholder='' style={styles.txtinput}></TextInput>
      </View>
      <View style={styles.rowbuttons}>
        <TouchableOpacity style={styles.btnsend}>
          <Text style={styles.txtbutton}>SEND</Text>
        </TouchableOpacity>
        <Text style={styles.txtor}>or</Text>
        <TouchableOpacity style={styles.btncancel}>
          <Text style={styles.txtbutton}>CANCEL</Text>
        </TouchableOpacity>
      </View>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titulo: {
    fontSize: 29,
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'NunitoSans_700Bold',
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
  imgdinheiro: {
    height: 130,
    width: 330,
    marginTop: 50,
    marginBottom: 30,
  },
  txttitles: {
    marginRight: 160,
    fontSize: 14,
    marginTop: 20,
    marginBottom: 7,
    marginLeft: 5,
    color: '#3975b2',
    fontFamily: 'NunitoSans_600SemiBold',
  },
  txtinput: {
    borderRadius: 4,
    width: 280,
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    paddingLeft: 5,
  },
  txtinput$: {
    borderRadius: 4,
    width: 55,
    height: 40,
    marginRight: 20,
    fontSize: 20,
    borderColor: 'black',
    borderWidth: 1,
    textAlign: 'center'
  },
  txtinputvalue: {
    borderRadius: 4,
    width: 205,
    height: 40,
    marginRight: 90,
    paddingLeft: 120,
    fontSize: 18,
    borderColor: 'black',
    borderWidth: 1,
  },
  txtamount: {
    fontSize: 14,
    marginTop: 20,
    marginBottom: 7,
    color: '#3975b2',
    marginRight: 220,
  },
  rowbuttons: {
    marginTop: 50,
    flexDirection: 'row',
    marginBottom: 50,
  },
  btnsend: {
    backgroundColor: '#193E75',
    paddingVertical: 10,
    paddingHorizontal: 35,
    borderRadius: 5,
  },
  btncancel: {
    backgroundColor: '#2d96bc',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 5,
  },
  rowinput: {
    flexDirection: 'row',
    marginLeft: 90,
  },
  txtor: {
    fontSize: 18,
    padding: 10,
    fontFamily: 'NunitoSans_600SemiBold',
  },
  txtbutton: {
    color: '#fff',
    fontSize: 17,
    fontFamily: 'NunitoSans_700Bold',
  },
});
