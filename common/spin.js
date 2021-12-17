function OnLinkClick(){

  m = 0, x = 0, y = 0;
  action  = new Array();
  act = new Array();
  hit = new Array();


  hit[0] = 9.5; act[0] = 1;
  hit[1] = 0.5; act[1] = 2;
  // hit[2] = 1; act[2] = 3;

  for(i=0; i<=hit.length - 1; i++) {
    m += hit[i];
  }
  n = Math.floor(Math.random() * m);
  n++;
  for(i=0; i<=hit.length - 1; i++) {
    x = y;
    y += hit[i];
    if(x<n && n<=y) action = act[i];
  }
  if(action == 1) {
    $(".roulette").removeClass('spin').addClass('roulette-goal');
    setTimeout( function () {
      location.href = 'atari.html';
    } , 8000 );
  } else if(action == 2) {
    $(".roulette").removeClass('spin').addClass('roulette-again');
    setTimeout( function () {
      location.href = 'hazure.html';
    } , 8000 );
  } else {
    $(".roulette").removeClass('spin');
    setTimeout( function () {
      location.href = '.html';
    } , 2000 );
  }
}