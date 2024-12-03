import { Link } from "expo-router";
import { Pressable, ScrollView, Text } from "react-native";
import { HomeIcon } from "../../components/Icons";
import { StyleSheet, View } from "react-native";

// import { styled } from "nativewind";
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

// const StyledPressable = styled(Pressable);

export default function WebDeveloper() {
  return (
    <Screen>
      <ScrollView>
        {/* <Link asChild href="/">
          <StyledPressable className={`active:opacity-80`}>
            <HomeIcon />
          </StyledPressable>
        </Link> */}

        <View style={styles.container}>
          <Text style={styles.text}>Imperiale Juan Pablo</Text>
        </View>

        <Text
          className="text-white font-bold mb-8 text-xl "
          style={{ textAlign: "center" }}
        >
          Technical arquitecture web developer
        </Text>
        <Text className="text-white text-white/90 mb-4">
          Nuevo Leon, Mexico · linkedin.com/in/juanpabloimperialecv/ ·
          +528183621633· imperiale.juanpi@gmail.com
        </Text>

        <Text className="text-white text-white/90 mb-4">
          Technical Architect for web applications with nearly 8 years of
          experience leading and optimizing development teams. Expert in
          gathering requirements, performing in-depth technical analysis, and
          implementing high-performance solutions. Proven commitment to clean,
          reusable code and continuous improvement. Skilled in project
          management with a strong focus on optimizing processes, enhancing team
          efficiency, and delivering client-focused solutions. Dedicated to
          ongoing learning in areas like security, team leadership, and emerging
          technologies.
        </Text>
      </ScrollView>
    </Screen>
  );
}
