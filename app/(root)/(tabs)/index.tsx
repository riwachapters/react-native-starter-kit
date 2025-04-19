import React from "react";
import { View, Text } from "react-native";
import { Link } from "expo-router";

const Home = () => {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Text className="text-2xl font-bold">Welcome to the Home page</Text>
            <Link href="/sign-in">Sign In</Link>
            <Link href="/explore">Explore</Link>
            <Link href="/profile">Profile</Link>
            <Link href={{
                pathname: "/properties/[id]",
                params: { id: 11 }
            }}>Property</Link>
        </View>
    )
};

export default Home;
