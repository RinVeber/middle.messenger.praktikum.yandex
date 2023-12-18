function trim(str: string, substr: string = ' \xA0') {
  const regex = new RegExp(`^([${substr}])*(.*?)([${substr}])*$`, 'g');
  const res = regex.exec(str);
  if (!res) {
    return '';
  }
  return res[2] || '';
}

export default trim;
