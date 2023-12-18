import './index.scss';

const template = () => `
<div class='login__wrapper'>
            <h1 class="login__title">
                {{{title}}}
            </h1>
            <div class="login__flex">
                {{{inputLogin}}}
                {{{inputPassword}}}
                </div>
                </div>
                <div class="login__controls">
                {{{buttonAuth}}}
                {{{buttonRegistration}}}
                </div>
             
`;

export default template;
