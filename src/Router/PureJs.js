import React from "react";
import ChunkArray from "../components/ChunkArray";
import CodePen from "../components/CodePen";

function PureJs() {
  const uniqueFn = () => {
    var arr = [1, 1, 1, 1, 3, 3, 3, 2, 2, 2, 4, 4, 4];
    console.info([...new Set(arr)]);
  };
  const generatorsFn1 = () => {
    function* g() {
      console.log("Start");
      yield "1st value...";
      console.log("2");
      yield "2nd value...";
      console.log("3");
    }
    var g = g();
    console.log(g.next());
  };
  return (
    <div className="col">
      <section>
        <h1>Find unique array</h1>
        <CodePen>
          var arr = [1,1,1,1,3,3,3,2,2,2,4,4,4,];
          <br />
          console.log([...new Set(arr)]);{uniqueFn()}
          <CodePen output={true}>OutPut: [1,3,2,4]</CodePen>
        </CodePen>
      </section>
      <section>
        <h1>Generators</h1>
        <CodePen>
          function *generators() &#123;
          <br />
          &nbsp;&nbsp;&nbsp;console.log('Start');{}
          <br />
          &nbsp;&nbsp;&nbsp;yield '1st value...';
          <br />
          &nbsp;&nbsp;&nbsp;console.log('2');
          <br />
          &nbsp;&nbsp;&nbsp;yield '2nd value...';
          <br />
          &nbsp;&nbsp;&nbsp;console.log('3');
          <br />
          &nbsp;&nbsp;&nbsp;return 'The End';
          <br />
          &#125;
          <br />
          var gen = generators();
          <br />
          console.log(gen.next());
          <CodePen output={true}>
            OutPut: <br />
            &nbsp;&nbsp;&nbsp;Start
            <br />
            &nbsp;&nbsp;&nbsp;Object &#123; value: "1st value...", done: false
            &#125;
          </CodePen>
          console.log(g.next().value);
          <CodePen output={true}>
            OutPut: <br />
            &nbsp;&nbsp;&nbsp;Start
            <br />
            &nbsp;&nbsp;&nbsp;1st value...
            <br />
          </CodePen>
          console.log(gen.next());
          <br />
          console.log(gen.next());
          <CodePen output={true}>
            OutPut: <br />
            &nbsp;&nbsp;&nbsp;Start
            <br />
            &nbsp;&nbsp;&nbsp;1st value...
            <br />
            &nbsp;&nbsp;&nbsp;2
            <br />
            &nbsp;&nbsp;&nbsp;2nd value...
            <br />
          </CodePen>
          console.log(gen.next());
          <br />
          console.log(gen.next());
          <br />
          console.log(gen.next());
          <CodePen output={true}>
            OutPut: <br />
            &nbsp;&nbsp;&nbsp;Start
            <br />
            &nbsp;&nbsp;&nbsp;1st value...
            <br />
            &nbsp;&nbsp;&nbsp;2
            <br />
            &nbsp;&nbsp;&nbsp;2nd value...
            <br />
            &nbsp;&nbsp;&nbsp;3
            <br />
            &nbsp;&nbsp;&nbsp;The End
          </CodePen>
        </CodePen>
        <h1>Iritator : When we use iritatot then it not return return</h1>

        <CodePen>
          for &#40; let gen of generators &#41; &#123;
          <br />
          &nbsp;&nbsp;&nbsp;console.log(gen);
          <br /> &#125;
          <CodePen output={true}>
            Output:
            <br />
            &nbsp;&nbsp;&nbsp;Start
            <br />
            &nbsp;&nbsp;&nbsp;1st value...
            <br />
            &nbsp;&nbsp;&nbsp;2
            <br />
            &nbsp;&nbsp;&nbsp;2nd value...
            <br />
            &nbsp;&nbsp;&nbsp;3
            <br />
          </CodePen>
        </CodePen>
      </section>
      <section id="#arrow">
        <h1>Example for this in function and arrow methord</h1>
        <CodePen>
          var fname = 'KK';
          <br />
          var xyz = &#123;
          <br />
          &nbsp;&nbsp;&nbsp;fname: 'Krishna',
          <br />
          &nbsp;&nbsp;&nbsp;age: 65,
          <br />
          &nbsp;&nbsp;&nbsp;callData: () ={">"} &#123;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.log(this, fname,
          this.fname, this.age);
          <br />
          &nbsp;&nbsp;&nbsp;&#125;
          <br />
          &#125;
          <br />
          xyz.callData();
          <CodePen output={true}>
            Output:
            <br />
            &nbsp;&nbsp;&nbsp;Window{}
            <br />
            &nbsp;&nbsp;&nbsp;"KK"
            <br />
            &nbsp;&nbsp;&nbsp;"KK
            <br />
            &nbsp;&nbsp;&nbsp;undefined
            <br />
          </CodePen>
        </CodePen>
      </section>
      <section>
        <h2 style={{ textAlign: "center" }}>Vs</h2>
        <h1 style={{ textAlign: "center" }}>Normal Function</h1>
        <CodePen>
          var fname = 'KK';
          <br />
          var xyz = &#123;
          <br />
          &nbsp;&nbsp;&nbsp;fname: 'Krishna',
          <br />
          &nbsp;&nbsp;&nbsp;age: 65,
          <br />
          &nbsp;&nbsp;&nbsp;callData: function () &#123;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.log(this, fname,
          this.fname, this.age);
          <br />
          &nbsp;&nbsp;&nbsp;&#125;
          <br />
          &#125;
          <br />
          xyz.callData();
          <CodePen output={true}>
            Output:
            <br />
            &nbsp;&nbsp;&nbsp;&#123;fname: "Krishna", age: 65, callData: ƒ&#125;
            <br />
            &nbsp;&nbsp;&nbsp;"KK"
            <br />
            &nbsp;&nbsp;&nbsp;"Krishna"
            <br />
            &nbsp;&nbsp;&nbsp;65
            <br />
          </CodePen>
        </CodePen>
      </section>
      <section>
        <ChunkArray />
      </section>
      <section>
        <h1>"This" in side the function and out side the function in window</h1>
        <CodePen>
          console.log(this.xyz);
          <CodePen output={true}>
            Output:
            <br />
            undefined
          </CodePen>
        </CodePen>
        <CodePen>
          function xyz() &#123;
          <br />
          &nbsp;&nbsp;console.log(this.xyz);
          <br />
          &#125;
          <br />
          xyz();
          <CodePen output={true}>
            Output: <br />
            &nbsp;&nbsp;&nbsp;ƒ xyz() &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.log(this.xyz);
            <br />
            &nbsp;&nbsp;&nbsp;&#125;
          </CodePen>
        </CodePen>
      </section>
      <section>
        <h1>
          Write a function which convert string data into camel case variable
          name
        </h1>
        <CodePen>
          function convertStingToCamelCase(input) &#123;
          <br />
          &nbsp;&nbsp;let inputArr = input.split(/[^A-Za-z]/);
          <br />
          &nbsp;&nbsp;let outputString = inputArr[0];
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;{`for(let i = 1; i < inputArr.length; i++)`}{" "}
          &#123;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;outputString +=
          inputArr[i].charAt(0).toUpperCase() + inputArr[i].slice(1);
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&#125;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;return outputString
          <br />
          &#125;
          <br />
          convertStingToCamelCase('my_nameIsKrishna');
          <CodePen output={true}>
            Output: <br />
            &nbsp;&nbsp;&nbsp;"myNameIsKrishna"
          </CodePen>
        </CodePen>
      </section>
      <section>
        <h1>Write a function which return the alpha into number</h1>
        <CodePen>
          function xyz(h) &#123;
          <br />
          &nbsp;&nbsp;if(typeof h == "string") &#123;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;var aplhaArra =
          "abcdefghijklmnopqrstuvwxyz".split("");
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;var temp = '';
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;h.split('').forEach(function (a,b) &#123;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;temp += aplhaArra.indexOf(a)+1;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&#125;);
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;console.log(temp);
          <br />
          &nbsp;&nbsp;&#125;
          <br />
          &#125;
          <br />
          xyz("abcz");
        </CodePen>
      </section>
      <section>
        <h1>Write a function which return array with given number.</h1>
        <CodePen>
          function generatArray(input) &#123;
          <br />
          &nbsp;&nbsp;// Using ES6
          <br />
          &nbsp;&nbsp;return Array.from(Array(input).keys());
          <br />
          &nbsp;&nbsp;// Using Spread Operator
          <br />
          &nbsp;&nbsp;return [...Array(input).keys()];
          <br />
          &nbsp;&nbsp;// Using map function
          <br />
          &nbsp;&nbsp;return Array.from(&#123;length: 10&#125;, (_, i) {
            "=>"
          }{" "}
          i);
          <br />
          &#125;
          <br />
          generatArray(10);
          <CodePen output={true}>
            Output: <br />
            &nbsp;&nbsp;&nbsp;[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
          </CodePen>
        </CodePen>
      </section>
      <section>
        <h1>Write a function which return alpha array.</h1>
        <CodePen>
          function alphaArray() &#123;
          <br />
          &nbsp;&nbsp;const arrNo = Array.from(&#123;length: 26&#125;, (_, i){" "}
          {"=>"} i + 65);
          <br />
          &nbsp;&nbsp;return arrNo.map((i) {"=>"} String.fromCharCode(i));
          <br />
          &#125;
          <br />
          alphaArray();
          <CodePen output={true}>
            Output: <br />
            &nbsp;&nbsp;&nbsp;["A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
            "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W",
            "X", "Y", "Z"]
          </CodePen>
        </CodePen>
      </section>
      <section>
        <h1>Write a function which return alpha position array.</h1>
        <CodePen>
          function alphaArray(input) &#123;
          <br />
          &nbsp;&nbsp;const arrNo = Array.from(&#123;length: 26&#125;, (_, i){" "}
          {"=>"} i + 65);
          <br />
          &nbsp;&nbsp;const alphaArr = arrNo.map((i) {"=>"}{" "}
          String.fromCharCode(i));
          <br />
          &nbsp;&nbsp;return input.split('').map(i {"=>"}{" "}
          alphaArr.indexOf(i.toUpperCase()));
          <br />
          &#125;
          <br />
          alphaArray('jp');
          <CodePen output={true}>
            Output: <br />
            &nbsp;&nbsp;&nbsp;[9, 15]
          </CodePen>
        </CodePen>
      </section>
      <section>
        <h1>Write a function which return alpha array.</h1>
        <CodePen>
          function alphaCodeArray(input) &#123;
          <br />
          &nbsp;&nbsp;const arrNo = Array.from(&#123;length: 26&#125;, (_, i){" "}
          {"=>"} i + 65);
          <br />
          &nbsp;&nbsp;const alphaArr = arrNo.map((i) {"=>"}{" "}
          String.fromCharCode(i));
          <br />
          &nbsp;&nbsp;return input.toString().split('').map(i {"=>"}{" "}
          alphaArr[i-1]).join('');
          <br />
          &#125;
          <br />
          alphaCodeArray(125);
          <CodePen output={true}>
            Output: <br />
            &nbsp;&nbsp;&nbsp;"ABE"
          </CodePen>
        </CodePen>
      </section>
    </div>
  );
}

export default PureJs;
