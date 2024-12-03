import { Link } from "expo-router";
import { Pressable, ScrollView, Text } from "react-native";
import { HomeIcon } from "../../components/Icons";
import { StyleSheet, View } from "react-native";
import { styled } from "nativewind";
import { Screen } from "../../components/Screen";

const styles = StyleSheet.create({
  container: {
    flex: 1, // Para ocupar toda la pantalla si es necesario
    justifyContent: "center", // Centra verticalmente en el contenedor
    alignItems: "center", // Centra horizontalmente en el contenedor
    backgroundColor: "yellow",
  },
  text: {
    color: "black", // Blanco
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 20,
    fontSize: 24, // Equivalente a text-2xl
    textAlign: "center", // Centra el texto dentro del componente Text
  },
});

const StyledPressable = styled(Pressable);

export default function About() {
  return (
    <Screen>
      <ScrollView>
        <Link asChild href="/">
          <StyledPressable className={`active:opacity-80`}>
            <HomeIcon />
          </StyledPressable>
        </Link>

        <View style={styles.container}>
          <Text style={styles.text}>React Native</Text>
        </View>

        <Text className="text-white text-white/90 mb-4">
          Aplicacion realizada en react-native como framework y usando la
          librearia Expo para el control de componentes nativos
        </Text>

        <Text className="text-white text-white/90 mb-4">
          crear una app con Expo y TailwindCSS. Repasamos la instalación y
          configuración, mejoramos la UI, implementamos enrutado y navegación
          con animaciones.
        </Text>
      </ScrollView>
    </Screen>
  );
}
