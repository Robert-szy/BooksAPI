module.exports = (fullName) => {
  if(!fullName) return 'Error';
  if(typeof fullName !== 'string') return 'Error';

  let names = [];
  names = fullName.split(' ');
  if (names.length != 2) return 'Error';
  
  const firstName = names[0];
  const lastName = names[1];
  if(!firstName || !lastName) return false;
  return firstName[0].toUpperCase() + firstName.slice(1).toLowerCase() + ' ' + lastName[0].toUpperCase() + lastName.slice(1).toLowerCase() ;
};
