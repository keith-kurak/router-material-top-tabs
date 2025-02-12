import React from "react";

import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
} from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { useColorScheme } from "@/hooks/useColorScheme";

import {
  createBottomSheetNavigator,
  BottomSheetNavigationEventMap,
  BottomSheetNavigationOptions,
} from "@th3rdwave/react-navigation-bottom-sheet";

import { ParamListBase, TabNavigationState } from "@react-navigation/native";
import { withLayoutContext } from "expo-router";

const BottomSheet = createBottomSheetNavigator();

const renderBackdrop = (props: BottomSheetBackdropProps) => (
  <BottomSheetBackdrop {...props} appearsOnIndex={0} disappearsOnIndex={-1} />
);

const ExpoRouterGorhamBottomSheet = withLayoutContext<
  BottomSheetNavigationOptions,
  typeof BottomSheet.Navigator,
  TabNavigationState<ParamListBase>,
  BottomSheetNavigationEventMap
>(BottomSheet.Navigator);

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ExpoRouterGorhamBottomSheet
        screenOptions={{
          backdropComponent: renderBackdrop,
        }}
        style={{ marginTop: 50 }}
      >
        <ExpoRouterGorhamBottomSheet.Screen name="index" />
        <ExpoRouterGorhamBottomSheet.Screen
          name="second"
          getId={({ params }) => `sheet-${params.id}`}
        />
      </ExpoRouterGorhamBottomSheet>
    </GestureHandlerRootView>
  );
}
