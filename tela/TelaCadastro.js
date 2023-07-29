import React, {useState} from 'react';
import { StyleSheet, Text, View,TextInput,Image, TouchableOpacity,ScrollView } from 'react-native';
import CheckBox from 'expo-checkbox';

export function TelaCadastro({ navigation }) {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <View style={styles.background}>
        <Image source={require('../assets/cadastro.png')} style={styles.imgcadastro} />
        <Text style={styles.titulo}>Connect to your bank account</Text>
      </View>
      <TextInput placeholder='Your Name' style={styles.txtinput}></TextInput>
      <TextInput placeholder='Bank Account' style={styles.txtinput}></TextInput>
      <TextInput placeholder='Email' style={styles.txtinput}></TextInput>
      <TextInput placeholder='Password' style={styles.txtinput}></TextInput>
      <View>
        <Text style={styles.txtcadastro}>Use 6 characters with a mix of letters,</Text>
        <Text style={styles.txtcadastro}>numbers & symbols.</Text>
      </View>
      <View style={styles.row}>
        <CheckBox
          style={styles.CheckBox}
          disabled={false}
          value={toggleCheckBox}
          onValueChange={(newValue) => setToggleCheckBox(newValue)}
        />
        <View>
          <Text style={styles.termos}>By signing up, you agree to</Text>
          <Text style={styles.termos}>Bank's Term of Use & Privacy Policy.</Text>
        </View>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.btnsign}>
          <Text style={styles.textbtn}>SIGN UP</Text>
        </TouchableOpacity>
        <Text style={styles.txtor}>or</Text>
        <TouchableOpacity style={styles.btncancel}>
          <Text style={styles.textbtn}>CANCEL</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row2}>
        <Text style={styles.txtsigned}>Already signed up? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Text style={styles.txtlog}>Log in</Text>
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
    backgroundColor: '#193E75',
    width: 400,
    height: 200,
    marginBottom: 20,
  },
  btnsign: {
    backgroundColor: '#193E75',
    paddingVertical: 10,
    paddingHorizontal: 37,
    borderRadius: 5,
  },
  btncancel: {
    backgroundColor: '#2d96bc',
    paddingVertical: 10,
    paddingHorizontal: 37,
    borderRadius: 5,
  },
  row: {
    paddingTop: 30,
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
  },
  row2: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  buttons: {
    paddingTop: 20,
    flexDirection: 'row',
  },
  imgcadastro: {
    width: 265,
    height: 90,
  },
  txtcadastro: {
    color: '#4dbdc1',
    marginRight: 32,
    fontFamily: 'NunitoSans_400Regular',
  },
  txtinput: {
    paddingLeft: 10,
    borderRadius: 4,
    marginBottom: 15,
    width: 300,
    height: 45,
    borderColor: 'black',
    borderWidth: 1,
  },
  termos: {
    paddingLeft: 12,
    marginTop: -3,
    fontSize: 14,
    fontFamily: 'NunitoSans_400Regular',
  },
  txtor: {
    padding: 10,
    fontFamily: 'NunitoSans_400Regular',
  },
  txtsigned: {
    paddingTop: 20,
    fontFamily: 'NunitoSans_400Regular',
  },
  txtlog: {
    color: "#4dbdc1",
    paddingTop: 20,
    textDecorationLine: 'underline',
    fontFamily: 'NunitoSans_400Regular',
  },
  titulo: {
    fontSize: 20,
    color: '#fff',
    paddingTop: 10,
    fontFamily: 'NunitoSans_700Bold'
  },
  textbtn: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'NunitoSans_700Bold'
  },
  CheckBox: {
    width: 33,
    height: 33,
  },
});