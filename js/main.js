let validation = new JustValidate('#form');
validation
    .addField("#name", [
      {
        rule: 'required',
        errorMessage: "Вы не ввели имя"
      },
      {
        rule: 'minLength',
        value: 2,
        errorMessage: "Не достаточно символов"
      },
      {
        rule: 'maxLength',
        value: 30,
        errorMessage: "Вы ввели больше, чем положено"
      }
    ])
    .addField("#email", [
      {
        rule: 'required',
        errorMessage: 'Вы не ввели e-mail',
      },
      {
        rule: 'email',
        errorMessage: 'Вы некорректно ввели email',
      }
    ])
