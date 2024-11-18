import * as React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { PRIMARYCOLOR, PRIMARYBORDERADIUS } from '../Constants.js';
import { Ionicons } from '@expo/vector-icons';
import { CustomCard } from './CustomCard';
import bus from '../assets/images/bus.png';
import mrt from '../assets/images/mrt.jpg';
import { FromTo } from './FromTo';
import SvgQRCode from 'react-native-qrcode-svg';

export const PaymentScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topview}>
        <Text style={styles.ticketText}>Ticket</Text>
      </View>
      <View style={styles.bottomview}>
        <CustomCard elevated={true} style={styles.customCard}>
          <FromTo />
          <View style={styles.detailsContainer}>
            <View>
              <View style={styles.row}>
                <Ionicons name="timer-outline" size={15} color="#000" />
                <Text style={styles.boldText}>10:00</Text>
                <Ionicons style={styles.iconMargin} name="train" size={15} color="#000" />
                <Text style={styles.boldText}>10:30</Text>
              </View>
              <View style={styles.row}>
                <Ionicons name="location-outline" size={15} color="#000" />
                <Text style={styles.boldText}>Lorem MRT Station</Text>
              </View>
              <View style={styles.row}>
                <Ionicons name="timer-outline" size={15} color="#000" />
                <Text style={styles.boldText}>$ 5.0</Text>
              </View>
            </View>
            <View style={styles.qrContainer}>
              <SvgQRCode value="http://example.com" />
            </View>
          </View>
        </CustomCard>
        <Text style={styles.paymentTitle}>Payment</Text>
        <Text style={styles.enterAmountText}>Enter Amount</Text>
        <TextInput value="$     5.0" style={styles.textInput} />
        <View>
          <View style={styles.paymentRow}>
            <TouchableOpacity style={styles.creditCardButton}>
              <Text style={styles.buttonText}>Credit Card</Text>
            </TouchableOpacity>
            <Text style={styles.boldText}>Balance : $84</Text>
          </View>
          <View style={styles.paymentRow}>
            <TouchableOpacity style={styles.ewalletButton}>
              <Text style={styles.buttonText}>E-wallet</Text>
            </TouchableOpacity>
            <Text style={styles.boldText}>Balance : $84</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.buyButton}>
          <Text style={styles.buyButtonText}>Buy Ticket</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topview: {
    marginTop: 60,
    marginHorizontal: 24,
    backgroundColor: PRIMARYCOLOR,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  ticketText: {
    position: "absolute",
    top: 5,
    textAlign: "center",
    fontSize: 30,
    color: "#fff",
    fontWeight: "bold",
  },
  bottomview: {
    flex: 2,
    backgroundColor: "#fff",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  container: {
    flex: 1,
    backgroundColor: PRIMARYCOLOR,
  },
  customCard: {
    backgroundColor: "#fff",
    marginHorizontal: 24,
    marginTop: -180,
    padding: 30,
    borderRadius: 10,
  },
  detailsContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  row: {
    flexDirection: "row",
    marginTop: 15,
    alignItems: "center",
  },
  boldText: {
    marginLeft: 10,
    fontWeight: "bold",
  },
  iconMargin: {
    opacity: 0.2,
    marginLeft: 10,
  },
  qrContainer: {
    width: 50,
    height: 50,
    marginLeft: 10,
    marginTop: 10,
  },
  paymentTitle: {
    marginHorizontal: 26,
    marginVertical: 16,
    fontWeight: "bold",
    fontSize: 20,
  },
  enterAmountText: {
    marginHorizontal: 26,
    fontWeight: "bold",
    fontSize: 15,
    marginVertical: 10,
  },
  textInput: {
    backgroundColor: "#EBE7E6",
    padding: 8,
    marginHorizontal: 23,
    marginVertical: 5,
    borderRadius: 8,
    fontWeight: "bold",
  },
  paymentRow: {
    flexDirection: "row",
    marginTop: 20,
    paddingBottom: 10,
    borderBottomWidth: 2,
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 23,
    borderBottomColor: "#EBE7E6",
  },
  creditCardButton: {
    width: 125,
    backgroundColor: "#6BC5E8",
    borderRadius: 8,
  },
  ewalletButton: {
    width: 125,
    marginTop: 10,
    backgroundColor: "#EBE7E6",
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    paddingVertical: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
  buyButton: {
    padding: 7,
    margin: 26,
    borderRadius: 12,
    backgroundColor: PRIMARYCOLOR,
  },
  buyButtonText: {
    fontSize: 25,
    textAlign: "center",
    fontWeight: "bold",
    color: "#fff",
  },
});
