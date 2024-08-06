class FormValidator {
  // Valida CEP
  cep(value) {
    const condition1 = !isNaN(value);
    const condition2 = String(value).length === 4;

    return condition1 & condition2;
  }

  //   Valida contacto telefónico
  phone(number) {
    const condition1 = !isNaN(number);
    const condition2 = String(number).length === 9;
    const condition3 = String(number).startsWith(8);
    const condition4 = [2, 3, 4, 5, 6, 7].includes(
      parseInt(String(number).charAt(1))
    );

    return condition1 & condition2 & condition3 & condition4;
  }

  //   Valida BI
  bi() {
    // TODO
  }

//   Valida NUIT
  nuit() {
    // TODO
  }
}
