import {Content} from "./content-interface";

export class ContentList {
  private readonly contents: Content[];

  constructor() {
    this.contents = [];
  }

  getContents(): Content[] {
    return this.contents;
  }

  add(content: Content) {
    this.contents.push(content);
  }

  length(): number {
    return this.contents.length;
  }

  getHtml(index: number): string {
    const content = this.contents[index];
    const title = content.title;
    const description = content.description;
    const creator = content.creator;
    const imgURL = content.imgURL;
    const type = content.type;
    let html = `<p>Title: ${title}</p><p>Description: ${description}</p><p>Creator: ${creator}</p>`;
    if (imgURL) {
      html += `<img src='${imgURL}' alt='${type}'>`;
    }
    if (type) {
      html += `<p>Type: ${type}</p>`;
    }
    return html;
  }
}
