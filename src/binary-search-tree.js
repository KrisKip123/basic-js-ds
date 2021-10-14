const {
  NotImplementedError
} = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
module.exports = class BinarySearchTree {

  list = null;

  root() {
    return this.list;
  }

  add(data) {
    let list = this.list;
    let proverka = true;
    if (list === null) {
      list = new Node(data);
      this.list = list;
    } else {
      while (proverka) {
        if (list.data > data) {
          if (list.left === null) {
            list.left = new Node(data);
            proverka = false;
          } else {
            list = list.left
          }
        } else {
          if (list.right === null) {
            list.right = new Node(data);
            proverka = false;
          } else {
            list = list.right;
          }
        }
      }
    }
  }

  has(data) {
    let list = this.list;
    let proverka = true;
    if (list === null) {
      return null;
    } else {
      while (proverka) {
        if (list.data === data) {
          return true;
        } else {
          if (list.data > data) {
            list = list.left;
          } else if (list.data < data) {
            list = list.right
          }

          if (list === null) {
            return false;
          }
        }
      }


    }

  }

  find(data) {
    let list = this.list;
    let proverka = true;
    if (list === null) {
        return null;
    }
    if (list.data === data) {
        return list;
    }
    if (list.left === null && list.right === null) {
        return null;
    }
    while (proverka) {
        if (list.data > data) {
            list = list.left;
            if(list === null){
                return null;
            }else if (list.data === data) {
                return list;
            }
        } else if (list.data < data) {
            list = list.right;
            if(list === null){
                return null;
            }else if (list.data === data) {
                return list;
            }
        }
        if (list.left === null && list.right === null) {
            return null;
        }
    }
}

  remove(data) {
    this.list = removeList(this.list, data);
    function removeList(list, data) {
      if (list === null) {
        return null;
      } else if (data < list.data) {
        list.left = removeList(list.left, data);
        return list;
      } else if (data > list.data) {
        list.right = removeList(list.right, data);
        return list;
      } else {
        if (list.left === null && list.right === null) {
          list = null;
          return list;
        }
        if (list.left === null) {
          list = list.right;
          return list;
        } else if (list.right === null) {
          list = list.left;
          return list;
        }
        let listNow = nodeMin(list.right);
        list.data = listNow.data;
        list.right = removeList(list.right, listNow.data);
        return list;
      }
    } 
    function nodeMin(list_l) {
      let list = list_l;
      let value = list.data;
      let proverka = true;
      while (proverka) {
        if (list.left !== null) {
          list = list.left;
          if (value > list.data) {
            return  list;
          }
        } else if (list.right !== null) {
          list = list.right;
          if (value > list.data) {
            return value = list;
          }
        }
        if (list.left === null && list.right === null) {
          return  list;
        }
      }
    }
  }




  min() {
    let list = this.list;
    if (list === null) {
      return null;
    }
    let value = list.data;
    let proverka = true;
    while (proverka) {
      if (list.left !== null) {
        list = list.left;
        if (value > list.data) {
          value = list.data;
        }
      } else if (list.right !== null) {
        list = list.right;
        if (value > list.data) {
          value = list.data;
        }
      }
      if (list.left === null && list.right === null) {
        return value;
      }
    }
  }

  max() {
    let list = this.list;
    if (list === null) {
      return null;
    }
    let value = list.data;
    let proverka = true;
    while (proverka) {
      if (list.right !== null) {
        list = list.right;
        if (value < list.data) {
          value = list.data;
        }
      } else if (list.left !== null) {
        list = list.left;
        if (value < list.data) {
          value = list.data;
        }
      }
      if (list.left === null && list.right === null) {
        return value;
      }
    }
  }

}


class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}