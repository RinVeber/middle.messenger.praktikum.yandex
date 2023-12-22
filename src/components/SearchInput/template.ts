const template = () => `
<label class="label-search">
  <span class="label-search__text">
 {{label}}
  </span>
  <input 
    class="input {{class}}" 
    id="{{id}}" 
    value="{{value}}"
    type="{{type}}" 
    name="{{name}}"
    placeholder="&#128269; Поиск"
  />

</label>

`

export default template
