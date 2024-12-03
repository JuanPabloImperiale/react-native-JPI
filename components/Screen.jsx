import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export function Screen({ children }) {
  const insets = useSafeAreaInsets();

  return (
    <View
      className="flex-1 bg-black pt-4 px-2"
      style={{ paddingBottom: insets.bottom }}
    >
      {children}
    </View>
  );
}
