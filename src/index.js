/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  var k=0;
  var d=0;
  for (let i = 0; i < preferences.length; i++) {
    if(preferences[i]==preferences[0]){
      d++;
    }
  }
  if(d==preferences.length){
    return 0;
  }
  preferences.splice(0,0,',');
  for (let i = 1; i < preferences.length; i++) {
    var tmp1,tmp2;
    tmp1=preferences[i];
    tmp2=preferences[tmp1];
    if (preferences[tmp2]==i) {
      if(preferences[tmp2]!=preferences[i]){
      k++;
      delete preferences[i];
      delete preferences[tmp1];
      delete preferences[tmp2];
        }
    }
    
  }
  return k;
};
