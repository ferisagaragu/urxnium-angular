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
};
initGrid();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25nLXVyeG5pdW0vc3JjL2xpYi9pbmplY3QtY3NzL2dyaWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxRQUFRLEdBQUcsR0FBRyxFQUFFO0lBQ3BCLE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDOUMsS0FBSyxDQUFDLFNBQVMsR0FBRyx1Q0FBdUM7UUFDdkQsdURBQXVEO1FBQ3ZELHVEQUF1RDtRQUN2RCx1REFBdUQ7UUFDdkQsdURBQXVEO1FBQ3ZELHVEQUF1RDtRQUN2RCx1REFBdUQ7UUFDdkQsdURBQXVEO1FBQ3ZELHVEQUF1RDtRQUN2RCx1REFBdUQ7UUFDdkQsdURBQXVEO1FBQ3ZELHVEQUF1RDtRQUN2RCx1REFBdUQ7UUFDdkQsdURBQXVEO1FBQ3ZELHVEQUF1RDtRQUN2RCx1REFBdUQ7UUFDdkQsdURBQXVEO1FBQ3ZELHVEQUF1RDtRQUN2RCx1REFBdUQ7UUFDdkQsdURBQXVEO1FBQ3ZELHVEQUF1RDtRQUN2RCx1REFBdUQ7UUFDdkQsdURBQXVEO1FBQ3ZELHVEQUF1RDtRQUN2RCx1REFBdUQ7UUFDdkQsdURBQXVEO1FBQ3ZELHVEQUF1RDtRQUN2RCx1REFBdUQ7UUFDdkQsdURBQXVEO1FBQ3ZELHVEQUF1RDtRQUN2RCx1REFBdUQ7UUFDdkQsdURBQXVEO1FBQ3ZELHVEQUF1RDtRQUN2RCx1REFBdUQ7UUFDdkQsdURBQXVEO1FBQ3ZELHVEQUF1RDtRQUN2RCx1REFBdUQ7UUFDdkQsdURBQXVEO1FBQ3ZELHVEQUF1RDtRQUN2RCx1REFBdUQ7UUFDdkQsdURBQXVEO1FBQ3ZELHVEQUF1RDtRQUN2RCx1REFBdUQ7UUFDdkQsdURBQXVEO1FBQ3ZELHVEQUF1RDtRQUN2RCx1REFBdUQ7UUFDdkQsdURBQXVEO1FBQ3ZELHVEQUF1RDtRQUN2RCx1REFBdUQ7UUFDdkQsdURBQXVEO1FBQ3ZELHVEQUF1RDtRQUN2RCx1REFBdUQ7UUFDdkQsdURBQXVEO1FBQ3ZELHVEQUF1RDtRQUN2RCx1REFBdUQ7UUFDdkQsdURBQXVEO1FBQ3ZELHVEQUF1RDtRQUN2RCx1REFBdUQ7UUFDdkQsdURBQXVEO1FBQ3ZELHVEQUF1RDtRQUN2RCx1REFBdUQ7UUFDdkQsdURBQXVEO1FBQ3ZELHVEQUF1RDtRQUN2RCx1REFBdUQ7UUFDdkQsdURBQXVEO1FBQ3ZELHVEQUF1RDtRQUN2RCx1REFBdUQ7UUFDdkQsdURBQXVEO1FBQ3ZELCtCQUErQixDQUFDO0lBQ2xDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ25DLENBQUMsQ0FBQTtBQUVELFFBQVEsRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaW5pdEdyaWQgPSAoKSA9PiB7XHJcbiAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xyXG4gIHN0eWxlLmlubmVySFRNTCA9ICcudXJ4LXJvd3tkaXNwbGF5OmZsZXg7ZmxleC13cmFwOndyYXB9JyArXHJcbiAgICAnLnVyeC1jb2wtMXtmbGV4OjAgMCBhdXRvO3dpZHRoOjguMzMzMzMzJX0udXJ4LWNvbC0ye2YnICtcclxuICAgICdsZXg6MCAwIGF1dG87d2lkdGg6MTYuNjY2NjY3JX0udXJ4LWNvbC0ze2ZsZXg6MCAwIGF1dCcgK1xyXG4gICAgJ287d2lkdGg6MjUlfS51cngtY29sLTR7ZmxleDowIDAgYXV0bzt3aWR0aDozMy4zMzMzMzMzJyArXHJcbiAgICAnMzMzJX0udXJ4LWNvbC01e2ZsZXg6MCAwIGF1dG87d2lkdGg6NDEuNjY2NjY3JX0udXJ4LWMnICtcclxuICAgICdvbC02e2ZsZXg6MCAwIGF1dG87d2lkdGg6NTAlfS51cngtY29sLTd7ZmxleDowIDAgYXV0bycgK1xyXG4gICAgJzt3aWR0aDo1OC4zMzMzMzMlfS51cngtY29sLTh7ZmxleDowIDAgYXV0bzt3aWR0aDo2Ni42JyArXHJcbiAgICAnNjY2NjY2NjY3JX0udXJ4LWNvbC05e2ZsZXg6MCAwIGF1dG87d2lkdGg6NzUlfS51cngtY28nICtcclxuICAgICdsLTEwe2ZsZXg6MCAwIGF1dG87d2lkdGg6ODMuMzMzMzMzJX0udXJ4LWNvbC0xMXtmbGV4OicgK1xyXG4gICAgJzAgMCBhdXRvO3dpZHRoOjkxLjY2NjY2NyV9LnVyeC1jb2wtMTJ7ZmxleDowIDAgYXV0bzt3JyArXHJcbiAgICAnaWR0aDoxMDAlfUBtZWRpYSAobWluLXdpZHRoOjcwMHB4KXsubW9iaWxlLXNob3d7ZGlzcGwnICtcclxuICAgICdheTpub25lIWltcG9ydGFudH19QG1lZGlhIChtYXgtd2lkdGg6Njk5cHgpey5tb2JpbGUtbicgK1xyXG4gICAgJ290LXNob3d7ZGlzcGxheTpub25lIWltcG9ydGFudH0ubW9iaWxlLXctMTAwe3dpZHRoOjEwJyArXHJcbiAgICAnMCUhaW1wb3J0YW50fS5tb2JpbGUtdy03NXt3aWR0aDo3NSUhaW1wb3J0YW50fS5tb2JpbGUnICtcclxuICAgICctdy01MHt3aWR0aDo1MCUhaW1wb3J0YW50fS5tb2JpbGUtdy0yNXt3aWR0aDoyNSUhaW1wbycgK1xyXG4gICAgJ3J0YW50fS5tb2JpbGUtaC0xMDB7aGVpZ2h0OjEwMCUhaW1wb3J0YW50fS5tb2JpbGUtaC03JyArXHJcbiAgICAnNXtoZWlnaHQ6NzUlIWltcG9ydGFudH0ubW9iaWxlLWgtNTB7aGVpZ2h0OjUwJSFpbXBvcnQnICtcclxuICAgICdhbnR9Lm1vYmlsZS1oLTI1e2hlaWdodDoyNSUhaW1wb3J0YW50fS5tb2JpbGUtbS0we21hcicgK1xyXG4gICAgJ2dpbjowIWltcG9ydGFudH0ubW9iaWxlLW10LTB7bWFyZ2luLXRvcDowIWltcG9ydGFudH0uJyArXHJcbiAgICAnbW9iaWxlLW1iLTB7bWFyZ2luLWJvdHRvbTowIWltcG9ydGFudH0ubW9iaWxlLW1sLTB7bWEnICtcclxuICAgICdyZ2luLWxlZnQ6MCFpbXBvcnRhbnR9Lm1vYmlsZS1tci0we21hcmdpbi1yaWdodDowIWltcCcgK1xyXG4gICAgJ29ydGFudH0ubW9iaWxlLW0tMXttYXJnaW46LjI1cmVtIWltcG9ydGFudH0ubW9iaWxlLW10JyArXHJcbiAgICAnLTF7bWFyZ2luLXRvcDouMjVyZW0haW1wb3J0YW50fS5tb2JpbGUtbWItMXttYXJnaW4tYm8nICtcclxuICAgICd0dG9tOi4yNXJlbSFpbXBvcnRhbnR9Lm1vYmlsZS1tbC0xe21hcmdpbi1sZWZ0Oi4yNXJlbScgK1xyXG4gICAgJyFpbXBvcnRhbnR9Lm1vYmlsZS1tci0xe21hcmdpbi1yaWdodDouMjVyZW0haW1wb3J0YW50JyArXHJcbiAgICAnfS5tb2JpbGUtbS0ye21hcmdpbjouNXJlbSFpbXBvcnRhbnR9Lm1vYmlsZS1tdC0ye21hcmcnICtcclxuICAgICdpbi10b3A6LjVyZW0haW1wb3J0YW50fS5tb2JpbGUtbWItMnttYXJnaW4tYm90dG9tOi41cicgK1xyXG4gICAgJ2VtIWltcG9ydGFudH0ubW9iaWxlLW1sLTJ7bWFyZ2luLWxlZnQ6LjVyZW0haW1wb3J0YW50JyArXHJcbiAgICAnfS5tb2JpbGUtbXItMnttYXJnaW4tcmlnaHQ6LjVyZW0haW1wb3J0YW50fS5tb2JpbGUtbS0nICtcclxuICAgICcze21hcmdpbjoxcmVtIWltcG9ydGFudH0ubW9iaWxlLW10LTN7bWFyZ2luLXRvcDoxcmVtIScgK1xyXG4gICAgJ2ltcG9ydGFudH0ubW9iaWxlLW1iLTN7bWFyZ2luLWJvdHRvbToxcmVtIWltcG9ydGFudH0uJyArXHJcbiAgICAnbW9iaWxlLW1sLTN7bWFyZ2luLWxlZnQ6MXJlbSFpbXBvcnRhbnR9Lm1vYmlsZS1tci0ze20nICtcclxuICAgICdhcmdpbi1yaWdodDoxcmVtIWltcG9ydGFudH0ubW9iaWxlLW0tNHttYXJnaW46MS41cmVtIScgK1xyXG4gICAgJ2ltcG9ydGFudH0ubW9iaWxlLW10LTR7bWFyZ2luLXRvcDoxLjVyZW0haW1wb3J0YW50fS5tJyArXHJcbiAgICAnb2JpbGUtbWItNHttYXJnaW4tYm90dG9tOjEuNXJlbSFpbXBvcnRhbnR9Lm1vYmlsZS1tbC0nICtcclxuICAgICc0e21hcmdpbi1sZWZ0OjEuNXJlbSFpbXBvcnRhbnR9Lm1vYmlsZS1tci00e21hcmdpbi1yaScgK1xyXG4gICAgJ2dodDoxLjVyZW0haW1wb3J0YW50fS5tb2JpbGUtbS01e21hcmdpbjoxLjVyZW0haW1wb3J0JyArXHJcbiAgICAnYW50fS5tb2JpbGUtbXQtNXttYXJnaW4tdG9wOjNyZW0haW1wb3J0YW50fS5tb2JpbGUtbWInICtcclxuICAgICctNXttYXJnaW4tYm90dG9tOjNyZW0haW1wb3J0YW50fS5tb2JpbGUtbWwtNXttYXJnaW4tbCcgK1xyXG4gICAgJ2VmdDozcmVtIWltcG9ydGFudH0ubW9iaWxlLW1yLTV7bWFyZ2luLXJpZ2h0OjNyZW0haW1wJyArXHJcbiAgICAnb3J0YW50fS5tb2JpbGUtcC0we3BhZGRpbmc6MCFpbXBvcnRhbnR9Lm1vYmlsZS1wdC0we3AnICtcclxuICAgICdhZGRpbmctdG9wOjAhaW1wb3J0YW50fS5tb2JpbGUtcGItMHtwYWRkaW5nLWJvdHRvbTowIScgK1xyXG4gICAgJ2ltcG9ydGFudH0ubW9iaWxlLXBsLTB7cGFkZGluZy1sZWZ0OjAhaW1wb3J0YW50fS5tb2JpJyArXHJcbiAgICAnbGUtcHItMHtwYWRkaW5nLXJpZ2h0OjAhaW1wb3J0YW50fS5tb2JpbGUtcC0xe3BhZGRpbmcnICtcclxuICAgICc6LjI1cmVtIWltcG9ydGFudH0ubW9iaWxlLXB0LTF7cGFkZGluZy10b3A6LjI1cmVtIWltcCcgK1xyXG4gICAgJ29ydGFudH0ubW9iaWxlLXBiLTF7cGFkZGluZy1ib3R0b206LjI1cmVtIWltcG9ydGFudH0uJyArXHJcbiAgICAnbW9iaWxlLXBsLTF7cGFkZGluZy1sZWZ0Oi4yNXJlbSFpbXBvcnRhbnR9Lm1vYmlsZS1wci0nICtcclxuICAgICcxe3BhZGRpbmctcmlnaHQ6LjI1cmVtIWltcG9ydGFudH0ubW9iaWxlLXAtMntwYWRkaW5nOicgK1xyXG4gICAgJy41cmVtIWltcG9ydGFudH0ubW9iaWxlLXB0LTJ7cGFkZGluZy10b3A6LjVyZW0haW1wb3J0JyArXHJcbiAgICAnYW50fS5tb2JpbGUtcGItMntwYWRkaW5nLWJvdHRvbTouNXJlbSFpbXBvcnRhbnR9Lm1vYmknICtcclxuICAgICdsZS1wbC0ye3BhZGRpbmctbGVmdDouNXJlbSFpbXBvcnRhbnR9Lm1vYmlsZS1wci0ye3BhZCcgK1xyXG4gICAgJ2RpbmctcmlnaHQ6LjVyZW0haW1wb3J0YW50fS5tb2JpbGUtcC0ze3BhZGRpbmc6MXJlbSFpJyArXHJcbiAgICAnbXBvcnRhbnR9Lm1vYmlsZS1wdC0ze3BhZGRpbmctdG9wOjFyZW0haW1wb3J0YW50fS5tb2InICtcclxuICAgICdpbGUtcGItM3twYWRkaW5nLWJvdHRvbToxcmVtIWltcG9ydGFudH0ubW9iaWxlLXBsLTN7cCcgK1xyXG4gICAgJ2FkZGluZy1sZWZ0OjFyZW0haW1wb3J0YW50fS5tb2JpbGUtcHItM3twYWRkaW5nLXJpZ2h0JyArXHJcbiAgICAnOjFyZW0haW1wb3J0YW50fS5tb2JpbGUtcC00e3BhZGRpbmc6MS41cmVtIWltcG9ydGFudH0nICtcclxuICAgICcubW9iaWxlLXB0LTR7cGFkZGluZy10b3A6MS41cmVtIWltcG9ydGFudH0ubW9iaWxlLXBiLScgK1xyXG4gICAgJzR7cGFkZGluZy1ib3R0b206MS41cmVtIWltcG9ydGFudH0ubW9iaWxlLXBsLTR7cGFkZGluJyArXHJcbiAgICAnZy1sZWZ0OjEuNXJlbSFpbXBvcnRhbnR9Lm1vYmlsZS1wci00e3BhZGRpbmctcmlnaHQ6MS4nICtcclxuICAgICc1cmVtIWltcG9ydGFudH0ubW9iaWxlLXAtNXtwYWRkaW5nOjEuNXJlbSFpbXBvcnRhbnR9LicgK1xyXG4gICAgJ21vYmlsZS1wdC01e3BhZGRpbmctdG9wOjNyZW0haW1wb3J0YW50fS5tb2JpbGUtcGItNXtwJyArXHJcbiAgICAnYWRkaW5nLWJvdHRvbTozcmVtIWltcG9ydGFudH0ubW9iaWxlLXBsLTV7cGFkZGluZy1sZWYnICtcclxuICAgICd0OjNyZW0haW1wb3J0YW50fS5tb2JpbGUtcHItNXtwYWRkaW5nLXJpZ2h0OjNyZW0haW1wbycgK1xyXG4gICAgJ3J0YW50fS5tb2JpbGUtdGV4dC1jZW50ZXJ7dGV4dC1hbGlnbjpjZW50ZXIhaW1wb3J0YW50JyArXHJcbiAgICAnfS5tb2JpbGUtdGV4dC1sZWZ0e3RleHQtYWxpZ246bGVmdCFpbXBvcnRhbnR9Lm1vYmlsZS0nICtcclxuICAgICd0ZXh0LXJpZ2h0e3RleHQtYWxpZ246cmlnaHQhaW1wb3J0YW50fX0ubWRpLTI2cHh7Zm9udCcgK1xyXG4gICAgJy1zaXplOjI2cHghaW1wb3J0YW50fS5tZGktaW5wdXQtaWNvbntjb2xvcjojNzU3NTc1IWltJyArXHJcbiAgICAncG9ydGFudDtmb250LXNpemU6MjZweCFpbXBvcnRhbnR9LmRpc2FibGVkLWxpbmt7Y29sb3InICtcclxuICAgICc6IzllOWU5ZTtwb2ludGVyLWV2ZW50czpub25lfSc7XHJcbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XHJcbn1cclxuXHJcbmluaXRHcmlkKCk7XHJcbiJdfQ==