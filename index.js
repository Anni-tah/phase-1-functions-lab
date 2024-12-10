const hqStreet = 42;
function distanceFromHqInBlocks(distance) { 
  return Math.abs(hqStreet-distance);
  }
  distanceFromHqInBlocks(34);
 //Math.abs takes a negative number and returns as positive

 //Question 2
 function distanceFromHqInFeet(blocks) {
    return Math.abs(hqStreet-blocks)*264;
}
distanceFromHqInFeet(34);


//Question 3
function distanceTravelledInFeet(start, destination){
    const distanceInBlocks = destination - start;
    return Math.abs(distanceInBlocks* 264);
}
distanceTravelledInFeet(43, 44);


function calculatesFarePrice(start, destination) {
    const distanceTravelled = Math.abs(destination - start)* 264;
  if (distanceTravelled <= 400){
    return(0);
  } 
  else if (distanceTravelled >400 && distanceTravelled <=2000){
    return(2.56);
  } else if (distanceTravelled >2000 && distanceTravelled <2500){
    return (25);
  }
  else{
    return('cannot travel that far');
  }

  }
  calculatesFarePrice(43,44);