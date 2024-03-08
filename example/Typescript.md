# Typescript 기본

### 기본 문법

```tsx
let count = 0; // 숫자
count += 1;
count = '갑자기 분위기 문자열'; // 이러면 에러가 납니다!

const message: string = 'hello world'; // 문자열

const done: boolean = true; // 불리언 값

const numbers: number[] = [1, 2, 3]; // 숫자 배열
const messages: string[] = ['hello', 'world']; // 문자열 배열

messages.push(1); // 숫자 넣으려고 하면.. 안된다!

let mightBeUndefined: string | undefined = undefined; // string 일수도 있고 undefined 일수도 있음
let nullableNumber: number | null = null; // number 일수도 있고 null 일수도 있음

let color: 'red' | 'orange' | 'yellow' = 'red'; // red, orange, yellow 중 하나임
color = 'yellow';
color = 'green'; // 에러 발생!
```

### 제너릭

제네릭을 사용 할 때는 이렇게 `<T>` 처럼 꺽쇠 안에 타입의 이름을 넣어서 사용하며, 이렇게 설정을 해주면 제네릭에 해당하는 타입에는 뭐든지 들어올 수 있게 되면서도, 사용 할 때 타입이 깨지지 않게 됩니다. 만약 함수에 이렇게 제네릭을 사용하게 된다면 함수의 파라미터로 넣은 실제 값의 타입을 활용하게 됩니다.

- 타입이 고정되는 것을 방지하고 재사용 가능한 요소를 선언할 수 있다.
- 타입 검사를 컴파일 시간에 진행함으로써 타입 안정성을 보장.
- 캐스팅 관련 코드를 제거할 수 있다.
- 제네릭 로직을 이용해 타입을 다르게 받을 수 있는 재사용 코드를 만들 수 있다.

```tsx
function merge<A, B>(a: A, b: B): A & B {
  return {
    ...a,
    ...b
  };
}

const merged = merge({ foo: 1 }, { bar: 1 });
```

### JSX에서 arrow function으로 제네릭 사용하기

`const foo = <T extends {}>(x: T):T => x`를 사용하면 된다. 다이아몬드 연산자가 HTML태그가 아니라 제네릭이라는 힌트를 주기 위해 `extends {}`를 사용한다.다만 이 경우, T가 object에 제한되기 때문에 type-safety를 위해 `extends unknown`을 사용할 수 있다.`const foo = <T extends unknown>(x: T) => x`

### readonly, const 차이

**[readonly vs const]**

readonly와 const 는 처음 초기화 할때만 값을 선언하고, 그후에는 값을 수정하지 못한다는 점에서 유사하다.

다만 이 둘은 사용처가 다른데, 변수는 const를 쓰고 프로퍼티는 readonly를 사용된다는 점만 기억하면 된다.

### unknown, any 차이

**`unknown`**과 **`any`**는 둘 다 TypeScript에서 타입을 유연하게 다룰 수 있도록 하는 타입입니다. 그러나 **`unknown`**과 **`any`**는 목적과 사용 방법이 다릅니다.

**`any`**는 모든 타입의 값으로 할당할 수 있습니다. 따라서 **`any`**를 사용하면 타입 체크가 전혀 이루어지지 않아서 컴파일 타임에는 모든 타입의 값을 허용하지만, 런타임에서는 타입이 일치하지 않을 때 예외가 발생합니다. 이러한 특성 때문에 **`any`**는 최대한 사용을 자제해야 합니다.

반면에 **`unknown`**은 **`any`**와 달리 타입 안전성을 보장합니다. **`unknown`**은 모든 타입의 값으로 할당할 수 있지만, 할당받은 변수나 속성을 사용할 때는 반드시 타입 체크를 거쳐야 합니다. 이렇게 함으로써 변수나 속성에 할당된 값이 실제로 사용하려는 타입과 일치하는지 체크할 수 있습니다.

```tsx
let x: any = 10;
x = "hello";
console.log(x.length); // 컴파일은 가능하지만 런타임 에러 발생

let y: unknown = 10;
y = "hello";
if (typeof y === "string") {
  console.log(y.length); // 문자열일 때만 length 속성 사용 가능
}

//------------------------------------------------------------

let value : any = 10;
console.log(value.length); // undefined

let valueNum: unknown = 10;
let valueStr: unknown = 'Test';

console.log(valueNum.length); // 문제 발생
console.log(valueStr.length); // 문제 발생
// => typeof로 해결
```

