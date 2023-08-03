import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, StatusBar} from 'react-native';

export function TelaInicio({ navigation }) {

  return (
    <View style={styles.container}>
      <View style={styles.background}>
      <StatusBar backgroundColor="#193E75" />
        <View style={styles.row}>
          <TouchableOpacity onPress={() => navigation.navigate('TelaOpcoes')}>
            <Image source={require('../assets/menu.png')} style={styles.imgmenu} />
          </TouchableOpacity>
          <View style={styles.vazio}></View>
          <TouchableOpacity onPress={() => navigation.navigate('TelaConta')}>
            <Image source={require('../assets/engrenagem.png')} style={styles.imgengrenagem} />
          </TouchableOpacity>
        </View>
        <Image source={require('../assets/usuario.png')} style={styles.logousuario} />
        <Text style={styles.txtname}>YOUR NAME</Text>
        <Text style={styles.txtemail}>your-email@email.com</Text>
        <View style={styles.viewsaldo}>
          <Text style={styles.txtbalance}>BALANCE</Text>
          <Text style={styles.txtsaldo}>$4,180.20</Text>
          <TouchableOpacity onPress={() => navigation.navigate("TelaTransferencia")} style={styles.btnTrasnfer}>
            <Text style={styles.txtButton}>TRANSFER</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.txtlatest}>LATEST TRANSACTIONS</Text>
      <View style={styles.itens}>
        <Image source={require('../assets/circle.png')} style={styles.icones} />
        <View style={styles.flexitens}>
          <Text style={styles.content}>Lorem Ipsum Company</Text>
          <Text style={styles.content}>Received payment</Text>
        </View>
        <Text style={styles.content}>$2,030.80</Text>
      </View>
      <View style={styles.itens}>
        <Image source={require('../assets/circle.png')} style={styles.icones} />
        <View style={styles.flexitens}>
          <Text style={styles.content}>Auctor Elit Ltd.</Text>
          <Text style={styles.content}>Transfer money</Text>
        </View>
        <Text style={styles.content}>-$450.00</Text>
      </View>
      <View style={styles.itens}>
        <Image source={require('../assets/circle.png')} style={styles.icones} />
        <View style={styles.flexitens}>
          <Text style={styles.content}>Lectus Sit Amet est</Text>
          <Text style={styles.content}>Gas & electricity payment</Text>
        </View>
        <Text style={styles.content}>-$239.50</Text>
      </View>
      <View style={styles.itens}>
        <Image source={require('../assets/circle.png')} style={styles.icones} />
        <View style={styles.flexitens}>
          <Text style={styles.content}>Congue Quisque</Text>
          <Text style={styles.content}>Withdraw money</Text>
        </View>
        <Text style={styles.content}>-$1,500.00</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("TelaExtrato")} style={styles.more}>
        <Text style={styles.more}>more {'>'}{'>'}</Text>
      </TouchableOpacity>
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
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#184177',
    width: '100%',
    height: 550,
    marginBottom: 20,
    paddingTop: 30,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: -5
  },
  vazio: {
    flex: 1
  },
  btnTrasnfer: {
    backgroundColor: '#193E75',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 5,
  },
  txtButton: {
    color: '#fff',
    fontSize: 15,
    fontFamily: 'NunitoSans_600SemiBold',
  },
  flexitens: {
    flex: 1,
    paddingLeft: 5
  },
  itens: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginRight: 15,
    marginLeft: 15,
  },
  icones: {
    tintColor: '#184177',
    height: 40,
    width: 40,
    borderRadius: 80,
    marginBottom: 20,
    marginRight: 5,
  },
  imgengrenagem: {
    height: 50,
    width: 50,
    right: 15
  },
  imgmenu: {
    tintColor: '#fff',
    height: 45,
    width: 45,
    left: 15
  },
  logousuario: {
    width: 120,
    height: 120,
    marginTop: 20,
  },
  viewsaldo: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    width: 260,
    height: 140,
    marginBottom: 20,
    marginTop: 20,
  },
  txtlatest: {
    textAlign: 'center',
    paddingBottom: 20,
    color: '#4dbdc1',
    fontSize: 15,
    fontFamily: 'NunitoSans_700Bold',
  },
  txtemail: {
    fontSize: 20,
    color: '#fff',
    fontFamily: 'NunitoSans_700Bold',
  },
  txtname: {
    fontSize: 20,
    color: '#fff',
    marginTop: 15,
    fontFamily: 'NunitoSans_700Bold',
  },
  txtsaldo: {
    fontSize: 28,
    color: '#184177',
    paddingBottom: 5,
    paddingTop: 5,
    fontFamily: 'NunitoSans_700Bold',
  },
  txtbalance: {
    fontSize: 17,
    color: '#4dbdc1',
    fontFamily: 'NunitoSans_700Bold',
    paddingTop: 5,
  },
  more: {
    color: '#4dbdc1',
    fontSize: 18,
    marginLeft: 130,
    marginBottom: 5,
    fontFamily: 'NunitoSans_700Bold',
  },
  content: {
    fontFamily: 'NunitoSans_400Regular',
  },
});
