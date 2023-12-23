import './index.scss'

const template = () => `
    <div class="modal">
    <div class="modal__title">
    Укажите ID пользователя
    </div>
        {{{idInput}}}
    </div>
    <div class="modal__container">
        {{{buttonAdd}}}
    </div>
`

export default template
