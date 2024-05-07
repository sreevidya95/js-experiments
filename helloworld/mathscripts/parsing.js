
function parseAndDisplayName(value)
{
let str = value;
let i= str.indexOf(" ");
console.log(`First Name: ${str.substring(0,i)}`);
console.log(`Last Name: ${str.substring(i,str.length)}`);
};
parseAndDisplayName("Brenda Kaye");
parseAndDisplayName("Ian Auston");
parseAndDisplayName("Siddalee Grace");
