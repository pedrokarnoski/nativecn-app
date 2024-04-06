import { View, Image, Text, ScrollView } from "react-native";

import { Skills } from "@/components/Skills";
import { User } from "@/components/User";
import { Preferences } from "@/components/Preferences";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";

export function Profile() {
  return (
    <ScrollView className="flex-1 bg-gray-700">
      <Image
        source={require("@/assets/banner.png")}
        className="w-full h-52 -mb-16"
      />

      <View className="flex-1 px-4 pb-4">
        <User />
        <Skills />
        <Preferences />

        <View className="w-full mt-6 flex-1">
          <Text className="text-white text-base font-bold mb-2">Company</Text>
          <Input placeholder="Company" inputClasses="mb-6" />
          <Button label="Save" variant={"default"} />
        </View>
      </View>
    </ScrollView>
  );
}
