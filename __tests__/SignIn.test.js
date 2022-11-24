import React from "react";
import { render, fireEvent, act } from "@testing-library/react-native";
import { SignIn } from "../src/screens/SignIn";

jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

it("Renderizando elementos padrões do componente", () => {
  const { getAllByText, getByPlaceholderText, getByText } = render(<SignIn />);

  expect(getAllByText("Login").length).toBe(2);
  getByText("Usuário");
  getByPlaceholderText("exemplo");
  getByText("Senha");
  getByPlaceholderText("***");
});

it("Verificar mensagens de entradas inválidas", () => {
  const { getByText, getByTestId } = render(<SignIn />);

  const button = getByTestId("buttonSubmit");

  fireEvent.press(button);

  getByText("Usuário inválido");
  getByText("Senha inválida");
});

it("Verificar mensagem de erro se o nome do usuário for inválido", () => {
  const { getByText, getByTestId, queryByText } = render(<SignIn />);

  const inputUsername = getByTestId("inputUsername");
  const inputPassword = getByTestId("inputPassword");

  fireEvent.changeText(inputUsername, "qualquer");
  fireEvent.changeText(inputPassword, "abc123");

  const button = getByTestId("buttonSubmit");

  fireEvent.press(button);

  getByText("Usuário inválido");
  expect(queryByText("Senha inválida")).toBe(null);
});

it("Verificar mensagem de erro se a senha for inválida", () => {
  const { getByText, getByTestId, queryByText } = render(<SignIn />);

  const inputUsername = getByTestId("inputUsername");
  const inputPassword = getByTestId("inputPassword");

  fireEvent.changeText(inputUsername, "exemplo");
  fireEvent.changeText(inputPassword, "123456");

  const button = getByTestId("buttonSubmit");

  fireEvent.press(button);

  expect(queryByText("Usuário inválido")).toBe(null);
  getByText("Senha inválida");
});

it("Caso de sucesso, usuário e senha válidos", async () => {
  fetch = jest.fn(() => Promise.resolve({ json: () => Promise.resolve() }));

  const pushMock = jest.fn();

  const { getByTestId, queryByText } = render(
    <SignIn
      navigation={{
        push: pushMock,
      }}
    />
  );

  const inputUsername = getByTestId("inputUsername");
  const inputPassword = getByTestId("inputPassword");

  fireEvent.changeText(inputUsername, "exemplo");
  fireEvent.changeText(inputPassword, "abc123");

  const button = getByTestId("buttonSubmit");

  await act(() => fireEvent.press(button));

  expect(queryByText("Usuário inválido")).toBe(null);
  expect(queryByText("Senha inválida")).toBe(null);

  expect(pushMock).toHaveBeenCalledTimes(1);
  expect(pushMock).toBeCalledWith("Home");
});
