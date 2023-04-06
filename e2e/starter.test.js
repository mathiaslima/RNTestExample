describe("Example", () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it("Verificando tela de login", async () => {
    await expect(element(by.id("title-login"))).toHaveText("Login");
  });

  it("Clicando no botão de login sem preencher nada", async () => {
    await element(by.id("button-login")).tap();
    await expect(element(by.text("Usuário inválido"))).toBeVisible();
    await expect(element(by.text("Senha inválida"))).toBeVisible();
  });

  it("Clicando no botão de login preenchendo apenas o usuário inválido", async () => {
    await element(by.id("input-username")).typeText("mathias");
    await element(by.id("button-login")).tap();
    await expect(element(by.text("Usuário inválido"))).toBeVisible();
    await expect(element(by.text("Senha inválida"))).toBeVisible();
  });
  it("Clicando no botão de login preenchendo apenas o usuário válido", async () => {
    await element(by.id("input-username")).typeText("exemplo");
    await element(by.id("button-login")).tap();
    await expect(element(by.text("Senha inválida"))).toBeVisible();
    await expect(element(by.text("Usuário inválido"))).not.toBeVisible();
  });

  it("Clicando no botão de login preenchendo apenas a senha válida", async () => {
    await element(by.id("input-password")).typeText("abc123");
    await element(by.id("button-login")).tap();
    await expect(element(by.text("Senha inválida"))).not.toBeVisible();
    await expect(element(by.text("Usuário inválido"))).toBeVisible();
  });

  it("Clicando no botão de login preenchendo apenas a senha inválida", async () => {
    await element(by.id("input-password")).typeText("1234");
    await element(by.id("button-login")).tap();
    await expect(element(by.text("Usuário inválido"))).toBeVisible();
    await expect(element(by.text("Senha inválida"))).toBeVisible();
  });

  it("Clicando no botão de login preenchendo senha e usuário inválido", async () => {
    await element(by.id("input-username")).typeText("mathias");
    await element(by.id("input-password")).typeText("1234");
    await element(by.id("button-login")).tap();
    await expect(element(by.text("Usuário inválido"))).toBeVisible();
    await expect(element(by.text("Senha inválida"))).toBeVisible();
  });

  it("Clicando no botão de login preenchendo a inválida senha e usuário válido", async () => {
    await element(by.id("input-username")).typeText("exemplo");
    await element(by.id("input-password")).typeText("1234");
    await element(by.id("button-login")).tap();
    await expect(element(by.text("Usuário inválido"))).not.toBeVisible();
    await expect(element(by.text("Senha inválida"))).toBeVisible();
  });

  it("Clicando no botão de login preenchendo a válida senha e usuário inválido", async () => {
    await element(by.id("input-username")).typeText("exemplo");
    await element(by.id("input-password")).typeText("1234");
    await element(by.id("button-login")).tap();
    await expect(element(by.text("Usuário inválido"))).not.toBeVisible();
    await expect(element(by.text("Senha inválida"))).toBeVisible();
  });

  it("Clicando no botão de login preenchendo a válida senha e usuário inválido", async () => {
    await element(by.id("input-username")).typeText("exemplo");
    await element(by.id("input-password")).typeText("abc123");
    await element(by.id("button-login")).tap();
    await expect(element(by.text("Usuário inválido"))).not.toBeVisible();
    await expect(element(by.text("Senha inválida"))).not.toBeVisible();

    await expect(element(by.id("title-welcome"))).toHaveText(
      "Seja bem-vindo!"
    );
  });
});
