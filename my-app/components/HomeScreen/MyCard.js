import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper'; // Импорт компонентов карточки из react-native-paper
// import styles from './styles';

const MyCard = () => {
  return (
    <View style={styles.card}>
      <View style={styles.img}>
        {/* Your image component */}
      </View>
      <TouchableOpacity style={styles.save}>
        {/* Your save icon component */}
      </TouchableOpacity>
      <View style={styles.text}>
        <Text style={styles.h3}>Title</Text>
        <Text style={styles.p}>Description</Text>
        <View style={styles.iconBox}>
          {/* Your icon component */}
          <Text style={styles.span}>Additional Info</Text>
        </View>
      </View>
    </View>)
};


const styles = StyleSheet.create({
  card: {
    width: 252,
    height: 265,
    backgroundColor: 'white',
    borderRadius: 30,
    shadowColor: '#bebebe',
    shadowOffset: {
      width: 15,
      height: 15,
    },
    shadowOpacity: 1,
    shadowRadius: 30,
    elevation: 5,
    margin: 10,
  },
  img: {
    width: '100%',
    height: '50%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: 'linear-gradient(#e66465, #9198e5)',
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
  save: {
    borderRadius: 10,
    margin: 20,
    width: 30,
    height: 30,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    margin: 20,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  iconBox: {
    marginTop: 15,
    width: '70%',
    padding: 10,
    backgroundColor: '#e3fff9',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  h3: {
    fontFamily: 'Lucida Sans',
    fontSize: 15,
    fontWeight: '600',
    color: 'black',
  },
  p: {
    fontFamily: 'Lucida Sans',
    color: '#999999',
    fontSize: 13,
  },
  span: {
    marginLeft: 10,
    fontFamily: 'Lucida Sans',
    fontSize: 13,
    fontWeight: '500',
    color: '#9198e5',
  },
});

export default MyCard;
