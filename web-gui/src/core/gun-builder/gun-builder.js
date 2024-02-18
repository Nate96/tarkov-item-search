import './gun-builder.css';

export class GunBuilderComponent {
  /**
   * @type {DOMParser}
   */
  domParser;

  constructor(domParser) {
    this.domParser = domParser;
  }

  async render() {
    const htmlString = await fetch('./gun-builder.html').then(response => response.text());
    const data = await fetch('').then(response => {}); // fetch data from server
    const localDocument = this.domParser.parseFromString(htmlString, 'text/html');
    if ("content" in localDocument.createElement("template")) {
      // get parent element
      const mods = localDocument.querySelectorAll('.mod');
      const template = localDocument.getElementById('mod-template');
      // @ts-ignore
      const clone = template.content.cloneNode(true);
      // apply changes to all relevant elements
      let modImage = clone.querySelector('.mod-image');
      modImage.src = data.image;
      let modName = clone.querySelector('.mod-shortname');
      modName.textContent = data.shortname;
    } else {
      // Find another way to add the polyfill
    }
    
    return localDocument;
  }
}