const metaCharset = document.createElement('meta');
const metaDevice = document.createElement('meta');
const style = document.createElement('link');
const favicon = document.createElement('link');
const title = document.createElement('title');

metaCharset.setAttribute('charset', 'UTF-8');

metaDevice.setAttribute('name', 'viewport');
metaDevice.setAttribute('content', 'width=device-width, initial-scale=1.0');

style.setAttribute('rel', 'stylesheet');
style.setAttribute('href', 'style.css');

title.innerText = 'Virtual Keyboard';

document.head.appendChild(metaCharset);
document.head.appendChild(metaDevice);
document.head.appendChild(style);
document.head.appendChild(favicon);
document.head.appendChild(title);

let SHIFT_ON_RU = new Map([['ё', 'Ё'],[1, '!'], [2,'"'], [3, '№'], [4, ';'], [5, '%'], [6, ':'], [7, '?'], [8, '*'], [9, '('], [0, ')'], ['-','_'], ['=', '+'], ['\\','/'], ['.', ',']]);



let SHIFT_OFF_RU = new Map([['Ё','ё'],['!','1'],['"', '2'], ['№','3'], [';','4'], ['%', '5'], [':', '6'], ['?', '7'], ['*', '8'], ['(', '9'], [')','0'], ['_','-'], ['+', '='], ['/', '\\'], [',','.']]);


