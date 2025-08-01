import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";


const TextScreen = () => {
    const [password, setPassword] = useState("");
    const [isValidPassword, setIsValidPassword] = useState(false);

    return (
        <View>
            <Text>Enter Password:</Text>
            <TextInput
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={password}
                onChangeText={(newPassword) => {
                    setPassword(newPassword)
                    newPassword.length < 5 ? setIsValidPassword(false) : setIsValidPassword(true)
                }}
            />
            {!isValidPassword && <Text>Password must be longer than 5 characters</Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: "black",
        borderWidth: 1
    }
});

export default TextScreen;