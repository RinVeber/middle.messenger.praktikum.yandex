import '../index.scss'

const template = () => `
    <div class="profile__block">
    <div class="profile__info">
    <div class="profile__avatar">
        {{{inputAvatar}}}
    </div>
    <span class="profile__name">{{{title}}}</span>
    </div>

    </div>
    <div class="profile__form">
        {{{inputEmail}}}
        {{{inputLogin}}}
        {{{inputName}}}
        {{{inputSecondName}}}
        {{{inputNameChat}}} 
        {{{inputPhone}}}
    </div>
    <div class="profile__form">
    <div class="profile__container-button">
        {{{buttonChangeData}}}
        {{{buttonChangePassword}}}
        {{{buttonToChat}}}
        {{{buttonExit}}}
        </div>
    </div>
`

export default template
