const initSwalMaterial = () => {
  const link = document.createElement('link');
  link.href = "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap";
  link.rel = "stylesheet";

  const style = document.createElement('style');
  style.innerHTML = '.swal-material-container{text-align:left;color:#263238;' +
    'font-size:14px;font-weight:400;line-height:unset;margin-left:-28px;marg' +
    'in-right:-28px}.swal-material-button{position:relative;display:inline-b' +
    'lock;box-sizing:border-box;border:none;border-radius:4px;padding:0 16px' +
    ';min-width:64px;height:36px;vertical-align:middle;text-align:center;tex' +
    't-overflow:ellipsis;text-transform:uppercase;color:#2196f3;background-c' +
    'olor:transparent;font-family:var(--pure-material-font, "Roboto", "Segoe' +
    ' UI", BlinkMacSystemFont, system-ui, -apple-system);font-size:14px;font' +
    '-weight:500;line-height:36px;overflow:hidden;outline:0;cursor:pointer;t' +
    'ransition:box-shadow .2s;margin-left:10px}.swal-material-button::-moz-f' +
    'ocus-inner{border:none}.swal-material-button::before{content:"";positio' +
    'n:absolute;top:0;bottom:0;left:0;right:0;background-color:#2196f3;opaci' +
    'ty:0;transition:opacity .2s}.swal-material-button::after{content:"";pos' +
    'ition:absolute;left:50%;top:50%;border-radius:50%;padding:50%;width:32p' +
    'x;height:32px;background-color:#2196f3;opacity:0;transform:translate(-5' +
    '0%,-50%) scale(1);transition:opacity 1s,transform .5s}.swal-material-bu' +
    'tton:hover::before{opacity:.08}.swal-material-button:focus::before{opac' +
    'ity:.24}.swal-material-button:hover:focus::before{opacity:.3}.swal-mate' +
    'rial-button:active::after{opacity:.32;transform:translate(-50%,-50%) sc' +
    'ale(0);transition:transform 0s}.swal-material-title-container{padding-t' +
    'op:8px}.swal-material-title{margin-left:15px}.swal-material-text{margin' +
    '-top:12px;margin-bottom:0}.swal2-html-container{font-family: Roboto}' +
    '.swal-material-title{ font-size: 16px !important;}';

  document.head.appendChild(link);
  document.head.appendChild(style);
}

initSwalMaterial();
