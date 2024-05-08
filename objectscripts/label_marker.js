let sampleObj={
 'name':'Sreevidya',
 'address':'Gunjur',
 'city':'Bangalore',
 'state':'Karnataka',
 'zip':560087

};
printContact(sampleObj);
function printContact(obj){
    console.log(obj.name);
    console.log(obj.address);
    console.log(obj.city+', '+obj.state+' '+obj.zip);

}