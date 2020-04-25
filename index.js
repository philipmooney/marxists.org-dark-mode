const DARK_STYLE = {
  background: 'rgb(53, 54, 42)',
  color: 'rgb(255, 249, 252)',
  headersA: 'rgb(248, 252, 243)',
  headersB: 'rgb(242, 242, 230)',
  headersC: 'rgb(214, 214, 252)',
  aLink:    'rgb(138, 180, 248)',
  aHover:   'rgb(75, 140, 254)',
  aVisited: 'rgb(237, 124, 248)',
  aActive:  'rgb(237, 124, 248)',
  misc: `
sup.anote,sup.ednote,span.info,span.term,p.information,p.toc,p.title2,p.pagenote { color:  rgb(189, 193, 198); }
a.mecw,span.context,span.date,td.head { color: rgb(220, 200, 210);}
div.border { background: rgb(50, 56, 4); border: rgb(255, 40, 255); }
span.inote,p.transcriber,p.pagenoteb { color: rgb(205, 217, 230);}
p.endnote { color: rgb(249, 244, 232); }
td { background: rgb(32, 28, 34); color: rgb(32, 28, 34); }
table.data { background: rgb(51, 50, 48); }
hr { border: none; background-color: rgb(145, 252, 133); }
tr.alt { background: rgb(44, 68, 32); }
tr.total { background: rgb(102, 4, 8); }
tr.totalb { background: rgb(132, 10, 4); }
td.index { background: rgb(26, 22, 26); color: rgb(150, 250, 102); }
td.index-alt,td.indexb { background: rgb(70, 77, 70); color: rgb(160, 255, 96); }
img { filter: grayscale(95%) invert(95%); opacity: 0.95; }
`};

/*
  background-color:
  text:
  h1, h1.big, h2
  h3 , h4 , h5, h6
  h7 
  a, a:link
  a:hover
  a:visited
  a:active

  a.mecw,span.context,span.date,td.head { color: rgb(220, 200, 210);}
  div.border { background: rgb(50, 56, 4); border: rgb(255, 40, 255); }
  hr { border: none; background-color: rgb(145, 252, 133); }
  sup.anote
  sup.ednote
  span.inote
  span.info
  span.term
  p.information
  p.toc
  p.title2
  p.pagenote
  p.transcriber
  p.pagenoteb { color: rgb(205, 217, 230);}
  p.endnote { color: rgb(249, 244, 232); }

  table.data { background: rgb(51, 50, 48); }
  td { background: rgb(32, 28, 34); color: rgb(32, 28, 34); }
  tr.alt { background: rgb(44, 68, 32); }
  tr.total { background: rgb(102, 4, 8); }
  tr.totalb { background: rgb(132, 10, 4); }
  td.index { background: rgb(26, 22, 26); color: rgb(150, 250, 102); }
  td.index-alt,td.indexb { background: rgb(70, 77, 70); color: rgb(160, 255, 96); }
  img { filter: grayscale(95%) invert(95%); opacity: 0.95; }
*/

