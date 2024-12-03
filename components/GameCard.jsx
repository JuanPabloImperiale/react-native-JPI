import { useEffect, useRef } from "react";
import { View, StyleSheet, Text, Image, Animated } from "react-native";

export function GameCard({ game }) {
  return (
    <View key={game.id} style={styles.card}>
      <View style={styles.row}>
        <Image source={{ uri: game.image }} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{game.name}</Text>
          <Text style={styles.score}>{game.released}</Text>
        </View>
      </View>
    </View>
  );
}

export function AnimatedGameCard({ game, index }) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      delay: index * 250,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);

  return (
    <Animated.View style={{ opacity }}>
      <GameCard game={game} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 42,
  },
  row: {
    flexDirection: "row",
    width: 500,
  },
  image: {
    width: 107,
    height: 147,
    borderRadius: 10,
  },
  textContainer: {
    marginLeft: 16,
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    width: 300,
  },
  description: {
    fontSize: 16,
    color: "#eee",
  },
  score: {
    fontSize: 20,
    fontWeight: "bold",
    color: "green",
    marginTop: 8,
  },
});
