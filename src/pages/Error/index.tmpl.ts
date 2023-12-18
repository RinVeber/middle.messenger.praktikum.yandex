import './index.scss'

const template = () => `
<div class="error">

        <h1 class="error__code">500</h1>
        <h2 class="error__text">Мы уже фиксим</h1>
        <div class="error__button">
            {{{link}}}
        </div>
</div>
`;

export default template;
