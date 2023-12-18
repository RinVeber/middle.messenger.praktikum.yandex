import './index.scss';

const template = () => `
<div class="input">
    <div class="input__container">
        {{#if label}}
            <label class="label">{{label}}</label>
        {{/if}}
        {{{input}}}
        <span class="error-text">{{text}}</span>,
    </div>
</div>
`;

export default template;

//     {{{error}}}