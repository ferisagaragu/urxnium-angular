export const swalMaterialInjectCss = () => {
  if (document.getElementById('urx-swal-material-css')) {
    return;
  }

  if (document.getElementById('urx-google-font')) {
    return;
  }

  const link = document.createElement('link');
  link.id = 'urx-google-font'
  link.href = "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap";
  link.rel = "stylesheet";

  const style = document.createElement('style');
  style.id = 'urx-swal-material-css';
  style.innerHTML = `.urx-row-dialog{display:flex;flex-wrap:wrap}.urx-col-1-dialog{flex:0 0 auto;width:8.333333%}.urx-col-11-dialog{flex:0 0 auto;width:91.666667%}.swal-material-container{text-align:left;color:#263238;font-size:14px;font-weight:400;line-height:unset;margin-left:-28px;margin-right:-28px}.swal-material-button{position:relative;display:inline-block;box-sizing:border-box;border:none;border-radius:4px;padding:0 16px;min-width:64px;height:36px;vertical-align:middle;text-align:center;text-overflow:ellipsis;text-transform:uppercase;color:#2196f3;background-color:transparent;font-family:var(--pure-material-font, "Roboto", "Segoe UI", BlinkMacSystemFont, system-ui, -apple-system);font-size:14px;font-weight:500;line-height:36px;overflow:hidden;outline:0;cursor:pointer;transition:box-shadow .2s;margin-left:10px}.swal-material-button::-moz-focus-inner{border:none}.swal-material-button::before{content:"";position:absolute;top:0;bottom:0;left:0;right:0;background-color:#2196f3;opacity:0;transition:opacity .2s}.swal-material-button::after{content:"";position:absolute;left:50%;top:50%;border-radius:50%;padding:50%;width:32px;height:32px;background-color:#2196f3;opacity:0;transform:translate(-50%,-50%) scale(1);transition:opacity 1s,transform .5s}.swal-material-button:hover::before{opacity:.08}.swal-material-button:focus::before{opacity:.24}.swal-material-button:hover:focus::before{opacity:.3}.swal-material-button:active::after{opacity:.32;transform:translate(-50%,-50%) scale(0);transition:transform 0s}.swal-material-title-container{padding-top:8px}.swal-material-title{margin-left:15px;font-size:16px!important}.swal-material-text{margin-top:12px!important;margin-bottom:0}.swal2-html-container{font-family:Roboto}`;

  document.head.appendChild(link);
  document.head.appendChild(style);
}
