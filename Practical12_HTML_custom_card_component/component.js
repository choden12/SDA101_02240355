class CustomCard extends HTMLElement {
  constructor() {
    super();

    // Attach Shadow DOM
    this.attachShadow({ mode: "open" });

    // Define the HTML structure and styles
    this.shadowRoot.innerHTML = `
              <style>
                  /* Component container */
                  :host {
                      display: inline-block;
                      border: 1px solid #ddd;
                      border-radius: 8px;
                      background-color: var(--card-bg-color, #fff);
                      color: var(--card-text-color, #333);
                      max-width: 300px;
                      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                      font-family: Arial, sans-serif;
                      overflow: hidden;
                  }
  
                  /* Header styling */
                  .header {
                      padding: 16px;
                      background-color: var(--header-bg-color, #eee);
                      font-weight: bold;
                      text-align: center;
                      border-bottom: 1px solid #ddd;
                      display: block;
                      width: 100%;
                  }
  
                  /* Image styling */
                  .image {
                      width: 100%; 
                      height: 200px; 
                      object-fit: cover; 
                      display: block;
                  }
  
                  /* Content styling */
                  .content {
                      padding: 16px;
                      text-align: left;
                      display: block;
                      width: 100%;
                  }
                /* Footer styling */
                .footer {
                    padding: 16px;
                    background-color: var(--footer-bg-color, #eee);
                    text-align: center;
                    border-top: 1px solid #ddd;
                }
  
              </style>
  
              <div class="header">
                  <slot name="header">Default Header</slot>
              </div>
              <div class="image-container">
                  <slot name="image"></slot> 
              </div>
              <div class="content">
                  <slot name="content">Default Content</slot>
              </div>
              <div class="footer">
                <slot name="footer">Default Footer</slot>
            </div>
             
          `;
  }
}

// Define the custom card component
customElements.define("custom-card", CustomCard);
