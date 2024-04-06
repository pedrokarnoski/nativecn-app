import { ReactNode } from "react";
import { Text, TextProps, View } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { colors } from "@/styles/colors";

interface OptionProps {
  children: ReactNode;
}

interface IconProps {
  icon: keyof typeof MaterialCommunityIcons.glyphMap;
}

function Option({ children }: OptionProps) {
  return (
    <View className="w-full flex-row items-center gap-2 border-b border-gray-500 p-4">
      {children}
    </View>
  );
}

function Icon({ icon }: IconProps) {
  return <MaterialCommunityIcons name={icon} size={20} color={colors.white} />;
}

function Title({ ...rest }: TextProps) {
  return <Text className="flex-1 text-white text-lg" {...rest}></Text>;
}

Option.Title = Title;
Option.Icon = Icon;

export { Option };
