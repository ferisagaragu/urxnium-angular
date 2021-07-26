export const swalMaterialInjectCss = () => {
    if (document.getElementById('urx-swal-material-css')) {
        return;
    }
    if (document.getElementById('urx-google-font')) {
        return;
    }
    const link = document.createElement('link');
    link.id = 'urx-google-font';
    link.href = "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap";
    link.rel = "stylesheet";
    const style = document.createElement('style');
    style.id = 'urx-swal-material-css';
    style.innerHTML = `.swal-material-container{text-align:left;color:#263238;font-size:14px;font-weight:400;line-height:unset;margin-left:-28px;margin-right:-28px}.swal-material-button{position:relative;display:inline-block;box-sizing:border-box;border:none;border-radius:4px;padding:0 16px;min-width:64px;height:36px;vertical-align:middle;text-align:center;text-overflow:ellipsis;text-transform:uppercase;color:#2196f3;background-color:transparent;font-family:var(--pure-material-font, "Roboto", "Segoe UI", BlinkMacSystemFont, system-ui, -apple-system);font-size:14px;font-weight:500;line-height:36px;overflow:hidden;outline:0;cursor:pointer;transition:box-shadow .2s;margin-left:10px}.swal-material-button::-moz-focus-inner{border:none}.swal-material-button::before{content:"";position:absolute;top:0;bottom:0;left:0;right:0;background-color:#2196f3;opacity:0;transition:opacity .2s}.swal-material-button::after{content:"";position:absolute;left:50%;top:50%;border-radius:50%;padding:50%;width:32px;height:32px;background-color:#2196f3;opacity:0;transform:translate(-50%,-50%) scale(1);transition:opacity 1s,transform .5s}.swal-material-button:hover::before{opacity:.08}.swal-material-button:focus::before{opacity:.24}.swal-material-button:hover:focus::before{opacity:.3}.swal-material-button:active::after{opacity:.32;transform:translate(-50%,-50%) scale(0);transition:transform 0s}.swal-material-title-container{padding-top:8px}.swal-material-title{margin-left:15px;font-size:16px!important}.swal-material-text{margin-top:12px!important;margin-bottom:0}.swal2-html-container{font-family:Roboto}`;
    document.head.appendChild(link);
    document.head.appendChild(style);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dhbC1tYXRlcmlhbC5pbmplY3QtY3NzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctdXJ4bml1bS9zcmMvbGliL2luamVjdC1jc3Mvc3dhbC1tYXRlcmlhbC5pbmplY3QtY3NzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE1BQU0sQ0FBQyxNQUFNLHFCQUFxQixHQUFHLEdBQUcsRUFBRTtJQUN4QyxJQUFJLFFBQVEsQ0FBQyxjQUFjLENBQUMsdUJBQXVCLENBQUMsRUFBRTtRQUNwRCxPQUFPO0tBQ1I7SUFFRCxJQUFJLFFBQVEsQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsRUFBRTtRQUM5QyxPQUFPO0tBQ1I7SUFFRCxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzVDLElBQUksQ0FBQyxFQUFFLEdBQUcsaUJBQWlCLENBQUE7SUFDM0IsSUFBSSxDQUFDLElBQUksR0FBRywrRUFBK0UsQ0FBQztJQUM1RixJQUFJLENBQUMsR0FBRyxHQUFHLFlBQVksQ0FBQztJQUV4QixNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzlDLEtBQUssQ0FBQyxFQUFFLEdBQUcsdUJBQXVCLENBQUM7SUFDbkMsS0FBSyxDQUFDLFNBQVMsR0FBRywyaURBQTJpRCxDQUFDO0lBRTlqRCxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNuQyxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3Qgc3dhbE1hdGVyaWFsSW5qZWN0Q3NzID0gKCkgPT4ge1xyXG4gIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXJ4LXN3YWwtbWF0ZXJpYWwtY3NzJykpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXJ4LWdvb2dsZS1mb250JykpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XHJcbiAgbGluay5pZCA9ICd1cngtZ29vZ2xlLWZvbnQnXHJcbiAgbGluay5ocmVmID0gXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDMwMDs0MDA7NTAwJmRpc3BsYXk9c3dhcFwiO1xyXG4gIGxpbmsucmVsID0gXCJzdHlsZXNoZWV0XCI7XHJcblxyXG4gIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcclxuICBzdHlsZS5pZCA9ICd1cngtc3dhbC1tYXRlcmlhbC1jc3MnO1xyXG4gIHN0eWxlLmlubmVySFRNTCA9IGAuc3dhbC1tYXRlcmlhbC1jb250YWluZXJ7dGV4dC1hbGlnbjpsZWZ0O2NvbG9yOiMyNjMyMzg7Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NDAwO2xpbmUtaGVpZ2h0OnVuc2V0O21hcmdpbi1sZWZ0Oi0yOHB4O21hcmdpbi1yaWdodDotMjhweH0uc3dhbC1tYXRlcmlhbC1idXR0b257cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTppbmxpbmUtYmxvY2s7Ym94LXNpemluZzpib3JkZXItYm94O2JvcmRlcjpub25lO2JvcmRlci1yYWRpdXM6NHB4O3BhZGRpbmc6MCAxNnB4O21pbi13aWR0aDo2NHB4O2hlaWdodDozNnB4O3ZlcnRpY2FsLWFsaWduOm1pZGRsZTt0ZXh0LWFsaWduOmNlbnRlcjt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtjb2xvcjojMjE5NmYzO2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7Zm9udC1mYW1pbHk6dmFyKC0tcHVyZS1tYXRlcmlhbC1mb250LCBcIlJvYm90b1wiLCBcIlNlZ29lIFVJXCIsIEJsaW5rTWFjU3lzdGVtRm9udCwgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtKTtmb250LXNpemU6MTRweDtmb250LXdlaWdodDo1MDA7bGluZS1oZWlnaHQ6MzZweDtvdmVyZmxvdzpoaWRkZW47b3V0bGluZTowO2N1cnNvcjpwb2ludGVyO3RyYW5zaXRpb246Ym94LXNoYWRvdyAuMnM7bWFyZ2luLWxlZnQ6MTBweH0uc3dhbC1tYXRlcmlhbC1idXR0b246Oi1tb3otZm9jdXMtaW5uZXJ7Ym9yZGVyOm5vbmV9LnN3YWwtbWF0ZXJpYWwtYnV0dG9uOjpiZWZvcmV7Y29udGVudDpcIlwiO3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2JvdHRvbTowO2xlZnQ6MDtyaWdodDowO2JhY2tncm91bmQtY29sb3I6IzIxOTZmMztvcGFjaXR5OjA7dHJhbnNpdGlvbjpvcGFjaXR5IC4yc30uc3dhbC1tYXRlcmlhbC1idXR0b246OmFmdGVye2NvbnRlbnQ6XCJcIjtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjUwJTt0b3A6NTAlO2JvcmRlci1yYWRpdXM6NTAlO3BhZGRpbmc6NTAlO3dpZHRoOjMycHg7aGVpZ2h0OjMycHg7YmFja2dyb3VuZC1jb2xvcjojMjE5NmYzO29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSkgc2NhbGUoMSk7dHJhbnNpdGlvbjpvcGFjaXR5IDFzLHRyYW5zZm9ybSAuNXN9LnN3YWwtbWF0ZXJpYWwtYnV0dG9uOmhvdmVyOjpiZWZvcmV7b3BhY2l0eTouMDh9LnN3YWwtbWF0ZXJpYWwtYnV0dG9uOmZvY3VzOjpiZWZvcmV7b3BhY2l0eTouMjR9LnN3YWwtbWF0ZXJpYWwtYnV0dG9uOmhvdmVyOmZvY3VzOjpiZWZvcmV7b3BhY2l0eTouM30uc3dhbC1tYXRlcmlhbC1idXR0b246YWN0aXZlOjphZnRlcntvcGFjaXR5Oi4zMjt0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSkgc2NhbGUoMCk7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gMHN9LnN3YWwtbWF0ZXJpYWwtdGl0bGUtY29udGFpbmVye3BhZGRpbmctdG9wOjhweH0uc3dhbC1tYXRlcmlhbC10aXRsZXttYXJnaW4tbGVmdDoxNXB4O2ZvbnQtc2l6ZToxNnB4IWltcG9ydGFudH0uc3dhbC1tYXRlcmlhbC10ZXh0e21hcmdpbi10b3A6MTJweCFpbXBvcnRhbnQ7bWFyZ2luLWJvdHRvbTowfS5zd2FsMi1odG1sLWNvbnRhaW5lcntmb250LWZhbWlseTpSb2JvdG99YDtcclxuXHJcbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKTtcclxuICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlKTtcclxufVxyXG4iXX0=