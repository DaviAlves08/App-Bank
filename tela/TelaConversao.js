import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export function TelaConversao({ navigation }) {

  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <View style={styles.background}>
        <View style={styles.row}>
          <TouchableOpacity onPress={() => navigation.navigate('TelaOpcoes')}>
            <Image source={require('../assets/menu.png')} style={styles.imgmenu} />
          </TouchableOpacity>
          <Text style={styles.titulo}>EXCHANGE</Text>
          <TouchableOpacity onPress={() => navigation.navigate('TelaConta')}>
            <Image source={require('../assets/engrenagem.png')} style={styles.imgengrenagem} />
          </TouchableOpacity>
        </View>
      </View>
      <Image source={require('../assets/conversao.png')} style={styles.imgexchange} />
      <View style={styles.rowtxtinput}>
        <View style={styles.inputContainer}>
          <TextInput placeholder="$" placeholderTextColor="#29b5e8" style={styles.txtinputsymbol}/>
          <Icon style={styles.iconarrows} name="expand-more" size={45} color="#184177" />
        </View>
        <TextInput placeholder="0" style={styles.txtinputvalue} keyboardType="numeric" />
      </View>
      <Text style={styles.txtconvert}>CONVERT TO</Text>
      <View style={styles.rowtxtinput}>
        <View style={styles.inputContainer}>
          <TextInput placeholder="£" placeholderTextColor="#29b5e8" style={styles.txtinputsymbol}/>
          <Icon style={styles.iconarrows} name="expand-more" size={45} color="#184177" />
        </View>
        <TextInput placeholder="0" style={styles.txtinputvalue} keyboardType="numeric" />
      </View>
      <View style={styles.space} />
      <View style={styles.rowbuttons}>
        <TouchableOpacity style={styles.buttons}>
          <Text style={styles.txtbutton}> 1 </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons}>
          <Text style={styles.txtbutton}> 2 </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons}>
          <Text style={styles.txtbutton}> 3 </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.rowbuttons}>
        <TouchableOpacity style={styles.buttons}>
          <Text style={styles.txtbutton}> 4 </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons}>
          <Text style={styles.txtbutton}> 5 </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons}>
          <Text style={styles.txtbutton}> 6 </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.rowbuttons}>
        <TouchableOpacity style={styles.buttons}>
          <Text style={styles.txtbutton}> 7 </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons}>
          <Text style={styles.txtbutton}> 8 </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons}>
          <Text style={styles.txtbutton}> 9 </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.rowbuttons}>
        <TouchableOpacity style={styles.buttons}>
          <Text style={styles.txtbutton}>00</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons}>
          <Text style={styles.txtbutton}> 0 </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons}>
          <Text style={styles.txtbutton}> X </Text>
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
    backgroundColor: '#193E75',
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    marginTop: 60,
    paddingBottom: 10
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
  imgexchange: {
    height: 140,
    width: 370,
    marginBottom: 60,
    marginTop: 10,
  },
  rowtxtinput: {
    flexDirection: 'row',
    marginLeft: 90,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 4,
    marginBottom: 20,
    width: 70,
    height: 40,
    marginRight: 20,
  },
  txtinputsymbol: {
    flex: 1,
    fontSize: 25,
    paddingLeft: 5,
    fontFamily: 'NunitoSans_700Bold',
  },
  iconarrows: {
    marginTop: -2,
  },
  txtinputvalue: {
    borderRadius: 4,
    width: 205,
    borderColor: 'black',
    borderWidth: 1,
    height: 40,
    marginRight: 90,
    fontSize: 27,
    fontFamily: 'NunitoSans_600SemiBold',
    textAlign: 'right',
    paddingRight: 5,
  },
  txtconvert: {
    marginRight: 10,
    fontSize: 15,
    marginTop: 0,
    marginBottom: 20,
    fontFamily: 'NunitoSans_600SemiBold',
  },
  space: {
    marginTop: 40,
  },
  rowbuttons: {
    flexDirection: 'row',
    marginTop: 7,
  },
  buttons: {
    backgroundColor: '#193E75',
    paddingVertical: 20,
    paddingHorizontal: 51.5,
    marginLeft: 2,
    marginRight: 2,
  },
  txtbutton: {
    color: '#fff',
    fontSize: 22,
    fontFamily: 'NunitoSans_700Bold',
  },
});