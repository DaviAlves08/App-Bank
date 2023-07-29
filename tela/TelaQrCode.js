import React from 'react';
import { StyleSheet, Text, View,Image, TouchableOpacity} from 'react-native'; 

export function TelaQrCode({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => navigation.navigate('TelaOpcoes')}>
            <Image source={require('../assets/menu.png')} style={styles.imgmenu} />
          </TouchableOpacity>
          <Text style={styles.titulo}>TRANSACTION</Text>
          <TouchableOpacity onPress={() => navigation.navigate('TelaConta')}>
            <Image source={require('../assets/engrenagem.png')} style={styles.imgengrenagem} />
          </TouchableOpacity>
        </View>
        <View style={styles.col}>
          <Text style={styles.txtscan}>SCAN THIS QR CODE</Text>
          <Image source={require('../assets/qrcodegrd.png')} style={styles.imgqrcode} />
          <Text style={styles.txtname}>YOUR NAME</Text>
          <Text style={styles.txtemail}>your-email@email.com</Text>
        </View>
      </View>
      <Text style={styles.txttry}>Try BARCODE</Text>
      <Image source={require('../assets/codbarras.png')} style={styles.imgbarras} />
      <Text style={styles.txtcant}>Can't scan the QR Code?</Text>
      <View style={styles.rowtxt}>
        <Text style={styles.txttry}>Try</Text>
        <Text style={styles.txtbank}>Bank Account</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    flex: 1,
    backgroundColor: '#193E75',
    width: '100%',
    marginBottom: 20,
  },
  imgmenu: {
    height: 39,
    width: 39,
    left: 10,
  },
  titulo: {
    fontSize: 28,
    color: '#fff',
    flex: 1,
    textAlign: 'center',
    fontFamily: 'NunitoSans_700Bold',
  },
  imgengrenagem: {
    height: 42,
    width: 42,
    right: 10,
  },
  row: {
    flexDirection: 'row',
    marginTop: 60,
  },
  col: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgqrcode: {
    height: 240,
    width: 240,
  },
  txtscan: {
    fontSize: 20,
    color: '#fff',
    fontFamily: 'NunitoSans_700Bold',
    paddingBottom: 20,
  },
  txtemail: {
    fontSize: 17,
    color: '#fff',
    fontFamily: 'NunitoSans_700Bold',
  },
  txtname: {
    fontSize: 20,
    color: '#fff',
    fontFamily: 'NunitoSans_700Bold',
    paddingTop: 30,
  },
  imgbarras: {
    height: 50,
    width: 250,
    marginTop: 10,
    marginBottom: 25,
  },
  txtcant: {
    marginBottom: 10,
    fontFamily: 'NunitoSans_600SemiBold',
    marginBottom: 12,
  },
  txtbank: {
    color: '#4dbdc1',
    fontFamily: 'NunitoSans_700Bold',
    textDecorationLine: 'underline',
  },
  txttry: {
    fontFamily: 'NunitoSans_600SemiBold',
    fontSize: 14,
  },
  rowtxt: {
    flexDirection: 'row',
    gap: 5,
    marginBottom: 20,  
  },
});