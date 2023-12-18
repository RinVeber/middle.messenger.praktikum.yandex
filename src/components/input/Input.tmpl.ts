import './index.scss';

const template = () => `
<div class="input">
    <div class="input__container">
        {{#if label}}
            <label class="label">{{label}}</label>
        {{/if}}
        {{{input}}}
        {{{error}}}
    </div>
</div>
`;

export default template;


