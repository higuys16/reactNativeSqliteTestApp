import LocalizedStrings from 'react-native-localization';
const t = new LocalizedStrings({
  en: {
    //main
    home: 'Home',
    sql_ex: 'SQLite Example App',
    register: 'Register',
    update: 'Update',
    view: 'View',
    view_all: 'View All',
    delete: 'Delete',
    select_lang: 'Select Language',
    //forms
    submit: 'Submit',
    //user form
    e_name: 'Enter Name',
    e_contact: 'Enter Contact Phone Number',
    e_address: 'Enter Address',
    //user form update
    e_id: 'Enter User Id',
    u_search: 'Search User',
    u_update: 'Update User',
    //user view
    u_id: 'Id',
    u_name: 'Name',
    u_contact: 'Phone Number',
    u_address: 'Address',
    //buttons
    u_show_info: 'Show User Info',
    u_delete: 'Delete User',
    //notifications(messages) and errors
    mes_reg_success: 'You are Registered Successfully',
    mes_upd_success: 'User Updated Successfully',
    mes_del_success: 'User Deleted Successfully',
    err_reg_failed: 'Registration Failed',
    err_upd_failed: 'Update Failed',
    err_del_failed: 'Please Enter Correct User Id',
    war_reg_address: 'Please fill Address',
    war_reg_contact: 'Please fill Contact Number',
    war_reg_name: 'Please fill Name',
    err_user_not_found: 'User Not Found',
  },
  ru: {
    //main
    home: 'Главная',
    sql_ex: 'SQLite Тестовое Приложение',
    register: 'Зарегистрировать',
    update: 'Обновить',
    view: 'Показать',
    view_all: 'Показать всех',
    delete: 'Удалить',
    select_lang: 'Выбрать язык',
    //forms
    submit: 'Подтвердить',
    //user form
    e_name: 'Введите Имя',
    e_contact: 'Введите Контактный Телефон',
    e_address: 'Введите Адрес',
    //user form update
    e_id: 'Введите id Пользователя',
    u_search: 'Найти Пользователя',
    u_update: 'Обновить Пользователя',
    //user view
    u_id: 'Id',
    u_name: 'Имя',
    u_contact: 'Номер Телефона',
    u_address: 'Адрес',
    //buttons
    u_show_info: 'Показать Информацию О Пользователе',
    u_delete: 'Удалить Пользователя',
    //notifications(messages) and errors
    mes_reg_success: 'Вы Удачно Зарегистрировали Пользователя',
    mes_upd_success: 'Пользователь Удачно Обновлен',
    mes_del_success: 'Пользователь Удачно Удален',
    err_reg_failed: 'Ошибка Регистарции',
    err_upd_failed: 'Ошибка Обновления',
    err_del_failed: 'Пожалуйста Введите Корректный Id Пользователя',
    war_reg_address: 'Обязательно Введите Адрес',
    war_reg_contact: 'Обязательно Введите Номер Телефона ',
    war_reg_name: 'Обязательно Введите Имя',
    err_user_not_found: 'Пользователь не найден',
  },
});
export default t;
