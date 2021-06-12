import React from "react";
import CodePen from "../../components/CodePen";

function PureJs2() {
  return (
    <>
      <section>
        <h1>Palindrome</h1>
        <CodePen>
          {"// "}"ababa" {"=>"} true
          <br />
          {"// "}"ababab" {"=>"} false
          <br />
          <br />
          function palindromeChecker(str) &#123;
          <br />
          &nbsp;&nbsp;return str.split('').every((item, index) {"=>"} &#123;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;return item === str[str.length - index - 1];
          <br />
          &#125;);
          <br />
          &#125;
          <br />
          palindromeChecker("ababa");
          <br />
          palindromeChecker("ababab");
          <CodePen output={true}>
            Output: <br />
            &nbsp;&nbsp;&nbsp;true
            <br />
            &nbsp;&nbsp;&nbsp;false
          </CodePen>
        </CodePen>
      </section>
      <section>
        <h1>Reverse Number</h1>
        <CodePen>
          {"// "}Reverse number -51 {"=>"} -15
          <br />
          {"// "}Reverse number 51 {"=>"} 15
          <br />
          {"// "}Reverse number 500 {"=>"} 5<br />
          {"// "}Reverse number -500 {"=>"} -5
          <br />
          <br />
          function reverseNumber(str) &#123;
          <br />
          &nbsp;&nbsp;return (str *
          Math.sign(str)).toString().split('').reverse().join('') *
          Math.sign(str);
          <br />
          &#125;
          <br />
          reverseNumber(-51);
          <br />
          reverseNumber(51);
          <br />
          reverseNumber(500);
          <br /> reverseNumber(-500);
          <CodePen output={true}>
            Output: <br />
            &nbsp;&nbsp;&nbsp;-15
            <br />
            &nbsp;&nbsp;&nbsp;15
            <br />
            &nbsp;&nbsp;&nbsp;5
            <br />
            &nbsp;&nbsp;&nbsp;-5
          </CodePen>
        </CodePen>
      </section>
      <section>
        <h1>Find the char array by common char in string!!</h1>
        <CodePen>
          {"// "}"Hello Wolrd!!" {"=>"} &#123; " ": 1, !: 2, H: 1, W: 1, d: 1,
          e: 1, l: 3, o: 2, r: 1 &#125;
          <br />
          <br />
          function commonChar(str) &#123;
          <br />
          &nbsp;&nbsp;let chars = &#123;&#125;;
          <br />
          &nbsp;&nbsp;for(let char of str) &#123;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;if(!chars[char]) chars[char] = 1;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;else chars[char]++
          <br />
          &nbsp;&nbsp;&#125;
          <br />
          &nbsp;&nbsp;return chars;
          <br />
          &#125;
          <br />
          commonChar("Hello Wolrd!!");
          <CodePen output={true}>
            Output: <br />
            &nbsp;&nbsp;&nbsp;
            <b>&#123;H: 1, e: 1, l: 3, o: 2, " ": 1, …&#125;</b>
            <br />
            &nbsp;&nbsp;&nbsp;&#123; " ": 1, !: 2, H: 1, W: 1, d: 1, e: 1, l: 3,
            o: 2, r: 1 &#125;
          </CodePen>
        </CodePen>
      </section>
      <section>
        <h1>
          Find the char array, maxChar and how many time use maxChar in string!!
        </h1>
        <CodePen>
          {"// "}"Hello Wolrd!!" {"=>"}
          <br />
          {"// "}chars: &#123; " ": 1, !: 2, H: 1, W: 1, d: 1, e: 1, l: 3, o: 2,
          r: 1 &#125;
          <br />
          {"// "}maxChar {"=>"} 'l' <br /> {"// "}max {"=>"} 3
          <br />
          <br />
          function commonChar(str) &#123;
          <br />
          &nbsp;&nbsp;let chars = &#123;&#125;;
          <br />
          &nbsp;&nbsp;let maxChar = '';
          <br />
          &nbsp;&nbsp;let max = 0;
          <br />
          &nbsp;&nbsp;for(let char of str) &#123;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;if(chars[char]) chars[char]++;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;else chars[char] = 1;
          <br />
          &nbsp;&nbsp;&#125;
          <br />
          &nbsp;&nbsp;for(let char in chars) &#123;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;if(chars[char] {">"} max) &#123;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;max = chars[char];
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;maxChar = char;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&#125;
          <br />
          &nbsp;&nbsp;&#125;
          <br />
          &nbsp;&nbsp;return &#123; chars, max, maxChar &#125;;
          <br />
          &#125;
          <br />
          commonChar("Hello Wolrd!!");
          <CodePen output={true}>
            Output: <br />
            &nbsp;&nbsp;&nbsp;
            <b>&#123;chars: &#123;…&#125;, max: 3, maxChar: "l"&#125;</b>
            <br />
            &nbsp;&nbsp;&nbsp;chars: &#123; " ": 1, !: 2, H: 1, W: 1, d: 1, e:
            1, l: 3, o: 2, r: 1 &#125;
            <br />
            &nbsp;&nbsp;&nbsp;max: 3
            <br />
            &nbsp;&nbsp;&nbsp;maxChar: "l"
          </CodePen>
        </CodePen>
      </section>
    </>
  );
}

export default PureJs2;
