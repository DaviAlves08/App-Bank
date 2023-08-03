import React from 'react';
import { StyleSheet, Text, View,Image, TouchableOpacity, SafeAreaView, StatusBar} from 'react-native';
import  Icon  from 'react-native-vector-icons/MaterialIcons';

export function TelaExtrato({navigation}) {
    return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <View style={styles.background}>
        <StatusBar backgroundColor="#193E75" />
        <View style={styles.rowheader}>
            <TouchableOpacity onPress={() => navigation.navigate("TelaOpcoes")}>
              <Image source={require('../assets/menu.png')}style={styles.imgmenu}/>
            </TouchableOpacity>
            <Text style={styles.titulo}>TRANSACTION</Text>
            <TouchableOpacity onPress={() => navigation.navigate("TelaConta")}>
              <Image source={require('../assets/engrenagem.png')}style={styles.imgengrenagem}/>
            </TouchableOpacity>
        </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.btncomplete}>
              <Text style={styles.txtButton}>COMPLETE</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btninprogress}>
              <Text style={styles.txtButton}>IN PROGRESS</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.itens}>
          <Image source={require('../assets/circle.png')} style={[styles.icones, { tintColor: '#13487E' }]} />
          <View style={styles.flexitens}>
            <Text style={styles.content}>Lorem Ipsum Company</Text>
            <Text style={styles.content}>Received payment</Text>
          </View>
          <Text style={styles.content}>$2,030.80</Text>
        </View>
        <View style={styles.itens}>
          <Image source={require('../assets/circle.png')} style={[styles.icones, { tintColor: '#18ADDC' }]} />
          <View style={styles.flexitens}>
            <Text style={styles.content}>Auctor Elit Ltd.</Text>
            <Text style={styles.content}>Transfer money</Text>
          </View>
          <Text style={styles.content}>-$450.00</Text>
        </View>
        <View style={styles.itens}>
          <Image source={require('../assets/circle.png')} style={[styles.icones, { tintColor: '#0E7682' }]} />
          <View style={styles.flexitens}>
            <Text style={styles.content}>Lectus Sit Amet est</Text>
            <Text style={styles.content}>Gas & electricity payment</Text>
          </View>
          <Text style={styles.content}>-$239.50</Text>
        </View>
        <View style={styles.itens}>
          <Image source={require('../assets/circle.png')} style={[styles.icones, { tintColor: '#F7AB00' }]} />
          <View style={styles.flexitens}>
            <Text style={styles.content}>Congue Quisque</Text>
            <Text style={styles.content}>Withdraw money</Text>
          </View>
          <Text style={styles.content}>-$1,500.00</Text>
        </View>
        <View style={styles.itens}>
          <Image source={require('../assets/circle.png')} style={[styles.icones, { tintColor: '#13487E' }]}/>
          <View style={styles.flexitens}>
            <Text style={styles.content}>Lorem Ipsum Company</Text>
            <Text style={styles.content}>Received payment</Text>
          </View>
          <Text style={styles.content}>$2,030.80</Text>
        </View>
        <View style={styles.itens}>
          <Image source={require('../assets/circle.png')} style={[styles.icones, { tintColor: '#0E7682' }]} />
          <View style={styles.flexitens}>
            <Text style={styles.content}>Lectus Sit Amet est</Text>
            <Text style={styles.content}>Gas & electricity payment</Text>
          </View>
          <Text style={styles.content}>-$450.00</Text>
        </View>
        <View style={styles.itens}>
          <Image source={require('../assets/circle.png')} style={[styles.icones, { tintColor: '#FF4C3B' }]} />
          <View style={styles.flexitens}>
            <Text style={styles.content}>Congue Quisque</Text>
            <Text style={styles.content}>Withdraw money</Text>
          </View>
          <Text style={styles.content}>-$239.50</Text>
        </View>
        <View style={styles.itens}>
          <Image source={require('../assets/circle.png')} style={[styles.icones, { tintColor: '#18ADDC' }]} />
          <View style={styles.flexitens}>
            <Text style={styles.content}>Auctor Elit Ltd.</Text>
            <Text style={styles.content}>Transfer money</Text>
          </View>
          <Text style={styles.content}>-$1,500.00</Text>
        </View>
        <View style={styles.row}>
          <Icon style={styles.iconarrows} name="keyboard-arrow-left" size={45} color='#184177'/>
          <TouchableOpacity style={styles.btnnumbers}>
              <Text style={styles.txtnumbers}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnnumber2}>
              <Text style={styles.txtnumber2}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnnumbers}>
              <Text style={styles.txtnumbers}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnnumbers}>
              <Text style={styles.txtnumbers}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnnumbers}>
              <Text style={styles.txtnumbers}>5</Text>
            </TouchableOpacity>
           <Icon style={styles.iconarrows}name="keyboard-arrow-right" size={45} color='#184177'/>
        </View>
      </View>
    </SafeAreaView>
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
      marginBottom: 19,
      paddingTop: 30,
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: 'black',
      borderRadius: 4,
      marginBottom: 25,
      width: 268,
      height: 40,
      paddingHorizontal: 10,
    },
    icon: {
      marginRight: 5,
    },
    icones: {
      height: 40,
      width: 40,
      borderRadius: 80,
      marginBottom: 20,
      marginRight: 5,
    },
    flexitens: {
      flex: 1,
      paddingLeft: 5,
    },
    itens: {
      flexDirection: 'row',
      marginRight: 15,
      marginLeft: 15,
      paddingTop: 5,
    },
    titulo: {
      fontSize: 27,
      color: '#fff',
      flex:1,
      textAlign: 'center',
      fontFamily: 'NunitoSans_700Bold'
    },
    imgengrenagem: {
      height: 42,
      width: 42,
      right: 10,
    },
    imgmenu: {
      height: 39,
      width: 39,  
      left:10,
    },
    btncomplete: {
      backgroundColor: '#29c4f6',
      height: 55,
      width: 180,
      marginTop: 74
      ,
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
      overflow: 'hidden',
      justifyContent: 'center',
    },
    txtButton: {
      color: '#fff',
      fontSize: 18,
      textAlign: 'center',
      fontFamily: 'NunitoSans_700Bold',
    },
    btninprogress: {
      backgroundColor: '#6d737f',
      height: 55,
      width: 180,
      marginTop: 74,
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
      overflow: 'hidden',
      justifyContent: 'center',
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'center',
      gap: 13,
    },
    btnnumbers: {
      backgroundColor: '#e3e7ea',
      height: 30,
      width: 30,
      borderRadius: 20,
      overflow: 'hidden',
      justifyContent: 'center',
      fontFamily: '',
      marginTop: 20,
      marginBottom: 20,
    },
    txtnumbers: {
      fontSize: 15,
      fontFamily: 'NunitoSans_700Bold',
      textAlign: 'center',
    },
    btnnumber2: {
      backgroundColor: '#14baf8',
      height: 30,
      width: 30,
      borderRadius: 20,
      overflow: 'hidden',
      justifyContent: 'center',
      marginTop: 20,
      marginBottom: 20,
    },
    txtnumber2: {
      color: '#fff',
      fontSize: 15,
      textAlign: 'center',
      fontFamily: 'NunitoSans_700Bold',
    },
    iconarrows: {
      marginTop: 12,
      marginLeft: -15,
      marginRight: -15,
    },
    rowheader: {
      marginTop: -18,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    content:{
      fontSize: 14,
      fontFamily: 'NunitoSans_400Regular',
    },
    safe:{
      flex: 1
    }
  });