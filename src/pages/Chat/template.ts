import linkUrl from '../../assets/icons/arrow-right.svg'
import './index.scss'

const template = () => `
<div>
    {{{createChatModal}}}
    {{{addUserModal}}}
    {{{deleteUserModal}}}
    <div class="chat">

        <div class="chat__lside">
            <div class="chat__lside-header">
              {{{createChatButton}}}
              <div class="linkContainer">
                  {{{linkProfile}}}
                  <img src="${linkUrl}">
              </div>
            </div>
            {{{inputSearch}}}

            <div class="chat__list">
                {{{chatModals}}}
            </div>
        </div>
        <div class="chat__content">
            <div class="content__header">
            <div class="content__buttons">
            {{{avatar}}}
              {{{addUserButton}}}
              {{{removeUserButton}}}
              </div>
              {{{MoreButton}}}
            </div>


            {{#if messages}}
              <div class="chat__exist" id="chatsList">
                {{{messages}}}
              </div>
            {{else}}
              <div class="chat__empty">
                {{#unless activeModal}}
                  <span>Выберите чат чтобы отправить сообщение</span>
                {{/unless}}
              </div>
            {{/if}}
            <div class="content__footer">
              {{{SendMessageForm}}}
            </div>
        </div>



    </div>
</div>
`

export default template