1. (string | number) extends string ? 'yes' : 'no'
2. (string extends string ? 'yes' : 'no') | (number extends string ? 'yes' : 'no')
3. 'yes' | 'no'

### Interface

TypeScript에서 **`interface`** 는 객체의 타입을 정의하는 문법입니다. **`interface`** 를 사용하면, 객체의 프로퍼티 이름과 타입을 명시할 수 있습니다. 이를 통해, 코드의 가독성과 유지보수성을 높일 수 있습니다.

예를 들어, 다음과 같은 **`interface`** 를 정의할 수 있습니다.

```tsx
interface Person {
  name: string;
  age: number;
}
```

이 **`interface`** 는 **`Person`** 이라는 이름으로 객체의 타입을 정의합니다. 이 객체는 **`name`** 과 **`age`** 라는 두 개의 프로퍼티를 가져야 하며, **`name`** 은 **`string`** 타입, **`age`** 는 **`number`** 타입이어야 합니다.

**`interface`** 를 사용하면, 해당 인터페이스를 구현하는 객체를 생성할 때, 해당 인터페이스가 정의한 프로퍼티를 반드시 구현해야 한다는 것을 보장할 수 있습니다. 이를 통해, 코드의 가독성과 유지보수성을 높일 수 있습니다.

예를 들어, 다음과 같은 **`Person`** 인터페이스를 구현하는 객체를 생성할 수 있습니다.

```tsx
let person: Person = {
  name: 'John',
  age: 30,
};
```

위의 코드에서 **`person`** 변수는 **`Person`** 인터페이스를 구현하는 객체이므로, **`name`**과 **`age`** 프로퍼티를 반드시 가져야 합니다. 따라서, 다음과 같은 코드는 에러가 발생합니다.

```tsx
let person: Person = {
  name: 'John',
};
// Error: 'age' is missing in type '{ name: string; }' but required in type 'Person'.
```

이처럼, **`interface`** 를 사용하여 객체의 타입을 정의함으로써, 코드의 가독성과 유지보수성을 높일 수 있습니다.

TypeScript에서 React 컴포넌트의 **`props`**를 지정하기 위해서는 **`interface`**를 사용할 수 있습니다. **`interface`**는 **`props`**의 타입을 정의하고, 컴포넌트에서 **`props`**를 사용할 때 해당 인터페이스를 참조하여 타입을 확인합니다.

예를 들어, 다음과 같이 **`interface`**를 사용하여 **`props`**를 정의할 수 있습니다.

아래 코드에서 **`Props`** 인터페이스를 정의하여 **`name`**과 **`age`** 프로퍼티를 타입으로 지정합니다. 그리고 **`MyComponent`** 함수형 컴포넌트에서 **`Props`** 인터페이스를 **`React.FC`**의 제네릭 타입으로 전달합니다. 이렇게 하면 **`props`** 객체의 타입이 **`Props`** 인터페이스로 지정됩니다.

함수형 컴포넌트 내부에서는 **`props`** 객체를 인자로 받고, 해당 객체를 비구조화 할당하여 **`name`**과 **`age`** 값을 추출합니다. 이렇게 추출된 값들은 JSX 내부에서 사용됩니다.

```tsx
import React from 'react';

interface Props {
  name: string;
  age: number;
}

const MyComponent: React.FC<Props> = (props) => {
  const { name, age } = props;

  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
};
```

## Hook 사용해보기

- `useState`를 사용 할 때에는 `useState<string>` 과 같이 Generics 를 사용합니다.
- `useState`의 Generics 는 상황에 따라 생략 할 수도 있는데, 상태가 `null` 인 상황이 발생 할 수 있거나, 배열 또는 까다로운 객체를 다루는 경우 Generics 를 명시해야 합니다.
- 타입스크립트 환경에서 `useReducer` 를 쓰면 자동완성이 잘되고 타입체킹도 잘 됩니다.
- `useRef`를 사용 할 땐 Generics 로 타입을 정합니다.
- `useRef`를 사용하여 DOM에 대한 정보를 담을 땐, 초깃값을 `null` 로 설정해야 하고 값을 사용하기 위해서 `null` 체킹도 해주어야 합니다.

## Type Guard

**typeof A**

: A 타입을 문자열로 반환

**A instanceof B**

: B의 프로토타입 체인에 A가 포함되었는지 boolean 반환 (A가 B의 인스턴스인지 확인)

**a in A**

: A의 속성중에 a가 있는지 boolean 반환
