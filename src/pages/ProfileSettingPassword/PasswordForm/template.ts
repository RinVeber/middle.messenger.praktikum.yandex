import '../../Profile/index.scss'

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
        {{{inputOldPassword}}}
        {{{inputNewPassword}}}
        {{{inputConfirmPassword}}}
    </div>

    <div class="profile__container-button-column">
        {{{buttonSave}}}
        {{{buttonCancel}}}
  
        </div>
`

export default template
