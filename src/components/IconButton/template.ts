import './index.scss'

const template = () => `
<button class="{{class}}" {{#if disabled}}
disabled
{{/if}}><img src="{{iconUrl}}" class="icon__button"/></button>
`

export default template
