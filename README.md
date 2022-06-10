# rpn-calculator
An RPN calculator computes expressions written in Reverse Polish Notation.

An RPN expression or postfix expression is one of the following:

 - a number X, in which case the value of the expression is that of X,
 - a sequence of form E1 E2 OP where E1 and E2 are RPN expressions and OP is an arithmetic operation.

Samples: 
  20 5 /        => 20/5 = 4 \n
  4 2 + 3 -     => (4+2) = 6
  3 4 + 5 *     => (3+4)*5 = 35
  3 5 8 * 7 + * => (
    (5*8) => 40
    40+7 => 47
    ) 47*3 = 141




Empty expression should evaluate to 0.



Valid operations are +, -, *, /.

