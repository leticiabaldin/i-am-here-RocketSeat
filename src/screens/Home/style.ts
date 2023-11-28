import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#272626",
      padding: 40,
    },
    eventName: {
      color: "#ffffff",
      fontSize: 24,
      fontWeight: "bold",
      marginTop: 48,
    },
    eventDate: {
      color: "#6b6b6b",
      fontSize: 16,
    },
    input:{
      flex: 1,
      color: '#ffffff',
      backgroundColor: '#474747',
      borderRadius: 5,
      padding: 16,
      fontSize: 16,
      marginRight: 12
    },
    buttonText:{
      color: '#ffffff',
      fontSize: 32,
    },
    button:{
      width: 56,
      height: 56,
      borderRadius: 5,
      backgroundColor: '#8AD75B',
      alignItems: 'center',
      justifyContent: 'center'
    },
    form:{
      width: '100%',
      flexDirection: 'row',
      marginTop: 32,
      marginBottom: 40
    }
  });