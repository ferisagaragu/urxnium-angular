export const materialDialog = (icon, title, text) => `
  <div class="swal-material-container">
    <div class="urx-row-dialog">
      <div class="urx-col-1-dialog">
        ${ generateSvgIcon(icon) }
      </div>

      <div class="urx-col-11-dialog swal-material-title-container">
        <strong class="swal-material-title">
          ${ title }
        </strong>
      </div>
    </div>

    <p class="swal-material-text">
      ${text}
    </p>
  </div>
`;

export const generateSvgIcon = (icon: string) => {
  let iconPath = ''

  switch (icon) {
    case 'success':
      iconPath = 'M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 ' +
        '22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 ' +
        '10.59L10 14.17L17.59 6.58L19 8L10 17Z';
    break;

    case 'error':
      iconPath = 'M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,' +
        '22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,' +
        '2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,' +
        '15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,' +
        '12L17,8.41L15.59,7Z';
    break;

    case 'warning':
      iconPath = 'M13 14H11V9H13M13 18H11V16H13M1 21H23L12 2L1 21Z';
    break;

    case 'info':
      iconPath = 'M13,9H11V7H13M13,17H11V11H13M12,2A10,10 ' +
        '0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,' +
        '10 0 0,0 12,2Z';
    break;

    case 'question':
      iconPath = 'M15.07,11.25L14.17,12.17C13.45,12.89 13,' +
        '13.5 13,15H11V14.5C11,13.39 11.45,12.39 12.17,' +
        '11.67L13.41,10.41C13.78,10.05 14,9.55 14,9C14,' +
        '7.89 13.1,7 12,7A2,2 0 0,0 10,9H8A4,4 0 0,1 12,' +
        '5A4,4 0 0,1 16,9C16,9.88 15.64,10.67 15.07,11.25M13,' +
        '19H11V17H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,' +
        '10 0 0,0 22,12C22,6.47 17.5,2 12,2Z';
    break;
  }

  return `
    <svg style="width:36px; height:36px" viewBox="0 0 24 24">
      <path
        fill="#757575"
        d="${iconPath}"
      />
    </svg>
  `;
}
