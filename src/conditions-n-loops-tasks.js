/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  if (a >= b && a >= c) {
    return a;
  }
  if (b >= a && b >= c) {
    return b;
  }
  return c;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  if (queen.x === king.x || queen.y === king.y) {
    return true;
  }
  for (let i = 0; i < 8; i += 1) {
    if (queen.x + i === king.x && queen.y + i === king.y) {
      return true;
    }
    if (queen.x - i === king.x && queen.y - i === king.y) {
      return true;
    }
    if (queen.x + i === king.x && queen.y - i === king.y) {
      return true;
    }
    if (queen.x - i === king.x && queen.y + i === king.y) {
      return true;
    }
  }
  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */
function isIsoscelesTriangle(a, b, c) {
  if (a === b && c < a + b && c !== 0) {
    return true;
  }
  if (a === c && b < a + c && b !== 0) {
    return true;
  }
  if (b === c && a < c + b && a !== 0) {
    return true;
  }
  return false;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  let romanian;
  switch (num) {
    case 1:
      romanian = 'I';
      break;
    case 2:
      romanian = 'II';
      break;
    case 3:
      romanian = 'III';
      break;
    case 4:
      romanian = 'IV';
      break;
    case 5:
      romanian = 'V';
      break;
    case 6:
      romanian = 'VI';
      break;
    case 7:
      romanian = 'VII';
      break;
    case 8:
      romanian = 'VIII';
      break;
    case 9:
      romanian = 'IX';
      break;
    case 10:
      romanian = 'X';
      break;
    case 11:
      romanian = 'XI';
      break;
    case 12:
      romanian = 'XII';
      break;
    case 13:
      romanian = 'XIII';
      break;
    case 14:
      romanian = 'XIV';
      break;
    case 15:
      romanian = 'XV';
      break;
    case 16:
      romanian = 'XVI';
      break;
    case 17:
      romanian = 'XVII';
      break;
    case 18:
      romanian = 'XVIII';
      break;
    case 19:
      romanian = 'XIX';
      break;
    case 20:
      romanian = 'XX';
      break;
    case 21:
      romanian = 'XXI';
      break;
    case 22:
      romanian = 'XXII';
      break;
    case 23:
      romanian = 'XXIII';
      break;
    case 24:
      romanian = 'XXIV';
      break;
    case 25:
      romanian = 'XXV';
      break;
    case 26:
      romanian = 'XXVI';
      break;
    case 27:
      romanian = 'XXVII';
      break;
    case 28:
      romanian = 'XXVIII';
      break;
    case 29:
      romanian = 'XXIX';
      break;
    case 30:
      romanian = 'XXX';
      break;
    case 31:
      romanian = 'XXXI';
      break;
    case 32:
      romanian = 'XXXII';
      break;
    case 33:
      romanian = 'XXXIII';
      break;
    case 34:
      romanian = 'XXXIV';
      break;
    case 35:
      romanian = 'XXXV';
      break;
    case 36:
      romanian = 'XXXVI';
      break;
    case 37:
      romanian = 'XXXVII';
      break;
    case 38:
      romanian = 'XXXVIII';
      break;
    case 39:
      romanian = 'XXXIX';
      break;
    default:
      break;
  }
  return romanian;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let resultStroke = '';
  const probel = ' ';
  for (let i = 0; i < numberStr.length; i += 1) {
    if (i === numberStr.length - 1) {
      switch (numberStr[i]) {
        case '1':
          resultStroke += 'one';
          break;
        case '2':
          resultStroke += 'two';
          break;
        case '3':
          resultStroke += 'three';
          break;
        case '4':
          resultStroke += 'four';
          break;
        case '5':
          resultStroke += 'five';
          break;
        case '6':
          resultStroke += 'six';
          break;
        case '7':
          resultStroke += 'seven';
          break;
        case '8':
          resultStroke += 'eight';
          break;
        case '9':
          resultStroke += 'nine';
          break;
        case '0':
          resultStroke += 'zero';
          break;
        case '-':
          resultStroke += 'minus';
          break;
        case '.':
          resultStroke += 'point';
          break;
        case ',':
          resultStroke += 'point';
          break;
        default:
          break;
      }
    } else if (i < numberStr.length) {
      switch (numberStr[i]) {
        case '1':
          resultStroke += 'one';
          resultStroke += probel;
          break;
        case '2':
          resultStroke += 'two';
          resultStroke += probel;
          break;
        case '3':
          resultStroke += 'three';
          resultStroke += probel;
          break;
        case '4':
          resultStroke += 'four';
          resultStroke += probel;
          break;
        case '5':
          resultStroke += 'five';
          resultStroke += probel;
          break;
        case '6':
          resultStroke += 'six';
          resultStroke += probel;
          break;
        case '7':
          resultStroke += 'seven';
          resultStroke += probel;
          break;
        case '8':
          resultStroke += 'eight';
          resultStroke += probel;
          break;
        case '9':
          resultStroke += 'nine';
          resultStroke += probel;
          break;
        case '0':
          resultStroke += 'zero';
          resultStroke += probel;
          break;
        case '-':
          resultStroke += 'minus';
          resultStroke += probel;
          break;
        case '.':
          resultStroke += 'point';
          resultStroke += probel;
          break;
        case ',':
          resultStroke += 'point';
          resultStroke += probel;
          break;
        default:
          break;
      }
    }
  }
  return resultStroke;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let counter = 0;
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === str[str.length - i - 1]) {
      counter += 1;
    }
  }
  if (counter === str.length) {
    return true;
  }
  return false;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 4
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      return i;
    }
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  const numString = `${num}`;
  const digitString = `${digit}`;

  for (let i = 0; i < numString.length; i += 1) {
    if (numString[i] === digitString) {
      return true;
    }
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    let summLeft = 0;
    let summRight = 0;

    let k = i;
    while (k > 0) {
      summLeft += arr[k - 1];
      k -= 1;
    }
    k = i;
    while (k < arr.length - 1) {
      summRight += arr[k + 1];
      k += 1;
    }

    if (summLeft === summRight) {
      return i;
    }
  }
  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  const spiralMatrix = new Array(size);
  for (let i = 0; i < size; i += 1) {
    spiralMatrix[i] = [];
    for (let j = 0; j < size; j += 1) {
      spiralMatrix[i][j] = 0;
    }
  }
  const direction = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  let row = 0;
  let col = 0;
  let d = 0;
  let count = 1;

  while (count <= size * size) {
    spiralMatrix[row][col] = count;
    count += 1;

    const r = Math.abs((row + direction[d][0]) % size);
    const c = Math.abs((col + direction[d][1]) % size);

    if (spiralMatrix[r][c] !== 0) d = (d + 1) % 4;

    row += direction[d][0];
    col += direction[d][1];
  }
  return spiralMatrix;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const newMatrix = matrix;

  const matrixSize = matrix.length;
  for (let i = 0; i < matrixSize / 2; i += 1) {
    for (let j = i; j < matrixSize - i - 1; j += 1) {
      const rotatedMatrix = newMatrix[i][j];
      newMatrix[i][j] = newMatrix[matrixSize - j - 1][i];
      newMatrix[matrixSize - j - 1][i] =
        newMatrix[matrixSize - i - 1][matrixSize - j - 1];
      newMatrix[matrixSize - i - 1][matrixSize - j - 1] =
        newMatrix[j][matrixSize - i - 1];
      newMatrix[j][matrixSize - i - 1] = rotatedMatrix;
    }
  }
  return newMatrix;
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  const sortedArray = arr;
  for (let i = 0; i < sortedArray.length; i += 1) {
    for (let j = i; j < sortedArray.length; j += 1) {
      if (sortedArray[i] > sortedArray[j + 1]) {
        const bufer = sortedArray[i];
        sortedArray[i] = sortedArray[j + 1];
        sortedArray[j + 1] = bufer;
      }
    }
  }
  return sortedArray;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  let newStr = str.split('');
  let vkonec = '';
  let vnachalo = '';
  let loskutik = '';
  let iterator = 0;

  while (iterator < iterations) {
    for (let i = 0; i < newStr.length; i += 1) {
      if (i % 2 !== 0) {
        vkonec += newStr[i];
      }
      if (i % 2 === 0) {
        vnachalo += newStr[i];
      }
    }
    loskutik = vnachalo + vkonec;
    newStr = loskutik.split('');
    vnachalo = '';
    vkonec = '';
    iterator += 1;
  }

  return loskutik;
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(/* number */) {
  throw new Error('Not implemented');
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
