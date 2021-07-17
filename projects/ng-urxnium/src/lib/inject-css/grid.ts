const initGrid = () => {
  const style = document.createElement('style');
  style.innerHTML = '.urx-row{display:flex;flex-wrap:wrap}' +
    '.urx-col-1{flex:0 0 auto;width:8.333333%}.urx-col-2{f' +
    'lex:0 0 auto;width:16.666667%}.urx-col-3{flex:0 0 aut' +
    'o;width:25%}.urx-col-4{flex:0 0 auto;width:33.3333333' +
    '333%}.urx-col-5{flex:0 0 auto;width:41.666667%}.urx-c' +
    'ol-6{flex:0 0 auto;width:50%}.urx-col-7{flex:0 0 auto' +
    ';width:58.333333%}.urx-col-8{flex:0 0 auto;width:66.6' +
    '666666667%}.urx-col-9{flex:0 0 auto;width:75%}.urx-co' +
    'l-10{flex:0 0 auto;width:83.333333%}.urx-col-11{flex:' +
    '0 0 auto;width:91.666667%}.urx-col-12{flex:0 0 auto;w' +
    'idth:100%}@media (min-width:700px){.mobile-show{displ' +
    'ay:none!important}}@media (max-width:699px){.mobile-n' +
    'ot-show{display:none!important}.mobile-w-100{width:10' +
    '0%!important}.mobile-w-75{width:75%!important}.mobile' +
    '-w-50{width:50%!important}.mobile-w-25{width:25%!impo' +
    'rtant}.mobile-h-100{height:100%!important}.mobile-h-7' +
    '5{height:75%!important}.mobile-h-50{height:50%!import' +
    'ant}.mobile-h-25{height:25%!important}.mobile-m-0{mar' +
    'gin:0!important}.mobile-mt-0{margin-top:0!important}.' +
    'mobile-mb-0{margin-bottom:0!important}.mobile-ml-0{ma' +
    'rgin-left:0!important}.mobile-mr-0{margin-right:0!imp' +
    'ortant}.mobile-m-1{margin:.25rem!important}.mobile-mt' +
    '-1{margin-top:.25rem!important}.mobile-mb-1{margin-bo' +
    'ttom:.25rem!important}.mobile-ml-1{margin-left:.25rem' +
    '!important}.mobile-mr-1{margin-right:.25rem!important' +
    '}.mobile-m-2{margin:.5rem!important}.mobile-mt-2{marg' +
    'in-top:.5rem!important}.mobile-mb-2{margin-bottom:.5r' +
    'em!important}.mobile-ml-2{margin-left:.5rem!important' +
    '}.mobile-mr-2{margin-right:.5rem!important}.mobile-m-' +
    '3{margin:1rem!important}.mobile-mt-3{margin-top:1rem!' +
    'important}.mobile-mb-3{margin-bottom:1rem!important}.' +
    'mobile-ml-3{margin-left:1rem!important}.mobile-mr-3{m' +
    'argin-right:1rem!important}.mobile-m-4{margin:1.5rem!' +
    'important}.mobile-mt-4{margin-top:1.5rem!important}.m' +
    'obile-mb-4{margin-bottom:1.5rem!important}.mobile-ml-' +
    '4{margin-left:1.5rem!important}.mobile-mr-4{margin-ri' +
    'ght:1.5rem!important}.mobile-m-5{margin:1.5rem!import' +
    'ant}.mobile-mt-5{margin-top:3rem!important}.mobile-mb' +
    '-5{margin-bottom:3rem!important}.mobile-ml-5{margin-l' +
    'eft:3rem!important}.mobile-mr-5{margin-right:3rem!imp' +
    'ortant}.mobile-p-0{padding:0!important}.mobile-pt-0{p' +
    'adding-top:0!important}.mobile-pb-0{padding-bottom:0!' +
    'important}.mobile-pl-0{padding-left:0!important}.mobi' +
    'le-pr-0{padding-right:0!important}.mobile-p-1{padding' +
    ':.25rem!important}.mobile-pt-1{padding-top:.25rem!imp' +
    'ortant}.mobile-pb-1{padding-bottom:.25rem!important}.' +
    'mobile-pl-1{padding-left:.25rem!important}.mobile-pr-' +
    '1{padding-right:.25rem!important}.mobile-p-2{padding:' +
    '.5rem!important}.mobile-pt-2{padding-top:.5rem!import' +
    'ant}.mobile-pb-2{padding-bottom:.5rem!important}.mobi' +
    'le-pl-2{padding-left:.5rem!important}.mobile-pr-2{pad' +
    'ding-right:.5rem!important}.mobile-p-3{padding:1rem!i' +
    'mportant}.mobile-pt-3{padding-top:1rem!important}.mob' +
    'ile-pb-3{padding-bottom:1rem!important}.mobile-pl-3{p' +
    'adding-left:1rem!important}.mobile-pr-3{padding-right' +
    ':1rem!important}.mobile-p-4{padding:1.5rem!important}' +
    '.mobile-pt-4{padding-top:1.5rem!important}.mobile-pb-' +
    '4{padding-bottom:1.5rem!important}.mobile-pl-4{paddin' +
    'g-left:1.5rem!important}.mobile-pr-4{padding-right:1.' +
    '5rem!important}.mobile-p-5{padding:1.5rem!important}.' +
    'mobile-pt-5{padding-top:3rem!important}.mobile-pb-5{p' +
    'adding-bottom:3rem!important}.mobile-pl-5{padding-lef' +
    't:3rem!important}.mobile-pr-5{padding-right:3rem!impo' +
    'rtant}.mobile-text-center{text-align:center!important' +
    '}.mobile-text-left{text-align:left!important}.mobile-' +
    'text-right{text-align:right!important}}.mdi-26px{font' +
    '-size:26px!important}.mdi-input-icon{color:#757575!im' +
    'portant;font-size:26px!important}.disabled-link{color' +
    ':#9e9e9e;pointer-events:none}';
  document.head.appendChild(style);
}

initGrid();
