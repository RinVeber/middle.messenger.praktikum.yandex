import './index.scss'

const template = () => `
    <div class="chat__message-list" 
    {{#if active}}style="background:#E4EDFD;"{{else}}''{{/if}}>
    {{#if isAvatar}}
    <img class="message__avatar avatar" src="https://ya-praktikum.tech/api/v2/resources/{{avatar}}"/>
    {{else}}
    <img class="message__avatar avatar" src="{{avatar}}" />
    {{/if}}
        <div class="message__text message-info">
            <span class="message-info__name name">{{title}}</span>
            <span class="message-info__last-message ">{{lastMessage}}</span>
        </div>
        <div class="message__info info">
        <span class="info__time">{{time}}</span>


        {{#if isRead }}
        <p class="info__count-wrapper">
          <span class="info__count">
            {{unreadCount}}
          </span>
        </p>
      {{/if}}

        </div>
    </div>
`

export default template
