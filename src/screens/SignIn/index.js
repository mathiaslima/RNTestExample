import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "../../components/Button";
import { ErrorText } from "../../components/ErrorText";
import { Input } from "../../components/Input";
import { useLoginFormState } from "../../hooks/useLoginFormState";

export function SignIn({ navigation }) {
  const { username, password, submit } = useLoginFormState({ navigation });

  let usernameErrorMsg;
  let passwordErrorMsg;

  if (submit.value && !username.valid) {
    usernameErrorMsg = "Usuário inválido";
  }

  if (submit.value && !password.valid) {
    passwordErrorMsg = "Senha inválida";
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Login</Text>
      <Input
        label="Usuário"
        placeholder="exemplo"
        onChangeText={username.set}
        error={usernameErrorMsg}
      />
      <Input
        label="Senha"
        placeholder="***"
        secureTextEntry
        onChangeText={password.set}
        error={passwordErrorMsg}
      />
      <ErrorText messages={[usernameErrorMsg, passwordErrorMsg]} />
      <Button title={"Login"} onPress={submit.set} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    justifyContent: "center",
  },
  headerText: {
    color: "#353031",
    fontWeight: "bold",
    fontSize: 34,
    marginBottom: 10,
  },
});
