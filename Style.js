import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#fff',
      alignItems:'center',
      marginTop:30,
    },
    logo: {
        marginTop:10,
        width: 305,
        height: 159,
        marginBottom: 20,
      },
      button: {
        backgroundColor: "blue",
        padding: 20,
        borderRadius: 5,
        marginBottom:20,
      },
    text: {
        color: 'grey',
        fontSize: 30,
        fontWeight: 'bold',
    },
    link:{
        display:'flex',
        flexDirection:'row',
        marginTop:20,
        justifyContent:'space-between',
    }


  });