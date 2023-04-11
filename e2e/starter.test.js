describe("Fluxo login", () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it("Verificando titulo da pagina", async () => {
    await expect(element(by.id("title-login"))).toHaveText("Login");
  });

  it("Clicando no botão de login sem preencher os campos", async () => {
    await element(by.id("button-login")).tap();

    await expect(element(by.text("Usuário inválido"))).toBeVisible();
    await expect(element(by.text("Senha inválida"))).toBeVisible();
  });

  it("Clicando no botão de login preenchendo um usuário válido", async () => {
    await element(by.id("input-username")).typeText("exemplo");

    await element(by.id("button-login")).tap();

    await expect(element(by.text("Usuário inválido"))).not.toBeVisible();
    await expect(element(by.text("Senha inválida"))).toBeVisible();
  });

  it("Clicando no botão de login preenchendo uma senha válida", async () => {
    await element(by.id("input-password")).typeText("abc123");

    await element(by.id("button-login")).tap();

    await expect(element(by.text("Usuário inválido"))).toBeVisible();
    await expect(element(by.text("Senha inválida"))).not.toBeVisible();
  });

  it("Clicando no botão de login preenchendo um usuário e senha válida", async () => {
    await element(by.id("input-username")).typeText("exemplo");
    await element(by.id("input-password")).typeText("abc123");

    await element(by.id("button-login")).tap();

    await expect(element(by.text("Usuário inválido"))).not.toBeVisible();
    await expect(element(by.text("Senha inválida"))).not.toBeVisible();

    await expect(element(by.text("Seja bem-vindo!"))).toBeVisible();
  });
});