$(function(){
    const state = {
      button: 'light',
      cssParams: null,
    };

    $("#popover").popover({
        html : true,
        content: function() {
          const popoverContent = `
          <div>
            <div class="btn-group btn-group-toggle mb-3" data-toggle="buttons">
              <label class="btn btn-sm btn-outline-dark${state.button == 'light' ? ' active' :''}">
                <input type="radio" name="options" value="light"${state.button == 'light' ? ' checked' :''}>Light
              </label>
              <label class="btn btn-sm btn-outline-dark${state.button == 'dark-a' ? ' active' :''}">
                <input type="radio" name="options" value="dark-a"${state.button == 'dark-a' ? ' checked' :''}>Dark A
              </label>
              <label class="btn btn-sm btn-outline-dark${state.button == 'dark-b' ? ' active' :''}">
                <input type="radio" name="options" value="dark-b"${state.button == 'dark-b' ? ' checked' :''}>Dark B
              </label>
              <label class="btn btn-sm btn-outline-dark${state.button == 'custom' ? ' active' :''}">
                <input type="radio" name="options" value="custom"${state.button == 'custom' ? ' checked' :''}>Custom
              </label>
            </div>

            <div class="input-group input-group-sm mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-sm">background</span>
              </div>
              <input type="text"
                     class="form-control"
                     data-group="custom"
                     data-role="background"
                     disabled>
            </div>

            <div class="input-group input-group-sm mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-sm">text color</span>
              </div>
              <input type="text"
                     class="form-control"
                     data-group="custom"
                     data-role="color"
                     disabled>
            </div>

            <div class="input-group input-group-sm mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-sm">h1, h1.big, h2</span>
              </div>
              <input type="text"
                     class="form-control"
                     data-group="custom"
                     data-role="headersA"
                     disabled>
            </div>

            <div class="input-group input-group-sm mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-sm">h3 , h4 , h5, h6</span>
              </div>
              <input type="text"
                     class="form-control"
                     data-group="custom"
                     data-role="headersB"
                     disabled>
            </div>

            <div class="input-group input-group-sm mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-sm">h7</span>
              </div>
              <input type="text"
                     class="form-control"
                     data-group="custom"
                     data-role="headersC"
                     disabled>
            </div>

            <div class="input-group input-group-sm mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-sm">a, a:link</span>
              </div>
              <input type="text"
                     class="form-control"
                     data-group="custom"
                     data-role="aLink"
                     disabled>
            </div>

            <div class="input-group input-group-sm mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-sm">a:hover</span>
              </div>
              <input type="text"
                     class="form-control"
                     data-group="custom"
                     data-role="aHover"
                     disabled>
            </div>

            <div class="input-group input-group-sm mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-sm">a:visited</span>
              </div>
              <input type="text"
                     class="form-control"
                     data-group="custom"
                     data-role="aVisited"
                     disabled>
            </div>

            <div class="input-group input-group-sm mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-sm">a:active</span>
              </div>
              <input type="text"
                     class="form-control"
                     data-group="custom"
                     data-role="aActive"
                     disabled>
            </div>

            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text">custom css</span>
              </div>
              <textarea class="form-control"
                        data-group="custom"
                        data-role="misc"
                        disabled></textarea>
            </div>

            <div class="mb-3">
              <button type="button" class="btn btn-sm btn-outline-primary" data-role="apply" data-group="custom" disabled>Apply</button>
            </div>
          </div>`;
          return $(popoverContent);
        },
    });

  $('#popover').on('shown.bs.popover', function () {
    if (state.cssParams != null) {
      setCustomCssFields(state.cssParams);
    }
    onGroupChange(state.button);
  })

  function onCustomClick() {
    $('[data-group=custom]').prop("disabled", false);
  }

  function setCssProperty(role, val) {
    $(`[data-role=${role}`).val(val);
  }

  function setCustomCssFields(params) {
     setCssProperty('background', params.background);
     setCssProperty('color', params.color);
     setCssProperty('headersA', params.headersA);
     setCssProperty('headersB', params.headersB);
     setCssProperty('headersC', params.headersC);
     setCssProperty('aLink', params.aLink);
     setCssProperty('aHover', params.aHover);
     setCssProperty('aVisited', params.aVisited);
     setCssProperty('aActive', params.aActive);
     setCssProperty('misc', params.misc);
  }

  function clearCustomCssFields(params) {
     setCssProperty('background', '');
     setCssProperty('color', '');
     setCssProperty('headersA', '');
     setCssProperty('headersB', '');
     setCssProperty('headersC', '');
     setCssProperty('aLink', '');
     setCssProperty('aHover', '');
     setCssProperty('aVisited', '');
     setCssProperty('aActive', '');
     setCssProperty('misc', '');
  }

  function getCssProperty(role) {
    const val = $(`[data-role=${role}`).val();
    return val == "" ? "inherit" : val;
  }

  function getCustomCss() {
    return {
      background: getCssProperty('background'),
      color: getCssProperty('color'),
      headersA: getCssProperty('headersA'),
      headersB: getCssProperty('headersB'),
      headersC: getCssProperty('headersC'),
      aLink: getCssProperty('aLink'),
      aHover: getCssProperty('aHover'),
      aVisited: getCssProperty('aVisited'),
      aActive: getCssProperty('aActive'),
      misc: $(`[data-role=misc`).val(),
    };
  }

  function buildCustomCss(params) {
    return `
body { background-color: ${params.background}; color: ${params.color}; }
h1, h1.big, h2 { color:  ${params.headersA}; }
h3 , h4 , h5, h6 { color:  ${params.headersB}; }
h7 { color: ${params.headersC}; }
a, a:link { color: ${params.aLink}; }
a:hover { color: ${params.aHover};}
a:visited, a:active { color: ${params.aVisited};}
${params.misc}`;
  }

  function buildUrlQuery(cssParams) {
    return $.param(cssParams);
  }

  function onGroupChange(value) {
    const $style = $("#dynamic-style");
    state.button = value;
    switch (value) {
      case "light": {
        $style.html('');
        clearCustomCssFields();
        clearQueryStringParameter();
        state.cssParams = null;
        $('[data-group=custom]').prop("disabled", true);
        break;
      }
      case "dark-a": {
        $style.html(buildCustomCss(DARK_STYLE));
        setCustomCssFields(DARK_STYLE);
        state.cssParams = DARK_STYLE;
        clearQueryStringParameter();
        $('[data-group=custom]').prop("disabled", true);
        break;
      }
      case "dark-b": {
        $style.html(buildCustomCss(DARK_STYLE));
        setCustomCssFields(DARK_STYLE);
        state.cssParams = DARK_STYLE;
        clearQueryStringParameter();
        $('[data-group=custom]').prop("disabled", true);
        break;
      }
      case "custom": {
        onCustomClick();
        break;
      }
      default: console.error("unknown value")
    }
    console.log(state.button);
  }

  function onApply() {
    const cssParams = getCustomCss();
    state.cssParams = DARK_STYLE;
    document.getElementById("dynamic-style").innerHTML = buildCustomCss(cssParams);
    setQueryStringParameter(buildUrlQuery(cssParams));
  }

  function clearQueryStringParameter() {
    window.history.replaceState({}, "", window.location.pathname);
  }

  function setQueryStringParameter(params) {
    window.history.replaceState({}, "", decodeURIComponent(`${window.location.pathname}?${params}`));
  }

  function getQueryStringParameters() {
    const params = new URLSearchParams(window.location.search);
    const entries = params.entries();
    return Array.from(entries).length > 0 ? Object.fromEntries(params.entries()) : null;
  }

  $(document).on('change', 'input[type=radio]', function() { onGroupChange(this.value);});
  $(document).on('click', '[data-role=apply]', function() { onApply(); });

  const customCssParams = getQueryStringParameters();
  if (customCssParams != null) {
    state.button = 'custom';
    state.cssParams = customCssParams;
    $('[data-group=custom]').prop("disabled", false);
    setCustomCssFields(customCssParams);
    document.getElementById("dynamic-style").innerHTML = buildCustomCss(customCssParams);
  }
});