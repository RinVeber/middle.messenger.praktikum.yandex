import './index.scss';

const template = () => `<button
class="{{class}}"
type="{{type}}"
{{#if disabled}}
  disabled
{{/if}}
>{{label}}</button>`;

export default template;
