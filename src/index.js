/*
RPN Calculator
An RPN calculator computes expressions written in Reverse Polish Notation.

An RPN expression or postfix expression is one of the following:

 - a number X, in which case the value of the expression is that of X,
 - a sequence of form E1 E2 OP where E1 and E2 are RPN expressions and OP is an arithmetic operation.

 Samples: 
  20 5 /        => 20/5 = 4
  4 2 + 3 -     => (4+2) = 6
  3 4 + 5 *     => (3+4)*5 = 35
  3 5 8 * 7 + * => (
    (5*8) => 40
    40+7 => 47
    ) 47*3 = 141

For your convenience, 
the input is formatted such 
that a space is provided between every token.

Empty expression should evaluate to 0.

Valid operations are +, -, *, /.

*/

export function calculate(expression) {
  const data = expression.split(" ");
  // "" = [""]
  const ops = {
    "+": (a, b) => Number(a) + Number(b),
    "/": (a, b) => Number(a) / Number(b),
    "*": (a, b) => Number(a) * Number(b),
    "-": (a, b) => Number(a) - Number(b)
  };
  const stack = [];
  if (expression.length === 0) {
    return 0
  }
  data.forEach((element) => {
    if (isNaN(element)) {
      const b = stack.pop();
      const a = stack.pop();
      stack.push(ops[element](a, b));
    } else {
      stack.push(element);
    }
  });
  if (stack.length === 0) {
    return 0;
  }
  return stack[0];
}

// loop data , stack push
/*
if (data.length === 3) {
    const result = ops[data[2]](data[0], data[1]);
    return result;
  } else if (data.length === 5) {
    const first_ops = ops[data[2]](data[0], data[1]);
    const result = ops[data[4]](first_ops, data[3]);
    return result;
  }
*/
