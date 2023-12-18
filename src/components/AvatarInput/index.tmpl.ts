import './index.scss';
import defaultAvatar from '../../assets/images/defaultAvatar.svg';

const template = () => `

    <div class="image" style="width:{{size}}; height: {{size}}">
      <label for="{{name}}">
        {{#if value}}
          <img class="avatar" src="https://ya-praktikum.tech/api/v2/resources/{{value}}"/>
        {{else}}
          <img class="avatar" src="${defaultAvatar}"/>
        {{/if}}
      </label>
      {{{inputAvatar}}}
    </div>`;

export default template;