import { Indexed } from '../../types';

function merge(lhs: Indexed, rhs: Indexed): Indexed {
  Object.keys(rhs).forEach((p) => {
    try {
      if ((rhs[p] as Indexed<any>).constructor === Object) {
        rhs[p] = merge(lhs[p] as Indexed, rhs[p] as Indexed);
      } else {
        lhs[p] = rhs[p];
      }
    } catch (e) {
      lhs[p] = rhs[p];
    }
  });

  return lhs;
}

export default merge;
