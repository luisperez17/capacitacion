const menuMobile = document.getElementById('block-mainnavigationmobile');
if (menuMobile) {
  const item = menuMobile.getElementsByClassName(
    'menu-nolink',
  );
  for (let i = 0; i < item.length; i++) {
    item[i].href = "#"
}
}
