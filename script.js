const KEYCODE = [['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'],
['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete'],
['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],
['ShiftLeft', 'Backslash', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'],
['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight']]


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
const SHIFT_ON_RU = { ё: 'Ë',1: '!',2: '"',3: '№',4: ';',5: '%',6: ':',7: '?',8: '*',9: '(',0: ')','-': '_','=': '+','\\': '/','.': ',',
};

const SHIFT_OFF_RU = {  Ë: 'ё','!': '1','"': '2','№': '3',';': '4','%': '5',':': '6','?': '7','*': '8','(': '9',')': '0', _: '-','+': '=','/': '\\',',': '.',
};

const buttons = [
    { code: 'Backquote', en: '`', ru: 'ё', shift: { en: '`', ru: 'ё' }, printable: true },   { code: 'num1', en: '1', ru: '1', shift: { en: '!', ru: '!' }, printable: true }, { code: 'num2', en: '2', ru: '2', shift: { en: '@', ru: '"' }, printable: true }, { code: 'num3', en: '3', ru: '3', shift: { en: '#', ru: '№' }, printable: true }, { code: 'num4', en: '4', ru: '4', shift: { en: '$', ru: ';' }, printable: true },  { code: 'num5', en: '5', ru: '5', shift: { en: '%', ru: '%' }, printable: true },   { code: 'num6', en: '6', ru: '6', shift: { en: '^', ru: ':' }, printable: true },  { code: 'num7', en: '7', ru: '7', shift: { en: '&', ru: '?' }, printable: true },   { code: 'num8', en: '8', ru: '8', shift: { en: '*', ru: '*' }, printable: true }, { code: 'num9', en: '9', ru: '9', shift: { en: '(', ru: '(' }, printable: true },  { code: 'num0', en: '0', ru: '0', shift: { en: ')', ru: ')' }, printable: true },{ code: 'min', en: '-', ru: '-', shift: { en: '_', ru: '_' }, printable: true },   { code: 'Equal', en: '=', ru: '=', shift: { en: '+', ru: '+' }, printable: true },  { code: 'Backspace', en: 'Backspace', ru: 'Backspace', printable: false },  { code: 'Tab', en: 'Tab', ru: 'Tab', printable: false },  { code: 'KeyQ', en: 'q', ru: 'й', printable: true },   { code: 'KeyW', en: 'w', ru: 'ц', printable: true },   { code: 'KeyE', en: 'e', ru: 'у', printable: true },  { code: 'KeyR', en: 'r', ru: 'к', printable: true }, { code: 'KeyT', en: 't', ru: 'е', printable: true },   { code: 'KeyY', en: 'y', ru: 'н', printable: true },  { code: 'KeyU', en: 'u', ru: 'г', printable: true },  { code: 'KeyI', en: 'i', ru: 'ш', printable: true }, { code: 'KeyO', en: 'o', ru: 'щ', printable: true }, { code: 'KeyP', en: 'p', ru: 'з', printable: true },{ code: 'BracketLeft', en: '[', ru: 'х', shift: { en: '{', ru: 'х' }, printable: true },    { code: 'BracketRight', en: ']', ru: 'ъ', shift: { en: '}', ru: 'ъ' }, printable: true },   { code: 'Backslash', en: '\\', ru: '\\', shift: { en: '|', ru: '/' }, printable: true }, { code: 'Delete', en: 'DEL', ru: 'DEL', printable: false },  { code: 'CapsLock', en: 'Caps Lock', ru: 'Caps Lock', printable: false }, { code: 'KeyA', en: 'a', ru: 'ф', printable: true },  { code: 'KeyS', en: 's', ru: 'ы', printable: true }, { code: 'KeyD', en: 'd', ru: 'в', printable: true }, { code: 'KeyF', en: 'f', ru: 'а', printable: true }, { code: 'KeyG', en: 'g', ru: 'п', printable: true }, { code: 'KeyH', en: 'h', ru: 'р', printable: true },{ code: 'KeyJ', en: 'j', ru: 'о', printable: true }, { code: 'KeyK', en: 'k', ru: 'л', printable: true }, { code: 'KeyL', en: 'l', ru: 'д', printable: true },  { code: 'Semicolon', en: ';', ru: 'ж', shift: { en: ':', ru: 'ж' }, printable: true },  { code: 'Quote', en: '\'', ru: 'э', shift: { en: '"', ru: 'э' }, printable: true },  { code: 'Enter', en: 'Enter', ru: 'Enter', printable: false }, { code: 'ShiftLeft', en: 'Shift', ru: 'Shift', printable: false },{ code: 'IntlBackslash', en: '\\', ru: '\\', shift: { en: '|', ru: '/' }, printable: true },  { code: 'KeyZ', en: 'z', ru: 'я', printable: true }, { code: 'KeyX', en: 'x', ru: 'ч', printable: true }, { code: 'KeyC', en: 'c', ru: 'с', printable: true },  { code: 'KeyV', en: 'v', ru: 'м', printable: true },{ code: 'KeyB', en: 'b', ru: 'и', printable: true }, { code: 'KeyN', en: 'n', ru: 'т', printable: true },{ code: 'KeyM', en: 'm', ru: 'ь', printable: true },    { code: 'Comma', en: ',', ru: 'б', shift: { en: '<', ru: 'б' }, printable: true },    { code: 'Period', en: '.', ru: 'ю', shift: { en: '>', ru: 'ю' }, printable: true },  { code: 'Slash', en: '/', ru: '.', shift: { en: '?', ru: ',' }, printable: true },  { code: 'ArrowUp', en: '^', ru: '^', printable: true },  { code: 'ShiftRight', en: 'Shift', ru: 'Shift', printable: false }, { code: 'ControlLeft', en: 'Ctrl', ru: 'Ctrl', printable: false },  { code: 'MetaLeft', en: 'Win', ru: 'Win', printable: false }, { code: 'AltLeft', en: 'Alt', ru: 'Alt', printable: false }, { code: 'Space', en: ' ', ru: ' ', printable: true },  { code: 'AltRight', en: 'Alt', ru: 'Alt', printable: false },  { code: 'ArrowLeft', en: '<', ru: '<', printable: true }, { code: 'ArrowDown', en: 'Ў', ru: 'Ў', printable: true },  { code: 'ArrowRight', en: '>', ru: '>', printable: true }, { code: 'ControlRight', en: 'Ctrl', ru: 'Ctrl', printable: false },
  ];
  

  /*let isShiftLeft;
let isShiftRight;
let isCtrlLeft;
let isCtrlRight;
let isAltLeft;
let isAltRight;

let isCapsLock = false;
let inTimeout = false;

const keyboard = {};

let activeKeys = [];
let currentKey;
*/ 
  class KeyB {
    el = {
      container: null,
      information: null,
      textarea: null,
      keyboard: null,
      keys: [],
    }
  
    language = localStorage.getItem('language') || 'en';

    onKeyDown = (event) => {
      event.preventDefault();
      const index = buttons.findIndex((button) => button.code === event.code);
  
      const buttonWork = this.el.keys[index];
  
      buttonWork.classList.add('work');
  
      this.el.keys[index].click();
  
      if (event.shiftKey && event.altKey) {
        this.setNewLanguage();
      }
  
      if (event.shiftKey && !event.altKey) {
        this.SHIFT = true;
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


    onKeyUp = (event) => {
      const index = buttons.findIndex((button) => button.code === event.code);
  
      const buttonWork = this.el.keys[index];
  
      buttonWork.classList.remove('work');
    }
    
    onClick = (event) => {
      if (event.target.classList.contains('key')) {
        const index = Array.from(this.el.keys).findIndex((key) => key === event.target);
  
        this.onButtonAction(buttons[index]);
      }
    }

/*    this.properties.language = this.keyLayout.keyArrEn;
    if (localStorage.getItem('language') == this.keyLayout.keyArrRu) {
      this.properties.language = this.keyLayout.keyArrRu;
      localStorage.setItem('language', this.properties.language);
    } else if (localStorage.getItem('language') == this.keyLayout.keyArrRuShift) {
      this.properties.language = this.keyLayout.keyArrRuShift;
      localStorage.setItem('language', this.properties.language);
    } else if (localStorage.getItem('language') == this.keyLayout.keyArrEnShift) {
      this.properties.language = this.keyLayout.keyArrEnShift;
      localStorage.setItem('language', this.properties.language);
    }*/ 
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
        this.Del();
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
  
  const fillKeyb = () => {
    let f = new DocumentFragment();
    buttons.forEach((button) => {
      let key = createElement('button', 'key');
      key.setAttribute('type', 'button');
      if (button.code === 'Tab'){
        key.classList.add('tab');
      }
      else if (button.code === 'delete'){
        key.classList.add('Delete')
      }
      else if(button.code === 'Backspace'){
        key.classList.add('backspace');
      }
      else if (button.code === 'Enter'){
        key.classList.add('enter')
      }
      else if (button.code === 'ShiftLeft'){
        key.classList.add('left-shift')
      }
      else if (button.code === 'ShiftRight'){
        key.classList.add('right-shift')
      }
      else if (button.code === 'CapsLock'){
        key.classList.add('capslock')
      }
      else if (button.code === 'Space'){
        key.classList.add('space')
      }
      else if((button.code==='ArrowUp')||(button.code === 'ArrowDown')||(button.code === 'ArrowLeft')||(button.code === 'ArrowRight')){
        key.classList.add('arrow')
      }
      f.append(key);
    });
    return f;
  };
  function checkBothKeys(key) {
    return (document.getElementById(`${key}Left`).classList.contains('keyboard__key_active')
     && document.getElementById(`${key}Right`).classList.contains('keyboard__key_active'));
  }

  document.addEventListener('DOMContentLoaded', () => {
    const keyboard = new KeyB();
  
    keyboard.init();
  });
  