import Wrec, { html } from "wrec";

/**
 * This fetches text or JSON from a given URL.
 */
class MyFetcher extends Wrec {
  static properties = {
    url: {
      doc: "URL to be fetched",
      type: String,
      reflect: true,
      value: "https://jsonplaceholder.typicode.com/posts/1",
    },
  };

  // Private methods cannot be called from HTML templates.
  // That is why the fetch method is not private.
  static html = html`
    <div>
      <input size="50" value="this.url" />
      <button onClick="fetch" type="button">Fetch</button>
    </div>
  `;

  async fetch() {
    try {
      const res = await fetch(this.url);
      const contentType = res.headers.get("Content-Type");
      if (contentType.startsWith("application/json")) {
        const json = await res.json();
        console.log(json);
      } else {
        const text = await res.text();
        console.log(text);
      }
    } catch (e) {
      console.error(e);
    }
  }
}

MyFetcher.register();
