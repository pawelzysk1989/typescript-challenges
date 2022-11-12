type ToPrimitive<T> = T extends string
  ? string
  : T extends number
  ? number
  : T extends boolean
  ? boolean
  : {
      [Key in keyof T]: ToPrimitive<T[Key]>;
    };

type PersonInfo = {
  name: "Tom";
  age: 30;
  married: false;
  addr: {
    home: "123456";
    phone: "13111111111";
  };
  hobbies: ["sing", "dance"];
};

type ExpectedResult = {
  name: string;
  age: number;
  married: boolean;
  addr: {
    home: string;
    phone: string;
  };
  hobbies: [string, string];
};

type ToPrimitiveCases = [
  Expect<Equal<ToPrimitive<PersonInfo>, ExpectedResult>>
];