const buttons = [
    { code: 'Backquote', en: '`', ru: 'ё', shift: { en: '~', ru: 'ё' }, printable: true },   { code: 'Digit1', en: '1', ru: '1', shift: { en: '!', ru: '!' }, printable: true }, { code: 'Digit2', en: '2', ru: '2', shift: { en: '@', ru: '"' }, printable: true }, { code: 'Digit3', en: '3', ru: '3', shift: { en: '#', ru: '№' }, printable: true }, { code: 'Digit4', en: '4', ru: '4', shift: { en: '$', ru: ';' }, printable: true },  { code: 'Digit5', en: '5', ru: '5', shift: { en: '%', ru: '%' }, printable: true },   { code: 'Digit6', en: '6', ru: '6', shift: { en: '^', ru: ':' }, printable: true },  { code: 'Digit7', en: '7', ru: '7', shift: { en: '&', ru: '?' }, printable: true },   { code: 'Digit8', en: '8', ru: '8', shift: { en: '*', ru: '*' }, printable: true }, { code: 'Digit9', en: '9', ru: '9', shift: { en: '(', ru: '(' }, printable: true },  { code: 'Digit0', en: '0', ru: '0', shift: { en: ')', ru: ')' }, printable: true },{ code: 'Minus', en: '-', ru: '-', shift: { en: '_', ru: '_' }, printable: true },   { code: 'Equal', en: '=', ru: '=', shift: { en: '+', ru: '+' }, printable: true },  { code: 'Backspace', en: 'Backspace', ru: 'Backspace', printable: false },  { code: 'Tab', en: 'Tab', ru: 'Tab', printable: false },  { code: 'KeyQ', en: 'q', ru: 'й', printable: true },   { code: 'KeyW', en: 'w', ru: 'ц', printable: true },   { code: 'KeyE', en: 'e', ru: 'у', printable: true },  { code: 'KeyR', en: 'r', ru: 'к', printable: true }, { code: 'KeyT', en: 't', ru: 'е', printable: true },   { code: 'KeyY', en: 'y', ru: 'н', printable: true },  { code: 'KeyU', en: 'u', ru: 'г', printable: true },  { code: 'KeyI', en: 'i', ru: 'ш', printable: true }, { code: 'KeyO', en: 'o', ru: 'щ', printable: true }, { code: 'KeyP', en: 'p', ru: 'з', printable: true },{ code: 'BracketLeft', en: '[', ru: 'х', shift: { en: '{', ru: 'х' }, printable: true },    { code: 'BracketRight', en: ']', ru: 'ъ', shift: { en: '}', ru: 'ъ' }, printable: true },   { code: 'Backslash', en: '\\', ru: '\\', shift: { en: '|', ru: '/' }, printable: true }, { code: 'Delete', en: 'DEL', ru: 'DEL', printable: false },  { code: 'CapsLock', en: 'Caps Lock', ru: 'Caps Lock', printable: false }, { code: 'KeyA', en: 'a', ru: 'ф', printable: true },  { code: 'KeyS', en: 's', ru: 'ы', printable: true }, { code: 'KeyD', en: 'd', ru: 'в', printable: true }, { code: 'KeyF', en: 'f', ru: 'а', printable: true }, { code: 'KeyG', en: 'g', ru: 'п', printable: true }, { code: 'KeyH', en: 'h', ru: 'р', printable: true },{ code: 'KeyJ', en: 'j', ru: 'о', printable: true }, { code: 'KeyK', en: 'k', ru: 'л', printable: true }, { code: 'KeyL', en: 'l', ru: 'д', printable: true },  { code: 'Semicolon', en: ';', ru: 'ж', shift: { en: ':', ru: 'ж' }, printable: true },  { code: 'Quote', en: '\'', ru: 'э', shift: { en: '"', ru: 'э' }, printable: true },  { code: 'Enter', en: 'Enter', ru: 'Enter', printable: false }, { code: 'ShiftLeft', en: 'Shift', ru: 'Shift', printable: false },{ code: 'IntlBackslash', en: '\\', ru: '\\', shift: { en: '|', ru: '/' }, printable: true },  { code: 'KeyZ', en: 'z', ru: 'я', printable: true }, { code: 'KeyX', en: 'x', ru: 'ч', printable: true }, { code: 'KeyC', en: 'c', ru: 'с', printable: true },  { code: 'KeyV', en: 'v', ru: 'м', printable: true },{ code: 'KeyB', en: 'b', ru: 'и', printable: true }, { code: 'KeyN', en: 'n', ru: 'т', printable: true },{ code: 'KeyM', en: 'm', ru: 'ь', printable: true },    { code: 'Comma', en: ',', ru: 'б', shift: { en: '<', ru: 'б' }, printable: true },    { code: 'Period', en: '.', ru: 'ю', shift: { en: '>', ru: 'ю' }, printable: true },  { code: 'Slash', en: '/', ru: '.', shift: { en: '?', ru: ',' }, printable: true },  { code: 'ArrowUp', en: '^', ru: '^', printable: true },  { code: 'ShiftRight', en: 'Shift', ru: 'Shift', printable: false }, { code: 'ControlLeft', en: 'Ctrl', ru: 'Ctrl', printable: false },  { code: 'MetaLeft', en: 'Win', ru: 'Win', printable: false }, { code: 'AltLeft', en: 'Alt', ru: 'Alt', printable: false }, { code: 'Space', en: ' ', ru: ' ', printable: true },  { code: 'AltRight', en: 'Alt', ru: 'Alt', printable: false },  { code: 'ArrowLeft', en: '<', ru: '<', printable: true }, { code: 'ArrowDown', en: '↓', ru: '↓', printable: true },  { code: 'ArrowRight', en: '>', ru: '>', printable: true }, { code: 'ControlRight', en: 'Ctrl', ru: 'Ctrl', printable: false },
  ];
  

  class KeyB {
    el = {
      container: null,
      information: null,
      textarea: null,
      keyboard: null,
      keys: [],
    }
  
 

    onKeyDown = (event) => {
      event.preventDefault();
      const index = buttons.findIndex((button) => button.code === event.code);  
      this.el.keys[index].classList.add('work');
      this.el.keys[index].click();
      if (event.shiftKey && event.altKey) {
        this.setNewLanguage();
      }

      if (event.shiftKey && !event.altKey) {
        this.SHIFT = true;
        this.addBTNname();
      }
    }

    onKeyUp = (event) => {
      const index = buttons.findIndex((button) => button.code === event.code);
      this.el.keys[index].classList.remove('work');
      if (!event.shiftKey && !event.altKey) {
        this.SHIFT = false;
        this.addBTNname();
      }
    }

     setNewLanguage = () => {
       if (this.language === 'en'){
         this.language = 'ru'
         localStorage.setItem('language', this.language);
          this.addBTNname();
       }
       else{
         this.language = 'en'
         localStorage.setItem('language', this.language);
         this.addBTNname();
       }
      }

  
    addBTNname() {
      this.el.keys.forEach((key, index) => {
        key.textContent = buttons[index][this.language];
  
        if (this.SHIFT) {
          if (buttons[index].shift) {
            key.textContent = buttons[index].shift[this.language].toUpperCase();
          } else if (buttons[index].printable) {
            key.textContent = buttons[index][this.language].toUpperCase();
          }
        }
      });
    }
    
    onClick = (event) => {
      if (event.target.classList.contains('key')) {
        const index = Array.from(this.el.keys).findIndex((key) => key === event.target);
  
        this.onButtonAction(buttons[index]);
      }
    }


    language = localStorage.getItem('language') || 'en';
    init() {
      document.addEventListener('click', this.onClick);  
      document.addEventListener('keydown', this.onKeyDown);
      document.addEventListener('keyup', this.onKeyUp);
      this.el.container = createElement('div', 'container');
      this.el.textarea = createElement('textarea', 'textarea');
      this.el.keyboard = createElement('div', 'keyboard');
      this.el.information = createElement('p', 'information');
      
      this.el.information.innerHTML = `<p>Клавиша CapsLock временно не работает, приношу свои извинения за неудобства)</p><p>Use Shift+Alt to change language</p><p>Made in OS Windows</p>`;

      this.el.keyboard.append(fillKeyb());
      this.el.keys = this.el.keyboard.querySelectorAll('.key');
  
      this.addBTNname();
      
  
      this.el.container.append(this.el.textarea,
        this.el.keyboard, this.el.information);
      document.body.append(this.el.container);
    }
  
    onButtonAction(button) {
      if (button.printable) {
        this.printLetter(button);
        return;
      }

      if (button.code === 'Enter'){
        this.Entr();
      }
      else if(button.code === 'Tab'){
        this.Tabulation();
      }
      else if (button.code === 'Backspace'){
        this.BackSpace();
      }
      else if(button.code === 'Delete'){
        this.Del()
      }
    }
  
    printLetter(button) {
      const { value, selectionStart } = this.el.textarea;
      const index = buttons.indexOf(button);
      const letter = this.el.keys[index].textContent;
  
      this.el.textarea.value = value.slice(0, selectionStart)
        + letter + value.slice(selectionStart);
  
      this.setCursorPosition(selectionStart + 1);
    }
  
    Entr() {
      const { value, selectionStart } = this.el.textarea;
  
      this.el.textarea.value = `${value.slice(0, selectionStart)}\n${value.slice(selectionStart)}`;
  
      this.setCursorPosition(selectionStart + 1);
    }
  
    Tabulation() {
      const { value, selectionStart } = this.el.textarea;
  
      this.el.textarea.value = `${value.slice(0, selectionStart)}\t${value.slice(selectionStart)}`;
  
      this.setCursorPosition(selectionStart + 1);
    }
  
    Del() {
      const { value, selectionStart } = this.el.textarea;
      const newSelectionStart = selectionStart > 0 ? selectionStart - 1 : 0;
  
      this.el.textarea.value = value.slice(0, newSelectionStart+1)
        + value.slice(selectionStart+1);
  
      this.setCursorPosition(newSelectionStart+1);
    }
    
    BackSpace() {
      const { value, selectionStart } = this.el.textarea;
      const newSelectionStart = selectionStart > 0 ? selectionStart - 1 : 0;
  
      this.el.textarea.value = value.slice(0, newSelectionStart)
        + value.slice(selectionStart);
  
      this.setCursorPosition(newSelectionStart);
    }

    setCursorPosition(position) {
      this.el.textarea.selectionStart = position;
      this.el.textarea.selectionEnd = position;
      this.el.textarea.focus();
    }
  
  }
  
  function createElement(tagName, ...classNames) {
    const element = document.createElement(tagName);
   element.classList.add(...classNames);
   return element;
  }

  const fillKeyb = () =>{
    let f = new DocumentFragment();
    buttons.forEach((button)=>{
      let key = createElement('button', 'key');
      key.setAttribute('type', 'button');
      switch (button.code){
        case('Tab'): key.classList.add('tab'); break;
        case('delete'): key.classList.add('Delete'); break;
        case('Backspace'): key.classList.add('backspace'); break;
        case('Enter'): key.classList.add('enter'); break;
        case('ShiftLeft'): key.classList.add('left-shift'); break;
        case('ShiftRight'): key.classList.add('right-shift'); break;
        case('CapsLock'): key.classList.add('capslock'); break;
        case('Space'): key.classList.add('space'); break;
        case('ArrowUp'): key.classList.add('arrow'); break;
        case('ArrowDown'): key.classList.add('arrow'); break;
        case('ArrowLeft'): key.classList.add('arrow'); break;
        case('ArrowRight'): key.classList.add('arrow'); break;
      }
      f.append(key);
    });
    return f;
  }

  
  function checkBothKeys(key) {
    return (document.getElementById(`${key}Left`).classList.contains('keyboard__key_active')
     && document.getElementById(`${key}Right`).classList.contains('keyboard__key_active'));
  }

  document.addEventListener('DOMContentLoaded', () => {
    const keyboard = new KeyB();
  
    keyboard.init();
  });
