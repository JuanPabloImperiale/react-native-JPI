import { Link, Stack } from "expo-router";
import { View, Text } from "react-native";
import { Logo } from "../components/Logo";
// import { CircleInfoIcon } from "../components/Icons";

export default function Layout() {
  return (
    <View className="flex-1 bg-black">
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "black" },
          headerTintColor: "yellow",
          headerTitle: "",
          headerLeft: () => <Logo />,
          headerRight: () => (
            <Link asChild href="/about">
              {/* <Pressable>
                <CircleInfoIcon />
              </Pressable> */}
              <Text className="text-white "> app by Juanpi </Text>
            </Link>
          ),
        }}
      />
    </View>
  );
}
