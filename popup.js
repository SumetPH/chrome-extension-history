chrome.tabs.getSelected(null, tab => {
  let tablink = tab.url.split("/");
  chrome.history.search({ text: tablink[2], maxResults: 50 }, data => {
    $("#loading").hide();
    data.forEach(page => {
      const el = `
        <div class="m-2">
          <a class="btn btn-outline-info btn-sm btn-block animated fadeIn" target="_blank" href="${
            page.url
          }">
            <div class="ellipsis">${page.title}</div>
          </a>
        </div>
      `;
      $("#history").append(el);
    });
  });
});
