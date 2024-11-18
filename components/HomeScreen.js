import * as React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { PRIMARYCOLOR, PRIMARYBORDERADIUS } from '../Constants.js';
import { Ionicons } from '@expo/vector-icons';
import { CustomCard } from './CustomCard';
import bus from '../assets/images/bus.png';
import mrt from '../assets/images/mrt.jpg';
import logo from '../assets/logo.jpg';

export const HomeScreen = () => {
  const nav = useNavigation();
  const DATA = [
    {
      id: 1,
      name: 'Bus',
      backgroundColor: '#6BC5E8',
      imagesrc: bus,
      onPressHandler: () => {
        nav.navigate('schedule', {
          title: 'Bus',
          imagesrc: bus,
          backgroundColor: '#6BC5E8',
        });
      },
    },
    {
      id: 2,
      name: 'Train',
      backgroundColor: '#3A9EC2',
      imagesrc: mrt,
      onPressHandler: () => {
        nav.navigate('schedule', {
          title: 'Train',
          imagesrc: mrt,
          backgroundColor: '#3A9EC2',
        });
      },
    },
  ];
  const transportItem = ({ item }) => {
    return (
      <CustomCard>
        <View style={[styles.transportCard, { backgroundColor: item.backgroundColor }]}>
          <View style={styles.transportTextContainer}>
            <Text style={styles.transportTitle}>{item.name}</Text>
            <TouchableOpacity style={styles.selectButton} onPress={item.onPressHandler}>
              <Text style={styles.selectButtonText}>Select</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Image style={styles.transportImage} source={item.imagesrc} />
          </View>
        </View>
      </CustomCard>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.topview}>
        <View style={styles.welcomecontainer}>
          <Text style={styles.welcomemessage}>
            {'Hello,\nAhmed'}
          </Text>
          <Image source={logo} style={styles.logo} />
        </View>
        <Text style={styles.subtitle}>Where will you go?</Text>
        <View style={styles.searchbar}>
          <Ionicons
            name="search-outline"
            size={25}
            color="#BEBEBE"
            style={styles.searchIcon}
          />
          <TextInput placeholder="Search" style={styles.searchInput} />
        </View>
      </View>
      <View style={styles.bottomview}>
        <CustomCard elevated={true} style={styles.balanceCard}>
          <View style={styles.balanceItem}>
            <Text style={styles.balanceLabel}>Balance</Text>
            <Text style={styles.balanceValue}>dt 18</Text>
          </View>
          <View style={styles.balanceItem}>
            <Text style={styles.balanceLabel}>Rewards</Text>
            <Text style={styles.balanceValue}>dt 5.25</Text>
          </View>
          <View style={styles.balanceItem}>
            <Text style={styles.balanceLabel}>Total Trips</Text>
            <Text style={styles.balanceValue}>18</Text>
          </View>
        </CustomCard>
        <Text style={styles.chooseTransport}>Choose your Transport</Text>
        <FlatList data={DATA} renderItem={transportItem} keyExtractor={(item) => item.id.toString()} />
        <View style={styles.bottomNav}>
          <Ionicons name="home" size={25} color="#35A2C1" style={styles.navIconSelected} />
          <Ionicons name="person" size={25} color="#BDBEC1" />
          <Ionicons name="location-sharp" size={25} color="#BDBEC1" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARYCOLOR,
  },
  topview: {
    paddingHorizontal: 24,
    paddingTop: 40, // Reduce top padding to lower elements
    backgroundColor: PRIMARYCOLOR,
    flex: 1,
    justifyContent: 'space-between',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
},
welcomecontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20, // Add margin here to position lower
},
  welcomemessage: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  logo: {
    height: 60,
    width: 60,
    borderRadius: 30,
  },
  subtitle: {
    color: '#fff',
    fontSize: 16,
    marginVertical: 15,
  },
  searchbar: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    width: '100%',
    height: 45,
    borderRadius: 15,
    paddingHorizontal: 10,
    marginBottom: 25,
  },
  searchIcon: {
    marginLeft: 5,
  },
  searchInput: {
    color: '#BEBEBE',
    marginLeft: 10,
    fontSize: 18,
  },
  bottomview: {
    flex: 2,
    backgroundColor: '#fff',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingVertical: 20,
  },
  balanceCard: {
    backgroundColor: '#fff',
    marginHorizontal: 24,
    padding: 20,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  balanceItem: {
    alignItems: 'center',
  },
  balanceLabel: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#757575',
  },
  balanceValue: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333',
  },
  chooseTransport: {
    marginHorizontal: 26,
    marginVertical: 15,
    fontWeight: 'bold',
    fontSize: 20,
  },
  transportCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderRadius: 12,
    marginHorizontal: 26,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 4,
  },
  transportTextContainer: {
    justifyContent: 'space-between',
  },
  transportTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  selectButton: {
    backgroundColor: '#fff',
    width: 80,
    padding: 8,
    borderRadius: 8,
    marginTop: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
  },
  selectButtonText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#333',
  },
  transportImage: {
    position: 'absolute',
    right: -10,
    bottom: 5,
    width: 70,
    height: 50,
    resizeMode: 'contain',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 26,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 5,
  },
  navIconSelected: {
    color: '#35A2C1',
  },
});
