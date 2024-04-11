import React, { useContext, useState, useEffect } from 'react';
import { Text, View, Image, StyleSheet, StatusBar, Dimensions, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FooterMenu from '../components/Menus/FooterMenu';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const Home = () => {
  const [gasData, setGasData] = useState([]);
  const navigation = useNavigation(); 

  useEffect(() => {
    fetchDataAndPopulateTable();
    // Fetch data every 10 seconds (adjust the interval as needed)
    const intervalId = setInterval(fetchDataAndPopulateTable, 10000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  async function fetchDataAndPopulateTable() {
    try {
      const response = await fetch('https://alertagas-tdtx.onrender.com/api/v1/gas-data');
      const data = await response.json();
      setGasData(data);
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
  }

  const handleLogout = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      <Image
        source={require('./assets/app.jpg')}
        style={styles.backgroundImage}
        resizeMode="cover"
      />
      
      <View style={styles.content}>
        <Image
          source={require('./assets/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.title}>BIENVENIDO </Text>
        
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.tableContainer}>
            <Text style={styles.pageTitle}>DATOS DE GAS</Text>
            <View style={styles.table}>
              <View style={styles.headerRow}>
                <Text style={styles.headerCell}>Cantidad de Gas</Text>
                <Text style={styles.headerCell}>Fecha</Text>
                <Text style={styles.headerCell}>Hora</Text>
              </View>
              {gasData.map((item, index) => (
                <View key={index} style={styles.row}>
                  <Text style={styles.cell}>{item.cantidad_gas}</Text>
                  <Text style={styles.cell}>{item.fecha}</Text>
                  <Text style={styles.cell}>{item.hora}</Text>
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
        
        <FooterMenu/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight || 0,
  },
  backgroundImage: {
    position: 'absolute',
    width: screenWidth,
    height: screenHeight,
    zIndex: -1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  stateText: {
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 20,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tableContainer: {
    marginVertical: 20,
  },
  pageTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  table: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    width: screenWidth * 0.9,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#000',
    padding: 5,
  },
  headerCell: {
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#000',
    padding: 5,
  },
  cell: {
    flex: 1,
    textAlign: 'center',
  },
});

export default Home;


