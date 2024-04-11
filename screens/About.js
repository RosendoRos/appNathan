import { View, Text, StyleSheet } from "react-native";
import React from "react";
import FooterMenu from "../components/Menus/FooterMenu";

const About = () => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, justifyContent: "flex-end" }}>
        <Text>
          "Software innovations" ofrece una aplicación móvil diseñada para brindar seguridad y tranquilidad a los usuarios en sus hogares. La aplicación proporciona alertas instantáneas sobre niveles de gas peligrosos, ayudando a prevenir accidentes y proteger a las familias.
        </Text>
        <Text>Funcionalidades Principales:</Text>
        <Text>
          1. **Alertas en Tiempo Real: "Software innovations" monitorea constantemente los niveles de gas en el ambiente y envía alertas instantáneas al dispositivo móvil del usuario en caso de detectar concentraciones peligrosas de gas.
        </Text>
        <Text>Consejos de Seguridad: "Software innovations" ofrece consejos útiles sobre cómo prevenir fugas de gas, qué hacer en caso de emergencia y cómo mantener seguros los sistemas de gas en el hogar.</Text>
        <Text>Beneficios:</Text>
        <Text>Seguridad Residencial: Protege a tu familia y a tu hogar contra los peligros de las fugas de gas.</Text>
        <Text>Tranquilidad: Recibe alertas instantáneas en tu dispositivo móvil estés donde estés, para una mayor tranquilidad.</Text>
        <Text>Plataformas Disponibles: iOS y Android Disponibilidad: "Software innovations" está disponible para su descarga gratuita en la App Store y Google Play Store.</Text>
        <FooterMenu />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    justifyContent: "space-between",
    marginTop: 40,
  },
});

export default About;

