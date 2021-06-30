const formatFullname = require('../formatFullname.js');
const expect = require('chai').expect;

describe('FormatFullname', () => {

  it('should return an error if "fullName" is empty', () => {
    expect(formatFullname('')).to.equal('Error');
    expect(formatFullname(undefined)).to.equal('Error');
  });

  it('should return an error if "fullName" arg is not a string', () => {
    expect(formatFullname(undefined)).to.equal('Error');
    expect(formatFullname(12)).to.equal('Error');
    expect(formatFullname({})).to.equal('Error');
    expect(formatFullname([])).to.equal('Error');
    expect(formatFullname(function() {})).to.equal('Error');
  });

  it('should return an error if "fullName" has wrong format', () => {
    expect(formatFullname('John')).to.equal('Error');
    expect(formatFullname('John Doe Test')).to.equal('Error');
  });

  it('should return properly formated FullName if proper args', () => {
    expect(formatFullname('jOhn DOe')).to.equal('John Doe');
    expect(formatFullname('john doe')).to.equal('John Doe');
    expect(formatFullname('JOHN DOE')).to.equal('John Doe');
  });
});