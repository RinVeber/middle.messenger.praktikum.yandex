import './index.scss';

const template = () => `
    <div class="modal">
    <div class="modal__title">
    Название чата
    </div>
        {{{nameInput}}}
    </div>
    <div class="modal__container">
        {{{buttonCreate}}}
    </div>
`;

export default template;
