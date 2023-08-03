import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, ScrollView, StatusBar} from 'react-native';

export function Home({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <View style={styles.background}>
      <StatusBar backgroundColor="#193E75" />
        <Text style={styles.titulo}>WELCOME!</Text>
        <Image source={require('../assets/bank.png')} style={styles.logobank} />
      </View>
      <TextInput placeholder='Username or Email' style={styles.txtinput} />
      <TextInput placeholder='Password' style={styles.txtinput} />
      <TouchableOpacity style={styles.btnlogin} color="#164279" onPress={() => navigation.navigate("TelaInicio")}>
        <Text style={styles.buttonText}>LOG IN</Text>
      </TouchableOpacity>
      <Text style={styles.txtforgot}>Forgot Password?</Text>
      <View style={styles.row}>
        <Text style={styles.txtnew}> New to Bank apps?  </Text>
        <TouchableOpacity onPress={() => navigation.navigate("TelaCadastro")}>
          <Text style={styles.txtsign}>Sign Up</Text>
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
    justifyContent: 'center',
    backgroundColor: '#164478',
    width: 400,
    height: 540, 
    marginBottom: 20,
  },
  logobank: {
    width: 200,
    height: 150,
    marginTop: 20,
  },
  row: {
    flexDirection: 'row',
  },
  btnlogin: {
    backgroundColor: '#193E75',
    paddingVertical: 10,
    paddingHorizontal: 35,
    marginLeft: 2,
    marginRight: 2,
    borderRadius: 5,
  },
  txtinput: {
    borderRadius: 4,
    marginBottom: 25,
    width: 268,
    height: 40,
    textAlign: 'center',
    borderColor: 'black',
    borderWidth: 1,
  },
  titulo: {
    fontSize: 40,
    color: '#fff',
    marginBottom: 30,
    fontFamily: 'NunitoSans_700Bold'
  },
  txtforgot: {
    color: "#4dbdc1",
    marginTop: 25,
    textDecorationLine: 'underline',
    fontFamily: 'NunitoSans_400Regular',
  },
  txtsign: {
    color: "#4dbdc1",
    marginTop: 10,
    textDecorationLine: 'underline',
    fontFamily: 'NunitoSans_400Regular',
  },
  txtnew: {
    marginTop: 10,
    marginBottom: 5,
    fontFamily: 'NunitoSans_400Regular',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'NunitoSans_700Bold',
  },
});