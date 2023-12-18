import './index.scss';

const template = () => `
    <div class="chat__message-list" 
    {{#if active}}style="background:#E4EDFD;"{{else}}''{{/if}}>

        {{{inputAvatar}}}


        <div class="message__text message-info">
            <span class="message-info__name name">{{title}}</span>
    
        </div>
        <div class="message__info info">
        <span class="info__time">8 декабря</span>
        </div>
    </div>
`;

export default template;
