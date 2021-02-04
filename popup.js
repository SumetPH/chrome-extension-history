chrome.tabs.getSelected(null, (tab) => {
  let tablink = tab.url.split("/");
  let text = tablink[4].split("-");

  chrome.history.search(
    { text: text[0], startTime: 0, maxResults: 50 },
    (data) => {
      // hidden loading
      $("#loading").hide();

      // create history list
      data.forEach((page) => {
        const el = `
        <div class="m-2">
          <a class="btn btn-outline-info btn-sm btn-block animated fadeIn" target="_blank" href="${page.url}">
            <div class="ellipsis">${page.title}</div>
          </a>
        </div>
      `;

        // append history to show
        $("#history").append(el);
      });
    }
  );
});
