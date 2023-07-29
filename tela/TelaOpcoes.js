import React from 'react';
import { StyleSheet, Text, View,Image, TouchableOpacity} from 'react-native'; 

export function TelaOpcoes({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <View style={styles.row}>
          <Image source={require('../assets/menu.png')} style={styles.imgmenu} />
          <Text style={styles.titulo}>PAYMENT</Text>
          <TouchableOpacity onPress={() => navigation.navigate("TelaConta")}>
            <Image source={require('../assets/engrenagem.png')} style={styles.imgengrenagem} />
          </TouchableOpacity>
        </View>
        <View style={styles.rowbalance}>
          <Image source={require('../assets/usuario.png')} style={styles.imgusuario} />
          <View style={styles.colbalance}>
            <Text style={styles.txtbalance}>BALANCE</Text>
            <Text style={styles.txtvalue}>$ 4,180.20</Text>
          </View>
        </View>
      </View>
      <View style={styles.icones}>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate("TelaConversao")}>
            <Image source={require('../assets/dolar.png')} style={styles.icons} />
          </TouchableOpacity>
          <Text style={styles.iconnames}>Exchange</Text>
        </View>
        <View>
          <Image source={require('../assets/eletricity.png')} style={styles.icons} />
          <Text style={styles.iconnames}>Electricity</Text>
        </View>
        <View>
          <Image source={require('../assets/fire.png')} style={styles.icons} />
          <Text style={styles.iconnames}>Gas</Text>
        </View>
      </View>
      <View style={styles.icones}>
        <View>
          <Image source={require('../assets/shop.png')} style={styles.icons} />
          <Text style={styles.iconnames}>Shopping</Text>
        </View>
        <View>
          <Image source={require('../assets/phone.png')} style={styles.icons} />
          <Text style={styles.iconnames}>Phone</Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate("TelaCartao")}>
            <Image source={require('../assets/credit.png')} style={styles.icons} />
          </TouchableOpacity>
          <Text style={styles.iconnames}>Credit Card</Text>
        </View>
      </View>
      <View style={styles.icones}>
        <View>
          <Image source={require('../assets/security.png')} style={styles.icons} />
          <Text style={styles.iconnames}>Insurance</Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate("TelaQrCode")}>
            <Image source={require('../assets/qrcode.png')} style={styles.icons} />
          </TouchableOpacity>
          <Text style={styles.iconnames}>Qr Code</Text>
        </View>
        <View>
          <Image source={require('../assets/paper.png')} style={styles.icons} />
          <Text style={styles.iconnames}>Other Bills</Text>
        </View>
      </View>
        <View style={styles.backmore}>
        <TouchableOpacity onPress={() => navigation.navigate("TelaInicio")}>
            <Text style={styles.back}>{'<'}{'<'} back </Text>
          </TouchableOpacity>
          <Text style={styles.more}>more {'>'}{'>'}</Text>
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
    height: 250,
    paddingTop: 35,
    marginBottom: 20,
  },
  imgengrenagem: {
    height: 42,
    width: 42,
    position: 'absolute',
    right: 10,
  },
  imgmenu: {
    height: 39,
    width: 39,
    position: 'absolute',
    left: 10,
  },
  imgusuario: {
    height: 110,
    width: 110,
    marginTop: 40,
    marginLeft: 20,
  },
  titulo: {
    fontSize: 29,
    color: '#fff',
    flex: 1,
    textAlign: 'center',
    fontFamily: 'NunitoSans_700Bold',
  },
  row: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
  },
  rowbalance: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  colbalance: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 35,
    marginLeft: 20,
  },
  icones: {
    flexDirection: 'row',
    marginTop: 5,
  },
  icons: {
    height: 95,
    width: 95,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 80,
    marginTop: 15,
  },
  iconnames: {
    textAlign: 'center',
    fontSize: 16,
    marginTop: 4,
    fontFamily: 'NunitoSans_600SemiBold',
  },
  more: {
    color: '#4dbdc1',
    fontSize: 20,
    fontFamily: 'NunitoSans_700Bold',
  },
  txtbalance: {
    fontSize: 18,
    color: '#4dbdc1',
    fontFamily: 'NunitoSans_700Bold',
  },
  txtvalue: {
    fontSize: 30,
    color: '#fff',
    fontFamily: 'NunitoSans_700Bold',
  },
  back: {
    color: '#4dbdc1',
    fontSize: 20,
    fontFamily: 'NunitoSans_700Bold',
  },
  backmore:{
    flexDirection: 'row',
    gap:200,
    marginTop: 60,
    marginBottom: 10
  }
});