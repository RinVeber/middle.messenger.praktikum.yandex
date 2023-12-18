import '../index.scss';

const template = () => `
    <div class="register__title">
        {{{title}}}
    </div>
    <div class="register__form">
        {{{inputLogin}}}
        {{{inputName}}}
        {{{inputSecondName}}}
        {{{inputEmail}}}
        {{{inputPhone}}}
        {{{inputPassword}}}
        {{{inputConfirmPassword}}}
    </div>
    <div class="register__controls">
        {{{buttonRegistration}}}
        {{{buttonSignIn}}}
    </div>
`;

export default template;
